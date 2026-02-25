import express from 'express';
import Database from 'better-sqlite3';
import multer from 'multer';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs';

const router = express.Router();
const db = new Database('rovana.db');

// Multer config for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Portfolio Routes
router.get('/', (req, res) => {
  const projects = db.prepare(`
    SELECT p.*, pi.image_path as primary_image 
    FROM portfolio p 
    LEFT JOIN portfolio_images pi ON p.id = pi.portfolio_id AND pi.is_primary = 1
    ORDER BY p.created_at DESC
  `).all();
  res.json(projects);
});

router.post('/', upload.array('images', 10), async (req: any, res) => {
  const { title, description, category } = req.body;
  const files = req.files;

  const info = db.prepare('INSERT INTO portfolio (title, description, category) VALUES (?, ?, ?)')
    .run(title, description, category);
  
  const portfolioId = info.lastInsertRowid;

  if (files && files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const webpPath = `uploads/portfolio-${portfolioId}-${i}-${Date.now()}.webp`;
      
      // Convert to WebP and compress
      await sharp(file.path)
        .resize(1200, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      // Remove original file
      fs.unlinkSync(file.path);

      db.prepare('INSERT INTO portfolio_images (portfolio_id, image_path, is_primary, sort_order) VALUES (?, ?, ?, ?)')
        .run(portfolioId, webpPath, i === 0 ? 1 : 0, i);
    }
  }

  res.status(201).json({ id: portfolioId, message: 'تم إضافة المشروع بنجاح' });
});

export default router;
