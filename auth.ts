import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Database from 'better-sqlite3';

const router = express.Router();
const db = new Database('rovana.db');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';
const ACCESS_CODE = process.env.ADMIN_ACCESS_CODE || 'ROVANA_2026';

// Initialize admin user if not exists
const initAdmin = () => {
  const admin = db.prepare('SELECT * FROM users WHERE username = ?').get('admin');
  if (!admin) {
    const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'admin123', 10);
    db.prepare('INSERT INTO users (username, password, access_code, role) VALUES (?, ?, ?, ?)')
      .run('admin', hashedPassword, ACCESS_CODE, 'admin');
    console.log('Admin user initialized');
  }
};
initAdmin();

router.post('/login', async (req, res) => {
  const { username, password, accessCode } = req.body;

  try {
    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
    
    if (!user) {
      return res.status(401).json({ message: 'بيانات الدخول غير صحيحة' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    const isAccessCodeValid = accessCode === user.access_code;

    if (!isPasswordValid || !isAccessCodeValid) {
      // Log failed attempt could be added here
      return res.status(401).json({ message: 'بيانات الدخول غير صحيحة' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 8 * 60 * 60 * 1000,
    });

    res.json({
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ في الخادم' });
  }
});

router.post('/logout', (req, res) => {
  res.clearCookie('auth_token');
  res.json({ message: 'تم تسجيل الخروج بنجاح' });
});

export default router;
