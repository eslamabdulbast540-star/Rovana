import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Instagram, Youtube, Facebook, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-luxury-gray pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-serif font-bold gold-text tracking-widest mb-6 block">ROVANA</Link>
            <p className="text-white/50 leading-relaxed mb-8">
              شركة روفانا للتصميم الداخلي والديكور الفاخر. نصنع مساحات تروي قصص الفخامة والجمال في الكويت والخليج.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href={CONTACT_INFO.instagram} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href={CONTACT_INFO.youtube} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <Youtube size={18} />
              </a>
              <a href={CONTACT_INFO.facebook} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 border-b border-gold/20 pb-2 inline-block">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-white/50 hover:text-gold transition-colors">خدماتنا</Link></li>
              <li><Link to="/portfolio" className="text-white/50 hover:text-gold transition-colors">أعمالنا</Link></li>
              <li><Link to="/about" className="text-white/50 hover:text-gold transition-colors">عن روفانا</Link></li>
              <li><Link to="/blog" className="text-white/50 hover:text-gold transition-colors">المدونة</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 border-b border-gold/20 pb-2 inline-block">خدماتنا</h4>
            <ul className="space-y-4">
              <li className="text-white/50">تصميم الفلل والقصور</li>
              <li className="text-white/50">تصميم المكاتب والشركات</li>
              <li className="text-white/50">تصميم المطاعم والكافيهات</li>
              <li className="text-white/50">الإشراف على التنفيذ</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 border-b border-gold/20 pb-2 inline-block">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>الكويت، مجمع الأوقاف، الدور الأرضي</span>
              </li>
              <li className="flex items-center gap-3 text-white/50">
                <Phone size={18} className="text-gold shrink-0" />
                <span dir="ltr">{CONTACT_INFO.whatsapp}</span>
              </li>
              <li className="flex items-center gap-3 text-white/50">
                <Mail size={18} className="text-gold shrink-0" />
                <span>info@xrovana.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
          <p>© {new Date().getFullYear()} روفانا للتصميم الداخلي. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">سياسة الخصوصية</a>
            <a href="#" className="hover:text-gold">الشروط والأحكام</a>
          </div>
        </div>
      </div>

      {/* WhatsApp Float */}
      <a
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </footer>
  );
}
