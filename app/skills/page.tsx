'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS, SUBJECTS } from '@/lib/data';
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

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  return (
    <div ref={ref} style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, alignItems: 'baseline' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>{name}</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)' }}>{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.1, delay: 0.1 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function SubjectCard({ subject, i }: { subject: { name: string; description: string; level: string; topics: string[] }; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: '24px',
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
        cursor: 'default',
      }}
      whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--border-mid)' } as never}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
        <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '1rem' }}>{subject.name}</h3>
        <span className="badge-matte badge" style={{ fontSize: '0.68rem' }}>{subject.level}</span>
      </div>
      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 16 }}>{subject.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {subject.topics.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
  const allSubjects = [...SUBJECTS.mathematics, ...SUBJECTS.technology];

  return (
    <>
      <div style={{ paddingTop: 80 }}>
        {/* Banner */}
        <div style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)', padding: '80px 28px 64px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="label" style={{ display: 'block', marginBottom: 16 }}>Skills & Expertise</span>
              <h1 className="display-lg" style={{ marginBottom: 16, maxWidth: 700 }}>
                What I teach<br />
                <span style={{ color: 'var(--text-secondary)' }}>& how well</span>
              </h1>
              <p className="body-lg" style={{ maxWidth: '56ch' }}>
                A blend of pure mathematics, applied data science, and technology education — developed over six years of classroom and mentorship experience.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Skills split: Technical + Teaching */}
        <div style={{ padding: '80px 28px', maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60 }}>
            {/* Teaching skills */}
            <div>
              <FadeIn>
                <span className="label" style={{ display: 'block', marginBottom: 14 }}>Teaching skills</span>
                <h2 className="heading-lg" style={{ marginBottom: 36 }}>Pedagogical</h2>
              </FadeIn>
              {SKILLS.teaching.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
              ))}
            </div>

            {/* Technical skills */}
            <div>
              <FadeIn>
                <span className="label" style={{ display: 'block', marginBottom: 14 }}>Technical skills</span>
                <h2 className="heading-lg" style={{ marginBottom: 36 }}>Technical</h2>
              </FadeIn>
              {SKILLS.technical.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
              ))}
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* Soft skills */}
        <div style={{ padding: '64px 28px', maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <span className="label" style={{ display: 'block', marginBottom: 14 }}>Soft skills</span>
            <h2 className="heading-xl" style={{ marginBottom: 32 }}>Personal strengths</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {SKILLS.soft.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 + 0.2 }}
                  style={{
                    display: 'inline-block',
                    padding: '10px 22px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </FadeIn>
        </div>

        <hr className="divider" />

        {/* Subjects */}
        <div style={{ padding: '80px 28px', maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <span className="label" style={{ display: 'block', marginBottom: 14 }}>Subjects</span>
            <h2 className="heading-xl" style={{ marginBottom: 48 }}>What I teach</h2>
          </FadeIn>

          {/* Math */}
          <FadeIn delay={0.1}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '0.84rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
              Mathematics
            </h3>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 48 }}>
            {SUBJECTS.mathematics.map((s, i) => (
              <SubjectCard key={s.name} subject={s} i={i} />
            ))}
          </div>

          {/* Tech */}
          <FadeIn delay={0.1}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '0.84rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
              Technology & AI
            </h3>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {SUBJECTS.technology.map((s, i) => (
              <SubjectCard key={s.name} subject={s} i={i} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
