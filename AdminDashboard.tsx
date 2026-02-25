import React from 'react';
import { LayoutDashboard, Briefcase, FileText, Image as ImageIcon, Settings, LogOut, MessageSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [stats, setStats] = React.useState({ projects: 0, articles: 0, images: 0, requests: 0 });
  const navigate = useNavigate();

  React.useEffect(() => {
    // Fetch stats from API
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/health'); // Placeholder for stats endpoint
        // setStats(...)
      } catch (e) {}
    };
    fetchStats();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/rovana-admin-secure';
  };

  return (
    <div className="min-h-screen bg-luxury-black flex">
      {/* Sidebar */}
      <aside className="w-64 bg-luxury-gray border-l border-white/5 flex flex-col">
        <div className="p-8 border-b border-white/5">
          <h2 className="text-xl font-serif font-bold gold-text tracking-widest">ROVANA</h2>
          <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Admin Panel</p>
        </div>

        <nav className="flex-grow p-4 space-y-2">
          <Link to="/admin/dashboard" className="flex items-center gap-3 p-3 rounded-xl bg-gold/10 text-gold font-medium">
            <LayoutDashboard size={20} />
            <span>لوحة التحكم</span>
          </Link>
          <Link to="/admin/portfolio" className="flex items-center gap-3 p-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
            <Briefcase size={20} />
            <span>إدارة الأعمال</span>
          </Link>
          <Link to="/admin/blog" className="flex items-center gap-3 p-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
            <FileText size={20} />
            <span>إدارة المدونة</span>
          </Link>
          <Link to="/admin/messages" className="flex items-center gap-3 p-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
            <MessageSquare size={20} />
            <span>طلبات التواصل</span>
          </Link>
          <Link to="/admin/settings" className="flex items-center gap-3 p-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
            <Settings size={20} />
            <span>الإعدادات العامة</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-all"
          >
            <LogOut size={20} />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-2">مرحباً بك، المدير العام</h1>
            <p className="text-white/40">إليك نظرة سريعة على أداء الموقع اليوم</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-left">
              <div className="text-sm font-bold">25 فبراير 2026</div>
              <div className="text-xs text-white/30">آخر دخول: منذ 5 دقائق</div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'إجمالي المشاريع', value: '24', icon: <Briefcase className="text-gold" /> },
            { label: 'مقالات المدونة', value: '12', icon: <FileText className="text-gold" /> },
            { label: 'طلبات التواصل', value: '8', icon: <MessageSquare className="text-gold" /> },
            { label: 'إجمالي الصور', value: '156', icon: <ImageIcon className="text-gold" /> },
          ].map((stat, i) => (
            <div key={i} className="luxury-card p-6 flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity / Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="luxury-card p-8">
            <h3 className="text-xl font-serif font-bold mb-6">أحدث طلبات التواصل</h3>
            <div className="space-y-4">
              <p className="text-white/40 text-center py-10">لا توجد طلبات جديدة حالياً</p>
            </div>
          </div>
          <div className="luxury-card p-8">
            <h3 className="text-xl font-serif font-bold mb-6">إجراءات سريعة</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 rounded-xl border border-white/10 hover:border-gold hover:bg-gold/5 transition-all text-center">
                <Briefcase size={24} className="mx-auto mb-2 text-gold" />
                <span className="text-sm">إضافة مشروع</span>
              </button>
              <button className="p-4 rounded-xl border border-white/10 hover:border-gold hover:bg-gold/5 transition-all text-center">
                <FileText size={24} className="mx-auto mb-2 text-gold" />
                <span className="text-sm">كتابة مقال</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
