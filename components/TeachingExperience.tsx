'use client';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle, Briefcase } from 'lucide-react';
import { TEACHING_EXPERIENCE } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const OTHER_ROLES = [
  {
    role: 'Python Developer Intern',
    org: 'Meissasoft, Lahore',
    duration: 'Jul 2025 – Present',
    note: 'Full-stack Python development: FastAPI, SQLAlchemy, OOP, DSA, SQL — building production-quality systems.',
  },
  {
    role: 'Remote ML Intern',
    org: 'InsightSol Technologies',
    duration: 'Apr – May 2024',
    note: 'First industry ML experience: trained and evaluated machine learning algorithms in a structured setting.',
  },
];

export default function TeachingExperience() {
  return (
    <section id="experience" style={{ padding: '100px 0', background: 'var(--bg-elevated)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative dot grid */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>02 — Experience</span>
          <h2 className="section-heading" style={{ marginBottom: 16 }}>Teaching Experience</h2>
          <p className="section-subheading">
            A timeline of my professional teaching career — from community academies to established schools.
          </p>
        </motion.div>

        {/* Primary teaching roles */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 64 }} className="exp-grid">
          {TEACHING_EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="card"
              style={{ padding: 36, display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              {/* Header */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                  <h3 style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {exp.role}
                  </h3>
                  <span className="badge">{exp.grades}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 500 }}>
                    <Briefcase size={14} /> {exp.institution}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <MapPin size={13} /> {exp.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <Calendar size={13} /> {exp.duration}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="divider" />

              {/* Description */}
              <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontFamily: 'Crimson Pro, serif' }}>
                {exp.description}
              </p>

              {/* Highlights */}
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 12 }}>
                  Key Contributions
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <CheckCircle size={15} color="var(--math)" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other relevant experience */}
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
          <h3 style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.6rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 24 }}>
            Other Professional Experience
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {OTHER_ROLES.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px 24px',
                  display: 'flex',
                  gap: 20,
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{
                  width: 10, height: 10,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  marginTop: 6,
                  flexShrink: 0,
                  boxShadow: '0 0 0 3px var(--accent-bg)',
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{r.role}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>{r.duration}</span>
                  </div>
                  <div style={{ fontSize: '0.83rem', color: 'var(--accent)', marginBottom: 6 }}>{r.org}</div>
                  <div style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{r.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) { .exp-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
