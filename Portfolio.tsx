import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Filter } from 'lucide-react';

export default function Portfolio() {
  const [projects, setProjects] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState('الكل');

  React.useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  const categories = ['الكل', 'فيلا', 'مجلس', 'شقة', 'تجاري'];
  const filteredProjects = filter === 'الكل' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            إبداعاتنا
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            معرض الأعمال
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-2xl mx-auto"
          >
            نستعرض لكم مجموعة مختارة من مشاريعنا التي تجسد مفهوم الفخامة والابتكار في التصميم الداخلي.
          </motion.p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full border transition-all text-sm font-medium ${
                filter === cat ? 'bg-gold border-gold text-luxury-black' : 'border-white/10 text-white/60 hover:border-gold/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="luxury-card aspect-[4/5] animate-pulse bg-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] luxury-card"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                <img
                  src={project.primary_image || `https://picsum.photos/seed/${project.id}/800/1000`}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-serif font-bold mb-4">{project.title}</h3>
                  <button className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">
                    عرض المشروع <ArrowLeft size={16} />
                  </button>
                </div>
              </motion.div>
            )) : (
              <div className="col-span-full text-center py-20 text-white/30">
                (يتم رفع المشاريع من قبل ممثلي الشركة)
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
