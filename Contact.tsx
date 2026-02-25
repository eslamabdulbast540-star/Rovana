import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { isSubmitting, isSubmitSuccessful } } = useForm();
  const [error, setError] = React.useState('');

  const onSubmit = async (data: any) => {
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to send');
      reset();
    } catch (e) {
      setError('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">تواصل معنا</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">لنبدأ رحلة <span className="italic font-light opacity-60">الإبداع</span> معاً</h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            فريقنا من المصممين الخبراء جاهز لتحويل رؤيتكم إلى واقع ملموس. تواصلوا معنا اليوم للحصول على استشارة أولية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="luxury-card p-8">
              <h3 className="text-xl font-serif font-bold mb-8 border-b border-gold/20 pb-4">بيانات التواصل</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mb-1">واتساب</div>
                    <div className="text-lg font-bold" dir="ltr">{CONTACT_INFO.whatsapp}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mb-1">البريد الإلكتروني</div>
                    <div className="text-lg font-bold">info@xrovana.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mb-1">الموقع</div>
                    <div className="text-lg font-bold">الكويت، مجمع الأوقاف، الدور الأرضي</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="luxury-card p-8 bg-gold/5 border-gold/20">
              <h3 className="text-xl font-serif font-bold mb-4">استشارة سريعة؟</h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                يمكنكم التواصل معنا مباشرة عبر الواتساب للحصول على رد سريع على استفساراتكم.
              </p>
              <a
                href={CONTACT_INFO.whatsappLink}
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                <MessageCircle size={20} />
                تحدث معنا الآن
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="luxury-card p-8 md:p-12">
              <h3 className="text-2xl font-serif font-bold mb-8">أرسل لنا رسالة</h3>
              
              {isSubmitSuccessful ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gold/10 border border-gold/30 p-10 rounded-2xl text-center"
                >
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-luxury-black" size={32} />
                  </div>
                  <h4 className="text-2xl font-serif font-bold mb-4">تم الإرسال بنجاح!</h4>
                  <p className="text-white/60">شكراً لتواصلكم مع روفانا. سيقوم أحد مستشارينا بالتواصل معكم في أقرب وقت ممكن.</p>
                  <button onClick={() => reset()} className="mt-8 text-gold font-bold border-b border-gold/30 pb-1">إرسال رسالة أخرى</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-1">
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-2">الاسم الكامل</label>
                    <input
                      {...register('name', { required: true })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:border-gold outline-none transition-all"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-2">رقم الهاتف</label>
                    <input
                      {...register('phone', { required: true })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:border-gold outline-none transition-all text-right"
                      placeholder="أدخل رقم هاتفك"
                      dir="rtl"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-2">البريد الإلكتروني (اختياري)</label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:border-gold outline-none transition-all"
                      placeholder="example@domain.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-2">الرسالة</label>
                    <textarea
                      {...register('message', { required: true })}
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:border-gold outline-none transition-all resize-none"
                      placeholder="كيف يمكننا مساعدتك؟"
                    />
                  </div>
                  <div className="md:col-span-2">
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button
                      disabled={isSubmitting}
                      className="w-full bg-gold text-luxury-black font-bold py-5 rounded-xl hover:bg-white transition-all transform active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? 'جاري الإرسال...' : (
                        <>
                          <Send size={20} />
                          إرسال الرسالة
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 luxury-card aspect-[21/9] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.581458925562!2d47.986345!3d29.353215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9d0000000001%3A0x0!2zMjnCsDIxJzExLjYiTiA0N8KwNTknMTAuOCJF!5e0!3m2!1sen!2skw!4v1700000000000!5m2!1sen!2skw"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
