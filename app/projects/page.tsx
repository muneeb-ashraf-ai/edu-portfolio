'use client';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Brain, BarChart2, Code2, HeartPulse, ShieldAlert, Eye } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import Footer from '@/components/Footer';

const ICONS: Record<string, React.ReactNode> = {
  'Computer Vision':   <Eye size={18} />,
  'Regression Analysis': <BarChart2 size={18} />,
  'Backend API':       <Code2 size={18} />,
  'Healthcare AI':     <HeartPulse size={18} />,
  'Anomaly Detection': <ShieldAlert size={18} />,
};

function FadeSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
      }}
      whileHover={{ scale: 1.015 }}
      onClick={() => setExpanded(v => !v)}
    >
      {/* Card top stripe */}
      <div style={{ height: 4, background: 'linear-gradient(90deg, var(--accent) 0%, var(--border-accent) 100%)' }} />

      <div style={{ padding: '24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-muted)',
              flexShrink: 0,
            }}>
              {ICONS[project.category] ?? <Brain size={18} />}
            </div>
            <span style={{ fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {project.category}
            </span>
          </div>
          <div style={{ color: 'var(--text-muted)', flexShrink: 0 }}>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>

        <h3 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: '1.05rem',
          marginBottom: 10,
          letterSpacing: '-0.01em',
        }}>
          {project.title}
        </h3>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 16 }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Expanded details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <hr className="divider" style={{ margin: '20px 0' }} />

              <div style={{ marginBottom: 12 }}>
                <div className="label" style={{ marginBottom: 10 }}>Teaching angle</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {project.teachingAngle}
                </p>
              </div>

              <div>
                <div className="label" style={{ marginBottom: 10 }}>Key concepts</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.concepts.map(c => (
                    <span key={c} className="badge">{c}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <>
      <div style={{ paddingTop: 80 }}>
        {/* Banner */}
        <div style={{
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border)',
          padding: '80px 28px 64px',
        }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="label" style={{ display: 'block', marginBottom: 16 }}>Projects</span>
              <h1 className="display-lg" style={{ marginBottom: 16, maxWidth: 640 }}>
                AI & Data Science<br />
                <span style={{ color: 'var(--text-secondary)' }}>Work</span>
              </h1>
              <p className="body-lg" style={{ maxWidth: '56ch' }}>
                Real-world machine learning projects used as live teaching demonstrations — each project comes with a focused classroom application.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Filter tabs */}
        <div style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px' }}>
            <FadeSection>
              <div style={{ display: 'flex', gap: 4, overflowX: 'auto', padding: '12px 0' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    style={{
                      padding: '7px 18px',
                      borderRadius: 'var(--radius-full)',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.84rem',
                      fontWeight: filter === cat ? 600 : 400,
                      background: filter === cat ? 'var(--accent)' : 'transparent',
                      color: filter === cat ? 'var(--bg-surface)' : 'var(--text-secondary)',
                      transition: 'background 0.2s, color 0.2s',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeSection>
          </div>
        </div>

        {/* Grid */}
        <div style={{ padding: '64px 28px 80px', maxWidth: 1100, margin: '0 auto' }}>
          <FadeSection>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: 32 }}>
              {visible.length} {visible.length === 1 ? 'project' : 'projects'} — click any card to expand details
            </p>
          </FadeSection>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 20,
          }}>
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
