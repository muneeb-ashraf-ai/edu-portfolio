'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, BrainCircuit, FlaskConical, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const OFFERINGS = [
  {
    icon: BookOpen,
    title: 'Mathematics Education',
    description:
      'Structured teaching from foundational arithmetic through university-level calculus, statistics, and linear algebra — designed to build lasting intuition rather than surface memorisation.',
    tags: ['Calculus', 'Statistics', 'Linear Algebra', 'Grades 5–University'],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Data Science',
    description:
      'Hands-on instruction and project mentorship in machine learning, deep learning, and data analysis — bridging mathematical theory with real-world implementation.',
    tags: ['Machine Learning', 'Deep Learning', 'Python', 'Data Analysis'],
  },
  {
    icon: FlaskConical,
    title: 'Research & Projects',
    description:
      'Applied research spanning computer vision, predictive modelling, and educational technology — with a teaching lens that translates academic rigour into practical deliverables.',
    tags: ['Computer Vision', 'Predictive Modelling', 'NLP', 'EdTech'],
  },
];

function OfferingCard({ item, index }: { item: typeof OFFERINGS[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = item.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
        cursor: 'default',
      }}
      whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--border-accent)' } as never}
    >
      {/* Icon */}
      <div style={{
        width: 44, height: 44,
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon size={20} style={{ color: 'var(--text-primary)' }} />
      </div>

      <div>
        <h3 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: '1.05rem',
          marginBottom: 10,
          color: 'var(--text-primary)',
        }}>{item.title}</h3>
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
        }}>{item.description}</p>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {item.tags.map(tag => (
          <span key={tag} className="tag" style={{ fontSize: '0.72rem' }}>{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Summary() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: '-40px' });

  return (
    <section style={{
      padding: '96px 28px',
      background: 'var(--bg-base)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ maxWidth: 680, marginBottom: 64 }}
        >
          <span className="label" style={{ display: 'block', marginBottom: 16 }}>What I offer</span>
          <h2 className="heading-xl" style={{ marginBottom: 20 }}>
            Bridging mathematics,<br />
            <span style={{ color: 'var(--text-secondary)' }}>technology, and teaching.</span>
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
            With over six years of classroom experience and a foundation in both pure mathematics
            and applied data science, I help students and institutions turn difficult concepts
            into genuine understanding — from secondary school to graduate level.
          </p>
        </motion.div>

        {/* Offering cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          marginBottom: 56,
        }}>
          {OFFERINGS.map((item, i) => (
            <OfferingCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20,
            paddingTop: 40,
            borderTop: '1px solid var(--border)',
          }}
        >
          <div>
            <div style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              marginBottom: 4,
            }}>
              500+ students · 6+ years · 15+ projects
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Across secondary school, undergraduate, and postgraduate levels.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/about" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              Full Profile <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
