'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { PERSONAL } from '@/lib/data';
import Footer from '@/components/Footer';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const INFO = [
  { icon: <Mail size={16} />,     label: 'Email',    value: PERSONAL.email,    href: `mailto:${PERSONAL.email}` },
  { icon: <Phone size={16} />,    label: 'Phone',    value: PERSONAL.phone,    href: `tel:${PERSONAL.phone}` },
  { icon: <MapPin size={16} />,   label: 'Location', value: PERSONAL.location, href: undefined },
  { icon: <Linkedin size={16} />, label: 'LinkedIn', value: 'muneeb-ashraf-ai', href: PERSONAL.linkedin },
  { icon: <Github size={16} />,   label: 'GitHub',   value: 'alphaaa-m',        href: PERSONAL.github },
] as const;

export default function ContactPage() {
  return (
    <>
      <div style={{ paddingTop: 80 }}>
        {/* Banner */}
        <div style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)', padding: '80px 28px 64px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="label" style={{ display: 'block', marginBottom: 16 }}>Contact</span>
              <h1 className="display-lg" style={{ marginBottom: 16, maxWidth: 640 }}>
                Let's work<br />
                <span style={{ color: 'var(--text-secondary)' }}>together</span>
              </h1>
              <p className="body-lg" style={{ maxWidth: '54ch' }}>
                Whether you have a tutoring request, collaboration idea, or just want to connect — I would love to hear from you.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact info */}
        <div style={{ padding: '72px 28px 80px', maxWidth: 680, margin: '0 auto' }}>
          <FadeIn>
            <h2 className="heading-md" style={{ marginBottom: 28 }}>Contact info</h2>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {INFO.map(({ icon, label, value, href }, i) => (
              <FadeIn key={label} delay={0.1 + i * 0.08}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'var(--bg-elevated)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-secondary)', flexShrink: 0,
                  }}>
                    {icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                         style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'none', textOverflow: 'ellipsis', overflow: 'hidden', display: 'block' }}>
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500, display: 'block' }}>{value}</span>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
            }}>
              <div className="label" style={{ marginBottom: 10 }}>Availability</div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Currently open to online tutoring, academic consulting, and AI/ML project collaboration. Response time is typically within 24 hours.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
      <Footer />
    </>
  );
}

