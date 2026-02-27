'use client';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Mail } from 'lucide-react';
import Link from 'next/link';
import { PERSONAL, STATS } from '@/lib/data';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Subtle dot grid */}
      <div
        className="dot-grid"
        style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none', zIndex: 0 }}
      />

      {/* Radial vignette to fade grid at edges */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 80% at 50% 40%, transparent 30%, var(--bg-base) 90%)',
      }} />

      {/* Ambient gradient blobs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--bg-elevated) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '-5%', left: '-8%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--bg-elevated) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Main content */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 2, width: '100%' }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}
        >
          <span className="label">Teaching Portfolio</span>
          <span style={{ display: 'inline-block', width: 36, height: 1, background: 'var(--border-accent)' }} />
          <span className="label" style={{ color: 'var(--text-faint)' }}>Gujrat / Lahore, Pakistan</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="display-xl"
          style={{ marginBottom: 16 }}
        >
          {PERSONAL.firstName}<br />
          <span style={{ color: 'var(--text-secondary)' }}>Ashraf</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: 400,
            color: 'var(--text-secondary)',
            marginBottom: 24,
            letterSpacing: '-0.01em',
          }}
        >
          Mathematics &amp; Technology Educator
        </motion.p>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}
        >
          {['MSc Mathematics', 'MS Data Science (UET)', 'AI Instructor', '6+ Years Teaching'].map(tag => (
            <span key={tag} className="badge">{tag}</span>
          ))}
        </motion.div>

        {/* Mission */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            maxWidth: '52ch',
            marginBottom: 44,
            borderLeft: '2px solid var(--border-accent)',
            paddingLeft: 20,
          }}
        >
          {PERSONAL.missionStatement}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.7 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 80 }}
        >
          <Link href="/about" className="btn-primary">
            <BookOpen size={16} /> View Profile
          </Link>
          <Link href="/projects" className="btn-outline">
            <ArrowRight size={16} /> Explore Projects
          </Link>
          <Link href="/contact" className="btn-ghost">
            <Mail size={15} /> Get in Touch
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            maxWidth: 680,
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-surface)',
                padding: '24px 16px',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1,
                marginBottom: 6,
                letterSpacing: '-0.03em',
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>


      <style>{`
        @media (max-width: 640px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
