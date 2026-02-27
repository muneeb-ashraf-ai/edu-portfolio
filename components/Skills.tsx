'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Code2, Sparkles } from 'lucide-react';
import { SKILLS } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)' }}>{name}</span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 0', background: 'var(--bg-elevated)', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>06 — Skills</span>
          <h2 className="section-heading" style={{ marginBottom: 16 }}>Skills &amp; Competencies</h2>
          <p className="section-subheading">
            A dual toolkit — pedagogical expertise for the classroom and technical mastery for the lab.
          </p>
        </motion.div>

        {/* Two-column skill bars */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 56 }} className="skills-grid">
          {/* Teaching skills */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'var(--math-bg)',
                  border: '1px solid rgba(5,150,105,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <BookOpen size={18} color="var(--math)" />
                </div>
                <div>
                  <span style={{ display: 'block', fontFamily: 'Crimson Pro, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>Teaching Skills</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>Pedagogical Expertise</span>
                </div>
              </div>
              {SKILLS.teaching.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>

          {/* Technical skills */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'var(--accent-bg)',
                  border: '1px solid var(--accent-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Code2 size={18} color="var(--accent)" />
                </div>
                <div>
                  <span style={{ display: 'block', fontFamily: 'Crimson Pro, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>Technical Skills</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>Tools &amp; Technologies</span>
                </div>
              </div>
              {SKILLS.technical.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft skills + tools */}
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
          <div className="card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'var(--violet-bg)',
                border: '1px solid rgba(124,58,237,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Sparkles size={18} color="var(--violet)" />
              </div>
              <div>
                <span style={{ display: 'block', fontFamily: 'Crimson Pro, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>Soft Skills</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>Character &amp; Interpersonal</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {SKILLS.soft.map(s => (
                <span key={s} className="badge-violet badge" style={{ padding: '6px 16px', fontSize: '0.82rem' }}>{s}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech tools row */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.4 }} style={{ marginTop: 32 }}>
          <div style={{ padding: '24px 32px', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>Tools &amp; Platforms</span>
            <div className="divider" style={{ width: 1, height: 20, background: 'var(--border)', margin: '0' }} />
            {['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow / Keras', 'Matplotlib', 'FastAPI', 'SQL', 'Jupyter', 'LaTeX', 'Git / GitHub', 'Canva', 'PostgreSQL', 'MongoDB'].map(tool => (
              <span key={tool} style={{
                padding: '5px 14px',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderRadius: 100,
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                fontFamily: 'JetBrains Mono, monospace',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-border)';
                  e.currentTarget.style.color = 'var(--accent)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
