import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-luxury-black/40 to-luxury-black z-10" />
          <div className="w-full h-full bg-[url('https://picsum.photos/seed/rovana-hero/1920/1080?blur=2')] bg-cover bg-center" />
          <div className="absolute inset-0 flex items-center justify-center text-white/10 text-[20vw] font-serif font-bold select-none pointer-events-none">
            ROVANA
          </div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-gold font-medium tracking-[0.3em] uppercase mb-4 text-sm sm:text-base"
          >
            تصميم داخلي فاخر في الكويت
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold mb-8 leading-tight"
          >
            نصمم <span className="gold-text italic">الفخامة</span> التي تليق بتطلعاتكم
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            في روفانا، نحول المساحات إلى تحف فنية تعكس رقي ذوقكم. خبرة سنوات في تصميم القصور والفلل والمشاريع التجارية الكبرى في الخليج.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/portfolio" className="w-full sm:w-auto bg-gold text-luxury-black px-10 py-4 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105">
              استكشف أعمالنا
            </Link>
            <Link to="/contact" className="w-full sm:w-auto border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              تواصل معنا
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-luxury-gray border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'مشروع منجز', value: '150+' },
              { label: 'عميل سعيد', value: '120+' },
              { label: 'سنوات خبرة', value: '10+' },
              { label: 'جائزة تصميم', value: '15+' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-sm text-white/50 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">خدماتنا الحصرية</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">حلول تصميم متكاملة <br /> <span className="font-light italic opacity-60">من المفهوم إلى التنفيذ</span></h2>
            </div>
            <Link to="/services" className="text-gold flex items-center gap-2 hover:gap-4 transition-all font-medium">
              عرض جميع الخدمات <ArrowLeft size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'التصميم الداخلي السكني', desc: 'نصمم فلل وقصور تعكس شخصيتك وتوفر أقصى درجات الراحة والفخامة.', icon: <Star className="text-gold" /> },
              { title: 'التصميم التجاري والمكاتب', desc: 'خلق بيئات عمل ملهمة ومساحات تجارية تجذب العملاء وتعزز علامتك التجارية.', icon: <Star className="text-gold" /> },
              { title: 'الإشراف والتنفيذ', desc: 'نضمن تحويل التصاميم إلى واقع بدقة متناهية وبأعلى معايير الجودة العالمية.', icon: <Star className="text-gold" /> },
            ].map((service, i) => (
              <div key={i} className="luxury-card p-10 group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed mb-8">{service.desc}</p>
                <Link to="/services" className="text-sm font-bold tracking-widest uppercase border-b border-gold/30 pb-1 hover:border-gold transition-colors">
                  اقرأ المزيد
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-luxury-beige/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">معرض الأعمال</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">مشاريع مختارة بعناية</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((p) => (
              <div key={p} className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
                <div className="absolute inset-0 bg-luxury-black/40 group-hover:bg-luxury-black/20 transition-all duration-700 z-10" />
                <div className="w-full h-full bg-[url('https://picsum.photos/seed/rovana-p'+p+'/1200/900')] bg-cover bg-center transform group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute bottom-0 left-0 right-0 p-10 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2 block">مشروع سكني - الكويت</span>
                  <h3 className="text-3xl font-serif font-bold mb-4">فيلا المسيلة الفاخرة</h3>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    تفاصيل المشروع <ArrowLeft size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Quote className="absolute -top-10 -left-10 text-gold/10 w-64 h-64 -z-10" />
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-8">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-gold text-gold" />)}
            </div>
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-10">
              "تعاملنا مع روفانا لتصميم فيلتنا الخاصة، وكانت النتيجة تفوق التوقعات. الاهتمام بالتفاصيل واختيار المواد كان مذهلاً. روفانا هي الخيار الأول لمن يبحث عن الفخامة الحقيقية."
            </p>
            <div className="font-bold tracking-widest uppercase text-gold">السيد / خالد المرزوق</div>
            <div className="text-sm text-white/40 mt-1">مالك فيلا - منطقة الشويخ</div>
          </div>
        </div>
      </section>
    </div>
  );
}
