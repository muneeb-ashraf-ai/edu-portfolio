'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Award, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { PERSONAL, TEACHING_EXPERIENCE, EDUCATION, CERTIFICATIONS } from '@/lib/data';
import Footer from '@/components/Footer';

function Section({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function EduItem({ edu, index }: { edu: (typeof EDUCATION)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      style={{ position: 'relative', marginBottom: 28 }}
    >
      <div className="timeline-node" style={{ position: 'absolute', left: -32, top: 6 }} />
      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: '16px 20px',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}>
        {edu.status === 'current' && (
          <span style={{
            display: 'inline-block', marginBottom: 8,
            fontSize: '0.68rem', fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--text-primary)', background: 'var(--border)',
            padding: '2px 8px', borderRadius: 'var(--radius-full)',
          }}>Current</span>
        )}
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>{edu.degree}</div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 4 }}>{edu.institution}</div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", marginBottom: 8 }}>{edu.duration}</div>
        <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{edu.detail}</p>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      <div style={{ paddingTop: 80 }}>
        {/* ── Hero banner ── */}
        <div style={{
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border)',
          padding: '80px 28px 72px',
        }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="label" style={{ display: 'block', marginBottom: 16 }}>About Me</span>
              <h1 className="display-lg" style={{ marginBottom: 20, maxWidth: 700 }}>
                Educator, Mathematician,<br />
                <span style={{ color: 'var(--text-secondary)' }}>AI Practitioner</span>
              </h1>
              <p className="body-lg" style={{ maxWidth: 60 + 'ch', marginBottom: 32 }}>
                {PERSONAL.bio}
              </p>
              {/* Quick info pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <span className="badge-matte badge" style={{ display: 'inline-flex', gap: 6 }}>
                  <MapPin size={12} /> {PERSONAL.location}
                </span>
                <a href={`mailto:${PERSONAL.email}`} className="badge-matte badge" style={{ display: 'inline-flex', gap: 6, textDecoration: 'none' }}>
                  <Mail size={12} /> {PERSONAL.email}
                </a>
                <span className="badge-matte badge" style={{ display: 'inline-flex', gap: 6 }}>
                  <Phone size={12} /> {PERSONAL.phone}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Philosophy + Education split ── */}
        <div style={{ padding: '80px 28px', maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 40,
            alignItems: 'start',
          }}>
            {/* Philosophy */}
            <Section>
              <span className="label" style={{ display: 'block', marginBottom: 14 }}>Teaching Philosophy</span>
              <h2 className="heading-lg" style={{ marginBottom: 20 }}>How I teach</h2>
              <p className="body-md">{PERSONAL.philosophy}</p>
            </Section>

            {/* Education timeline */}
            <Section>
              <span className="label" style={{ display: 'block', marginBottom: 14 }}>
                <GraduationCap size={12} style={{ display: 'inline', marginRight: 6 }} />
                Education
              </span>
              <div style={{ position: 'relative', paddingLeft: 36 }}>
                <div className="timeline-rail" />
                {EDUCATION.map((edu, i) => (
                  <EduItem key={i} edu={edu} index={i} />
                ))}
              </div>
            </Section>
          </div>
        </div>

        <hr className="divider" />

        {/* ── Teaching Experience ── */}
        <div style={{ padding: '80px 28px', maxWidth: 1100, margin: '0 auto' }}>
          <Section>
            <span className="label" style={{ display: 'block', marginBottom: 14 }}>
              <Briefcase size={12} style={{ display: 'inline', marginRight: 6 }} />
              Teaching Experience
            </span>
            <h2 className="heading-xl" style={{ marginBottom: 48 }}>Classroom history</h2>
          </Section>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {TEACHING_EXPERIENCE.map((exp, i) => (
              <Section key={i} style={{ height: '100%' }}>
                <div className="card" style={{ padding: '28px', height: '100%' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '1.05rem', marginBottom: 4 }}>{exp.role}</h3>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{exp.institution}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", marginTop: 4 }}>{exp.location}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span className="badge-matte badge">{exp.duration}</span>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: 4 }}>{exp.grades}</div>
                    </div>
                  </div>

                  <hr className="divider" style={{ marginBottom: 16 }} />

                  <p className="body-md" style={{ marginBottom: 16 }}>{exp.description}</p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--border-accent)', marginTop: 2, flexShrink: 0 }}>—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>
            ))}
          </div>
        </div>

        <hr className="divider" />

        {/* ── Certifications ── */}
        <div style={{ padding: '80px 28px', maxWidth: 1100, margin: '0 auto' }}>
          <Section>
            <span className="label" style={{ display: 'block', marginBottom: 14 }}>
              <Award size={12} style={{ display: 'inline', marginRight: 6 }} />
              Certifications
            </span>
            <h2 className="heading-xl" style={{ marginBottom: 48 }}>Credentials</h2>
          </Section>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
          }}>
            {CERTIFICATIONS.map((cert, i) => (
              <Section key={i}>
                <div style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-accent)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <div style={{ fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>{cert.issuer}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '0.9rem', marginBottom: cert.detail ? 6 : 0 }}>{cert.title}</div>
                  {cert.detail && <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cert.detail}</div>}
                </div>
              </Section>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: '48px 28px 80px', maxWidth: 1100, margin: '0 auto' }}>
          <Section>
            <div style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              padding: '48px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 24,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <h3 className="heading-md" style={{ marginBottom: 8 }}>Ready to collaborate?</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Let me know how I can help with your learning goals.</p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Get in Touch</Link>
                <Link href="/projects" className="btn-outline">View Projects</Link>
              </div>
            </div>
          </Section>
        </div>
      </div>
      <Footer />
    </>
  );
}
