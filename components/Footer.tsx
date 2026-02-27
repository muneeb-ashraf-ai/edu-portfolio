'use client';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { PERSONAL } from '@/lib/data';

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills',   href: '/skills' },
  { label: 'Contact',  href: '/contact' },
];

const SOCIALS = [
  { icon: Linkedin, href: PERSONAL.linkedin, label: 'LinkedIn' },
  { icon: Github,   href: PERSONAL.github,   label: 'GitHub'   },
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
              Making mathematics and technology accessible, one student at a time.
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
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'var(--text-faint)' }}>
            Next.js · TypeScript · Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
