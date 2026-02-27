'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, Cpu } from 'lucide-react';
import { SUBJECTS } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function SubjectCard({
  subj,
  index,
  type,
}: {
  subj: (typeof SUBJECTS.mathematics)[0];
  index: number;
  type: 'math' | 'tech';
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className="card"
      style={{ cursor: 'pointer', overflow: 'hidden' }}
      onClick={() => setExpanded(v => !v)}
    >
      <div style={{ padding: '24px 24px 20px' }}>
        {/* Icon badge + symbol */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
          <div
            style={{
              width: 48, height: 48,
              borderRadius: 12,
              background: type === 'math' ? 'var(--math-bg)' : 'var(--accent-bg)',
              border: `1px solid ${type === 'math' ? 'rgba(5,150,105,0.25)' : 'var(--accent-border)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Crimson Pro, serif',
              fontSize: '1.5rem',
              fontStyle: 'italic',
              color: type === 'math' ? 'var(--math)' : 'var(--accent)',
            }}
          >
            {subj.icon}
          </div>
          <span
            className={type === 'math' ? 'badge-math badge' : 'badge'}
            style={{ fontSize: '0.65rem' }}
          >
            {subj.level}
          </span>
        </div>

        <h3 style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
          {subj.name}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>
          {subj.description}
        </p>

        <button
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '0.8rem', fontWeight: 600,
            color: type === 'math' ? 'var(--math)' : 'var(--accent)',
            padding: 0,
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: '0.04em',
          }}
        >
          Topics covered
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <ChevronDown size={15} />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: '0 24px 20px',
                borderTop: '1px solid var(--border)',
                paddingTop: 16,
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {subj.topics.map(t => (
                  <span
                    key={t}
                    style={{
                      padding: '4px 12px',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      borderRadius: 100,
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Subjects() {
  return (
    <section id="subjects" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>03 — Curriculum</span>
          <h2 className="section-heading" style={{ marginBottom: 16 }}>Subjects I Teach</h2>
          <p className="section-subheading">
            A curriculum spanning classical mathematics and cutting-edge technology — click any card to reveal specific topics.
          </p>
        </motion.div>

        {/* Mathematics */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} style={{ marginBottom: 56 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'var(--math-bg)',
              border: '1px solid rgba(5,150,105,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <BookOpen size={18} color="var(--math)" />
            </div>
            <div>
              <span style={{ display: 'block', fontFamily: 'Crimson Pro, serif', fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-primary)' }}>Mathematics</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>Pure &amp; Applied</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="subjects-math-grid">
            {SUBJECTS.mathematics.map((s, i) => (
              <SubjectCard key={i} subj={s} index={i} type="math" />
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: 56 }} />

        {/* Technology */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'var(--accent-bg)',
              border: '1px solid var(--accent-border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Cpu size={18} color="var(--accent)" />
            </div>
            <div>
              <span style={{ display: 'block', fontFamily: 'Crimson Pro, serif', fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-primary)' }}>Technology</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>AI, Data Science &amp; Programming</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="subjects-tech-grid">
            {SUBJECTS.technology.map((s, i) => (
              <SubjectCard key={i} subj={s} index={i} type="tech" />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .subjects-math-grid, .subjects-tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .subjects-math-grid, .subjects-tech-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
