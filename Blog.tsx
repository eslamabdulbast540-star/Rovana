import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

export default function Blog() {
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">مدونة روفانا</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">عالم من <span className="italic font-light opacity-60">الإلهام</span></h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            نشارككم أحدث اتجاهات التصميم الداخلي، نصائح الخبراء، وقصص من وراء الكواليس لمشاريعنا الفاخرة.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="luxury-card h-96 animate-pulse bg-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.length > 0 ? posts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="luxury-card group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.cover_image || `https://picsum.photos/seed/blog-${post.id}/800/500`}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs text-white/40 mb-4 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {format(new Date(post.created_at), 'dd MMMM yyyy', { locale: ar })}</span>
                    <span className="flex items-center gap-1"><User size={12} /> روفانا</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">{post.title}</h3>
                  <p className="text-white/50 text-sm line-clamp-3 mb-6 leading-relaxed">
                    {post.content.substring(0, 150)}...
                  </p>
                  <button className="text-gold font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                    اقرأ المزيد <ArrowLeft size={16} />
                  </button>
                </div>
              </motion.article>
            )) : (
              <div className="col-span-full text-center py-20 text-white/30">
                (يتم رفع المقالات من قبل ممثلي الشركة)
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
