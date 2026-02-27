'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Globe, MessageCircle } from 'lucide-react';

const LINKS = [
  {
    icon: Globe,
    label: 'Main Portfolio',
    description: 'Full personal portfolio covering background, projects, and professional highlights.',
    href: 'https://muneeb-ashraf.vercel.app/',
    cta: 'Visit Portfolio',
  },
  {
    icon: MessageCircle,
    label: 'AI Chatbot',
    description: 'An interactive AI assistant — a live demo of applied NLP and conversational AI.',
    href: 'https://muneeb-chatbot.vercel.app/',
    cta: 'Open Chatbot',
  },
];

export default function FeaturedLinks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section style={{
      padding: '80px 28px',
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ marginBottom: 48 }}
        >
          <span className="label" style={{ display: 'block', marginBottom: 14 }}>Live Projects</span>
          <h2 className="heading-xl" style={{ maxWidth: 500 }}>
            Explore my work<br />
            <span style={{ color: 'var(--text-secondary)' }}>in the wild.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {LINKS.map(({ icon: Icon, label, description, href, cta }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--border-accent)' } as never}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                background: 'var(--bg-base)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 28px',
                textDecoration: 'none',
                transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
                cursor: 'pointer',
              }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: 44, height: 44,
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} style={{ color: 'var(--text-primary)' }} />
                </div>
                <ArrowUpRight size={18} style={{ color: 'var(--text-muted)', marginTop: 4 }} />
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'var(--text-primary)',
                  marginBottom: 10,
                }}>{label}</div>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>{description}</p>
              </div>

              {/* CTA */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.8rem',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.04em',
                color: 'var(--text-primary)',
                borderTop: '1px solid var(--border)',
                paddingTop: 16,
              }}>
                {cta} <ArrowUpRight size={13} />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
