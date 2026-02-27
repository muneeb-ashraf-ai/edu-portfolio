'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Youtube, FileText, MapPin, Send } from 'lucide-react';
import { PERSONAL } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    color: 'accent',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: PERSONAL.phone,
    href: `https://wa.me/923006275648`,
    color: 'math',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/muneeb-ashraf-ai',
    href: PERSONAL.linkedin,
    color: 'accent',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/alphaaa-m',
    href: PERSONAL.github,
    color: 'violet',
  },
  {
    icon: Youtube,
    label: 'YouTube Channel',
    value: 'youtube.com/@alphaaa_m',
    href: PERSONAL.youtube,
    color: 'accent',
  },
];

function colorVar(c: string) {
  if (c === 'math') return 'var(--math)';
  if (c === 'violet') return 'var(--violet)';
  return 'var(--accent)';
}
function bgVar(c: string) {
  if (c === 'math') return 'var(--math-bg)';
  if (c === 'violet') return 'var(--violet-bg)';
  return 'var(--accent-bg)';
}

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 0 80px', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-lines" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>07 — Contact</span>
          <h2 className="section-heading" style={{ marginBottom: 16 }}>Get in Touch</h2>
          <p className="section-subheading">
            Whether you are a student looking for guidance, an institution seeking an educator, or a collaborator with an idea — reach out. I respond promptly.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }} className="contact-grid">
          {/* Left: contact cards */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {LINKS.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className="card"
                  style={{
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{
                    width: 42, height: 42,
                    borderRadius: 11,
                    background: bgVar(link.color),
                    border: `1px solid ${colorVar(link.color)}33`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <link.icon size={18} color={colorVar(link.color)} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>
                      {link.label}
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {link.value}
                    </div>
                  </div>
                  <Send size={14} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                </motion.a>
              ))}

              {/* Location */}
              <div className="card" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 42, height: 42,
                  borderRadius: 11,
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <MapPin size={18} color="var(--text-muted)" />
                </div>
                <div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>Location</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)' }}>{PERSONAL.location} · Open to Remote</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: availability + resume */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            {/* Availability card */}
            <div className="card" style={{ padding: '36px', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: 'var(--math)',
                  boxShadow: '0 0 0 3px var(--math-bg)',
                  animation: 'pulse 2s ease infinite',
                }} />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--math)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Currently Available
                </span>
              </div>

              <h3 style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.75rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12, lineHeight: 1.25 }}>
                Open to teaching, mentoring, and collaboration
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 28 }}>
                I am available for private tutoring, curriculum consultancy, online teaching engagements, academic mentoring, and AI education initiatives. Based in Pakistan but open to remote opportunities worldwide.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Private tutoring (Mathematics & AI)',
                  'Curriculum development consultation',
                  'Online course creation / co-teaching',
                  'AI literacy workshops',
                  'Academic research collaboration',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume download */}
            <a
              className="btn-primary"
              href={PERSONAL.cv}
              download
              style={{ width: '100%', justifyContent: 'center', borderRadius: 'var(--radius-md)', padding: '15px 28px', textDecoration: 'none', display: 'flex' }}
            >
              <FileText size={17} /> Download Full CV / Resume
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
