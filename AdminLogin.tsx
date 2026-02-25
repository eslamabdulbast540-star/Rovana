import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock, User, Key } from 'lucide-react';

export default function AdminLogin() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    setError('');
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        // Redirect to dashboard
        window.location.href = '/admin/dashboard';
      } else {
        setError(result.message || 'فشل تسجيل الدخول');
      }
    } catch (err) {
      setError('حدث خطأ في الاتصال بالخادم');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-black px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full luxury-card p-8 md:p-12"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif font-bold gold-text tracking-widest mb-2">ROVANA</h1>
          <p className="text-white/50 text-sm">لوحة التحكم السرية والمحمية</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg mb-6 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-2">اسم المستخدم</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input
                {...register('username', { required: true })}
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-gold outline-none transition-all"
                placeholder="أدخل اسم المستخدم"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-2">كلمة المرور</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input
                {...register('password', { required: true })}
                type="password"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-gold outline-none transition-all"
                placeholder="أدخل كلمة المرور"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-2">كود الدخول الإضافي</label>
            <div className="relative">
              <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input
                {...register('accessCode', { required: true })}
                type="password"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-gold outline-none transition-all"
                placeholder="أدخل كود الدخول"
              />
            </div>
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-gold text-luxury-black font-bold py-4 rounded-xl hover:bg-white transition-all transform active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? 'جاري التحقق...' : 'دخول آمن'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            Protected by Advanced Security Systems
          </p>
        </div>
      </motion.div>
    </div>
  );
}
