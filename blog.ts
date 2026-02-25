import express from 'express';
import Database from 'better-sqlite3';
import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const router = express.Router();
const db = new Database('rovana.db');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'blog-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.get('/', (req, res) => {
  const posts = db.prepare('SELECT * FROM blog ORDER BY created_at DESC').all();
  res.json(posts);
});

router.post('/', upload.single('cover_image'), async (req: any, res) => {
  const { title, content, meta_title, meta_desc, keywords } = req.body;
  const file = req.file;

  let coverImagePath = '';
  if (file) {
    coverImagePath = `uploads/blog-${Date.now()}.webp`;
    await sharp(file.path)
      .resize(1200, 630, { fit: 'cover' })
      .webp()
      .toFile(coverImagePath);
    fs.unlinkSync(file.path);
  }

  const info = db.prepare(`
    INSERT INTO blog (title, content, meta_title, meta_desc, keywords, cover_image)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(title, content, meta_title, meta_desc, keywords, coverImagePath);

  res.status(201).json({ id: info.lastInsertRowid, message: 'تم نشر المقال بنجاح' });
});

export default router;
