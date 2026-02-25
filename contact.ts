import express from 'express';
import Database from 'better-sqlite3';

const router = express.Router();
const db = new Database('rovana.db');

router.get('/', (req, res) => {
  const requests = db.prepare('SELECT * FROM contact_requests ORDER BY created_at DESC').all();
  res.json(requests);
});

router.post('/', (req, res) => {
  const { name, email, phone, message } = req.body;
  
  if (!name || !phone || !message) {
    return res.status(400).json({ message: 'يرجى ملء جميع الحقول المطلوبة' });
  }

  db.prepare('INSERT INTO contact_requests (name, email, phone, message) VALUES (?, ?, ?, ?)')
    .run(name, email, phone, message);
    
  res.status(201).json({ message: 'تم إرسال رسالتك بنجاح، سنتواصل معك قريباً' });
});

export default router;
