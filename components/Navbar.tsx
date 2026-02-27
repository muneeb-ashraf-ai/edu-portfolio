'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

const NAV_ITEMS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills',   href: '/skills' },
  { label: 'Contact',  href: '/contact' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* ── Header bar ── */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          padding: '0 28px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'var(--bg-glass)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-glass)' : '1px solid transparent',
          transition: 'background 0.4s ease, border-color 0.4s ease',
        }}
      >
        {/* Wordmark */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: 'var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800, fontSize: '0.78rem',
              color: 'var(--bg-surface)', letterSpacing: '-0.01em',
            }}>MA</span>
          </div>
          <div style={{ lineHeight: 1.15 }}>
            <span style={{
              display: 'block',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700, fontSize: '0.9rem',
              color: 'var(--text-primary)', letterSpacing: '-0.01em',
            }}>Muneeb Ashraf</span>
            <span style={{
              display: 'block',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.58rem', color: 'var(--text-muted)',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>Educator</span>
          </div>
        </Link>

        {/* Desktop pill nav */}
        <nav className="hide-mobile" style={{
          display: 'flex', alignItems: 'center', gap: 2,
          background: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-full)',
          padding: '5px',
          border: '1px solid var(--border)',
        }}>
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: '7px 18px',
                borderRadius: 'var(--radius-full)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.84rem',
                fontWeight: isActive(item.href) ? 600 : 500,
                color: isActive(item.href) ? 'var(--bg-surface)' : 'var(--text-secondary)',
                textDecoration: 'none',
                background: isActive(item.href) ? 'var(--accent)' : 'transparent',
                transition: 'background 0.2s ease, color 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-secondary)',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menu"
            className="hide-desktop"
            style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-secondary)',
            }}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </motion.button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.35)',
                backdropFilter: 'blur(4px)',
                zIndex: 190,
              }}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              style={{
                position: 'fixed',
                top: 0, right: 0, bottom: 0,
                width: 260,
                background: 'var(--bg-surface)',
                borderLeft: '1px solid var(--border)',
                zIndex: 195,
                padding: '80px 20px 32px',
                display: 'flex', flexDirection: 'column',
              }}
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    style={{
                      display: 'flex', alignItems: 'center',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: isActive(item.href) ? 600 : 500,
                      fontSize: '1rem',
                      color: isActive(item.href) ? 'var(--text-primary)' : 'var(--text-secondary)',
                      textDecoration: 'none',
                      background: isActive(item.href) ? 'var(--accent-soft)' : 'transparent',
                      borderLeft: isActive(item.href) ? '2px solid var(--accent)' : '2px solid transparent',
                      marginBottom: 4,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
