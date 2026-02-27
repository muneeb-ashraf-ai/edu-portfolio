'use client';
import { motion } from 'framer-motion';
import { Heart, Target, Lightbulb, Users, GraduationCap, Award } from 'lucide-react';
import { PERSONAL, EDUCATION, CERTIFICATIONS } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const PHILOSOPHY_PILLARS = [
  {
    icon: Lightbulb,
    title: 'Start with Why',
    description: 'Every lesson begins with the intuition behind the concept — not the formula. Understanding the reason makes everything else follow naturally.',
  },
  {
    icon: Target,
    title: 'Build Mental Models',
    description: 'I guide students to construct durable frameworks in their minds. When you truly understand, you can derive — not just recall.',
  },
  {
    icon: Heart,
    title: 'Empathetic Mentoring',
    description: 'Confusion is not failure — it is a signal. I create a learning environment where questions are celebrated, not judged.',
  },
  {
    icon: Users,
    title: 'Practical Application',
    description: 'Mathematics and AI are not abstract exercises. I connect every topic to real-world problems so students see the purpose.',
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Section header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>01 — About</span>
          <h2 className="section-heading" style={{ marginBottom: 16 }}>Teaching Philosophy</h2>
          <p className="section-subheading">
            What drives me as an educator — and why I believe anyone can master mathematics and technology.
          </p>
        </motion.div>

        {/* Two-column layout: bio + academic background */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 72, alignItems: 'start' }} className="about-grid">
          {/* Bio */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'var(--accent-bg)',
                  border: '1px solid var(--accent-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <GraduationCap size={22} color="var(--accent)" />
                </div>
                <h3 style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Who I Am
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 20, fontSize: '0.97rem' }}>
                {PERSONAL.bio}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.97rem' }}>
                I have a deep passion for <strong style={{ color: 'var(--text-primary)' }}>teaching mathematics and technology</strong> — not just as subjects, but as ways of thinking. I hold an MSc in Mathematics from GCU Lahore and am currently pursuing an MS in Data Science at UET Lahore, which keeps me at the frontier of what I teach.
              </p>
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { label: 'Location', value: PERSONAL.location },
                    { label: 'Email', value: PERSONAL.email },
                    { label: 'Languages', value: 'Urdu (native) · English (C1)' },
                  ].map(r => (
                    <div key={r.label} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.06em', minWidth: 72 }}>{r.label}</span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Academic background */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'var(--math-bg)',
                  border: '1px solid rgba(5,150,105,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Award size={22} color="var(--math)" />
                </div>
                <h3 style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Academic Background
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {EDUCATION.map((ed, i) => (
                  <div key={i} style={{
                    padding: '16px',
                    background: 'var(--bg-elevated)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {ed.status === 'current' && (
                      <span style={{
                        position: 'absolute', top: 10, right: 12,
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.62rem', color: 'var(--math)', background: 'var(--math-bg)',
                        padding: '2px 8px', borderRadius: 100,
                        border: '1px solid rgba(5,150,105,0.2)',
                        letterSpacing: '0.06em',
                      }}>
                        CURRENT
                      </span>
                    )}
                    <div style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>
                      {ed.degree}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--accent)', marginBottom: 2 }}>{ed.institution}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {ed.duration} · {ed.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy section */}
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} style={{ marginBottom: 32 }}>
          <h3 style={{ fontFamily: 'Crimson Pro, serif', fontSize: '2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12 }}>
            My Teaching Philosophy
          </h3>
          <blockquote style={{
            fontFamily: 'Crimson Pro, serif',
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            borderLeft: '3px solid var(--violet)',
            paddingLeft: 20,
            maxWidth: '70ch',
            marginBottom: 40,
          }}>
            "{PERSONAL.philosophy}"
          </blockquote>
        </motion.div>

        {/* Philosophy pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="pillars-grid">
          {PHILOSOPHY_PILLARS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="card"
              style={{ padding: '24px', cursor: 'default' }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'var(--accent-bg)',
                border: '1px solid var(--accent-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
              }}>
                <p.icon size={20} color="var(--accent)" />
              </div>
              <h4 style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>
                {p.title}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .pillars-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
