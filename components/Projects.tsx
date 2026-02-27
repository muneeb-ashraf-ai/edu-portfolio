'use client';
import { motion } from 'framer-motion';
import { Microscope, ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import { PERSONAL } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const CATEGORY_COLORS: Record<string, string> = {
  'Computer Vision': 'accent',
  'Regression Analysis': 'math',
  'Backend API': 'violet',
  'Healthcare AI': 'math',
  'Anomaly Detection': 'accent',
};

function getCategoryBadgeClass(cat: string) {
  const color = CATEGORY_COLORS[cat];
  if (color === 'math') return 'badge-math badge';
  if (color === 'violet') return 'badge-violet badge';
  return 'badge';
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>05 — Projects</span>
          <h2 className="section-heading" style={{ marginBottom: 16 }}>Educational Projects</h2>
          <p className="section-subheading">
            Each project is more than a technical achievement — it is a teaching tool, a case study, and a demonstration of applied knowledge.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="projects-grid">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="card"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {/* Top accent bar */}
              <div style={{
                height: 3,
                background: `linear-gradient(90deg, var(--accent), var(--violet))`,
              }} />

              <div style={{ padding: '28px 28px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Category + icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className={getCategoryBadgeClass(project.category)}>{project.category}</span>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Microscope size={17} color="var(--accent)" />
                  </div>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'Crimson Pro, serif',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.25,
                }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75, flex: 1 }}>
                  {project.description}
                </p>

                {/* Divider */}
                <div className="divider" />

                {/* Teaching angle */}
                <div style={{
                  background: 'var(--accent-bg)',
                  border: '1px solid var(--accent-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px 14px',
                }}>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: 5,
                  }}>
                    Teaching Angle
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {project.teachingAngle}
                  </p>
                </div>

                {/* Concepts */}
                <div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}>
                    Core Concepts
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {project.concepts.map(c => (
                      <span key={c} style={{
                        padding: '3px 10px',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border)',
                        borderRadius: 100,
                        fontSize: '0.72rem',
                        color: 'var(--text-secondary)',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="badge" style={{ fontSize: '0.65rem' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ marginTop: 56, textAlign: 'center' }}
        >
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 20 }}>
            Full project code and write-ups are available on GitHub
          </p>
          <a
            className="btn-outline"
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} /> View GitHub Profile
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) { .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
