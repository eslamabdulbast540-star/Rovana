import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ROVANA_COLORS = {
  primary: '#D4AF37', // Gold
  secondary: '#1A1A1A', // Dark Gray/Black
  accent: '#F5F2ED', // Beige/Cream
  text: '#FFFFFF',
};

export const CONTACT_INFO = {
  whatsapp: '+96566632782',
  whatsappLink: 'https://wa.me/96566632782',
  googleMaps: 'https://maps.app.goo.gl/NE4gbCzCxwNWQYW37',
  instagram: 'https://www.instagram.com/xrovana',
  youtube: 'https://youtube.com/@xxrovana',
  facebook: 'https://www.facebook.com/profile.php?id=100086897229929',
  tiktok: 'https://vm.tiktok.com/ZS9e5e1pYTEJo-bMHOq/',
  pinterest: 'https://pin.it/fswwFqSaI',
  snapchat: 'https://www.snapchat.com/@xubjisbj',
  soundcloud: 'https://on.soundcloud.com/k1Y6DdPa82R1WY5B6n',
};
