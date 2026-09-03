import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Recognition.css'
import './Pages.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const education = [
  {
    degree: 'Master of Science in Computer Engineering',
    school: 'King Mongkut’s University of Technology Thonburi (KMUTT)',
    location: 'Thailand',
    period: 'Aug 2026 – Present',
  },
  {
    degree: 'Bachelor of Technology in Computer Engineering',
    school: 'Marwadi University',
    location: 'India',
    period: '2021 – 2025',
    note: 'Specialized in software engineering principles and practical game development — programming, system design, and interactive application development through academic and project-based work.',
  },
]

const achievements = [
  {
    title: "Game Makers Myanmar 2025 — Game Jam",
    detail:
      'Ranked Top 10 overall and #1 for Gameplay & Execution with my survival horror demo "a.m.".',
  },
  {
    title: "Cultural & Creative Industries Forum 2025",
    detail:
      "'a.m.' showcased by Game Makers Myanmar at the CCI Forum 2025 in Yangon — a major cultural and creative industry event.",
  },
  {
    title: 'Featured Streamer Milestone',
    detail:
      "'A Victim's Whisper' was featured on YouTube by a game streamer, amassing 31K views and 100+ downloads.",
  },
  {
    title: 'Two Game Jams, Two Shipped Games',
    detail:
      "Shipped both 'Fly To Your Heart' (Gamedev.tv 2026) and 'Depth: Protocol' (Gamedev.js 2026) within sprint-style jam deadlines.",
  },
]

const jams = [
  {
    title: 'Gamedev.js Game Jam 2026',
    project: 'Depth: Protocol',
    outcome: 'Solo developer · shipped a complete system-management horror game',
    tag: 'Jam',
  },
  {
    title: 'Gamedev.tv Game Jam 2026',
    project: 'Fly To Your Heart',
    outcome: 'Gameplay programmer · shipped a co-op 3D flight game',
    tag: 'Jam',
  },
  {
    title: 'Game Makers Myanmar 2025',
    project: 'a.m.',
    outcome: 'Solo developer · Top 10 overall, #1 Gameplay & Execution',
    tag: 'Top 10',
  },
]

function Recognition() {
  return (
    <section className="section page-section">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="page__head"
        >
          <motion.p variants={item} className="section-label">
            Education & recognition
          </motion.p>
          <motion.h2 variants={item} className="section-title">
            Background & achievements
          </motion.h2>
          <motion.p variants={item} className="section-subtitle">
            My academic path, game jam participations, and a few milestones
            along the way.
          </motion.p>
        </motion.div>

        <motion.section
          className="rec__block"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h3 className="rec__heading" variants={item}>
            Education
          </motion.h3>
          <motion.div className="rec__list" variants={item}>
            {education.map((edu) => (
              <article key={edu.degree} className="edu-card">
                <div className="edu-card__head">
                  <h4 className="edu-card__degree">{edu.degree}</h4>
                  <span className="edu-card__period">{edu.period}</span>
                </div>
                <p className="edu-card__school">
                  {edu.school} · {edu.location}
                </p>
                {edu.note && <p className="edu-card__note">{edu.note}</p>}
              </article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="rec__block"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h3 className="rec__heading" variants={item}>
            Game Jam Participations
          </motion.h3>
          <motion.div className="rec__list" variants={item}>
            {jams.map((jam) => (
              <article key={jam.title} className="jam-card">
                <div className="jam-card__top">
                  <span className="jam-card__tag">{jam.tag}</span>
                  <span className="jam-card__title">{jam.title}</span>
                </div>
                <p className="jam-card__project">{jam.project}</p>
                <p className="jam-card__outcome">{jam.outcome}</p>
              </article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="rec__block"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h3 className="rec__heading" variants={item}>
            Achievements
          </motion.h3>
          <motion.div className="ach__grid" variants={item}>
            {achievements.map((ach) => (
              <div key={ach.title} className="ach-card">
                <span className="ach-card__badge" aria-hidden="true">
                  ✓
                </span>
                <h4 className="ach-card__title">{ach.title}</h4>
                <p className="ach-card__detail">{ach.detail}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        <motion.p
          className="page__footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          See the tools behind all this:{' '}
          <Link to="/skills" className="page__link">
            view my skills →
          </Link>
        </motion.p>
      </div>
    </section>
  )
}

export default Recognition