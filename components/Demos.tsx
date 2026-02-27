'use client';
import { motion } from 'framer-motion';
import { Youtube, ExternalLink, Play, ChevronRight } from 'lucide-react';
import { PERSONAL } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// Featured demo topics — reflective of the channel content
const DEMO_TOPICS = [
  {
    title: 'Machine Learning from Scratch',
    description: 'Step-by-step walkthroughs of ML algorithms — built from pure Python before using any library.',
    tag: 'Machine Learning',
    icon: '🤖',
  },
  {
    title: 'Mathematics for Data Science',
    description: 'Deep dives into the mathematical foundations — calculus, linear algebra, and probability — with visual intuition.',
    tag: 'Mathematics',
    icon: '∫',
  },
  {
    title: 'Data Analysis Walkthroughs',
    description: 'Exploratory data analysis tutorials: cleaning, transforming, and visualizing real datasets.',
    tag: 'Data Science',
    icon: '📊',
  },
  {
    title: 'Deep Learning Explained',
    description: 'Demystifying neural networks, CNNs, and modern AI — from forward pass to backpropagation.',
    tag: 'Deep Learning',
    icon: '🧠',
  },
  {
    title: 'Python Programming Tutorials',
    description: 'Clean, structured Python tutorials designed for beginners building toward data science and AI.',
    tag: 'Python',
    icon: 'py',
  },
  {
    title: 'Project Case Studies',
    description: 'Full-cycle AI project walkthroughs: problem framing, data work, modeling, and evaluation.',
    tag: 'Projects',
    icon: '🔬',
  },
];

export default function Demos() {
  return (
    <section id="demos" style={{ padding: '100px 0', background: 'var(--bg-elevated)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle grid */}
      <div className="grid-lines" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>04 — Demos</span>
          <h2 className="section-heading" style={{ marginBottom: 16 }}>Teaching Demonstrations</h2>
          <p className="section-subheading">
            Watch me teach — from whiteboard explanations to live coding tutorials. Accessible, structured, and built for real understanding.
          </p>
        </motion.div>

        {/* YouTube Channel Hero Card */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: 56 }}
        >
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Top banner */}
            <div
              style={{
                background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 50%, #990000 100%)',
                padding: '40px 48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 24,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background pattern */}
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.07,
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Youtube size={28} color="#fff" />
                  </div>
                  <div>
                    <span style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', letterSpacing: '0.1em', fontFamily: 'JetBrains Mono, monospace' }}>YOUTUBE CHANNEL</span>
                    <span style={{ display: 'block', color: '#fff', fontFamily: 'Crimson Pro, serif', fontSize: '1.6rem', fontWeight: 700 }}>@alphaaa_m</span>
                  </div>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', maxWidth: '44ch', lineHeight: 1.7 }}>
                  Mathematics tutorials, AI & Data Science walkthroughs, and Python programming content — all crafted to build genuine understanding.
                </p>
              </div>
              <motion.a
                href={PERSONAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 28px',
                  background: '#fff',
                  color: '#cc0000',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                  position: 'relative',
                  zIndex: 1,
                  whiteSpace: 'nowrap',
                }}
              >
                <Play size={18} fill="#cc0000" />
                Visit Channel
                <ExternalLink size={15} />
              </motion.a>
            </div>

            {/* Video embed area */}
            <div style={{ padding: '32px 48px 40px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                marginBottom: 20,
              }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>EMBEDDED CHANNEL FEED</span>
              </div>

              {/* YouTube channel video embed */}
              <div style={{
                width: '100%',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                background: '#000',
                position: 'relative',
                paddingBottom: '40%',
              }}>
                <iframe
                  src="https://www.youtube.com/embed?listType=user_uploads&list=alphaaa_m&rel=0"
                  title="Muneeb Ashraf — Teaching Videos"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute', top: 0, left: 0,
                    width: '100%', height: '100%',
                    border: 'none',
                  }}
                />
              </div>

              <div style={{ marginTop: 16, display: 'flex', gap: 12, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                <a
                  href={PERSONAL.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)',
                    textDecoration: 'none',
                  }}
                >
                  See all videos <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Topic cards grid */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} style={{ marginBottom: 24 }}>
          <h3 style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.7rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 28 }}>
            What I Cover
          </h3>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="demos-grid">
          {DEMO_TOPICS.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="card"
              style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{topic.icon}</span>
                <span className="badge" style={{ fontSize: '0.65rem' }}>{topic.tag}</span>
              </div>
              <h4 style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                {topic.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .demos-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .demos-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
