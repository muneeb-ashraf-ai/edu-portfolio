'use client';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { PERSONAL } from '@/lib/data';

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills',   href: '/skills' },
  { label: 'Contact',  href: '/contact' },
];

const SOCIALS = [
  { icon: Linkedin,      href: PERSONAL.linkedin,             label: 'LinkedIn'  },
  { icon: Github,        href: PERSONAL.github,               label: 'GitHub'    },
  { icon: WhatsAppIcon,  href: PERSONAL.whatsapp,             label: 'WhatsApp'  },
  { icon: Mail,          href: `mailto:${PERSONAL.email}`,    label: 'Email'     },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', padding: '48px 28px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 36 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '0.74rem', color: 'var(--bg-surface)' }}>MA</span>
              </div>
              <div>
                <span style={{ display: 'block', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>Muneeb Ashraf</span>
                <span style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.58rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Educator · AI Instructor</span>
              </div>
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', maxWidth: '34ch', lineHeight: 1.7 }}>
              Turning complexity into clarity — in mathematics, data, and AI.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="label" style={{ display: 'block', marginBottom: 12 }}>Navigation</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <span className="label" style={{ display: 'block', marginBottom: 12 }}>Connect</span>
            <div style={{ display: 'flex', gap: 8 }}>
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'var(--border-accent)';
                    el.style.color = 'var(--text-primary)';
                    el.style.background = 'var(--bg-surface)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'var(--border)';
                    el.style.color = 'var(--text-muted)';
                    el.style.background = 'var(--bg-elevated)';
                  }}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="divider" style={{ marginBottom: 20 }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Muneeb Ashraf. All rights reserved.
          </span>

        </div>
      </div>
    </footer>
  );
}
