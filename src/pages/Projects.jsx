import { motion } from 'framer-motion'
import flyToYourHeartBg from '../assets/images/flytoyourheart_banner.png'
import './Projects.css'
import './Pages.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const projects = [
  {
    slug: 'fly-to-your-heart',
    title: 'Fly To Your Heart',
    role: 'Gameplay Programmer',
    event: 'Gamedev.tv Game Jam 2026',
    image: flyToYourHeartBg,
    description:
      'A story-driven 3D flight game with organic flight physics, Cinemachine camera transitions, and a DoTween-based UI and dialogue system.',
    badges: ['Unity', 'C#', 'Git'],
    links: [
      { label: 'Play on itch.io', href: 'https://shadowslash125.itch.io/fly-to-your-heart' },
    ],
  },
  {
    slug: 'depth-protocol',
    title: 'Depth: Protocol',
    role: 'Solo Developer',
    event: 'Gamedev.js Game Jam 2026',
    gradient: 'linear-gradient(135deg, #0b0e1a, #14213d, #1a3a5c)',
    description:
      'A real-time system-management horror game with modular pressure, power, and cooling systems, cascading failures, and node-based enemy AI.',
    badges: ['Unity', 'C#', 'Blender', 'Git'],
    links: [
      { label: 'Play on itch.io', href: 'https://kuroneko14.itch.io/depth-protocol' },
    ],
  },
  {
    slug: 'a-victims-whisper',
    title: "A Victim's Whisper",
    role: 'Gameplay Programmer',
    event: 'Final Year Major Project · Marwadi University',
    gradient: 'linear-gradient(135deg, #1a0f12, #3d1322, #5c1f33)',
    description:
      'Led gameplay programming, UI, SFX, and animation on a story-driven horror game. 100+ downloads and 31K YouTube views via a featured streamer; graded Outstanding (O).',
    badges: ['Unity', 'C#', 'Blender', 'GitHub'],
    links: [],
  },
  {
    slug: 'am',
    title: 'a.m.',
    role: 'Solo Developer',
    event: 'Game Makers Myanmar 2025 Game Jam',
    gradient: 'linear-gradient(135deg, #0c1410, #124028, #1f5c3d)',
    description:
      'A survival-horror demo built with a 4-person team. Ranked Top 10 overall and #1 for Gameplay & Execution; showcased at the Cultural & Creative Industries Forum 2025.',
    badges: ['Unity', 'C#', 'Blender', 'GitHub'],
    links: [],
  },
]

function Cover({ project }) {
  if (project.image) {
    return (
      <div className="proj-thumb proj-thumb--img">
        <img src={project.image} alt={`${project.title} banner`} />
        <div className="proj-thumb__scan" />
      </div>
    )
  }
  return (
    <div
      className="proj-thumb"
      style={{ background: project.gradient }}
      role="img"
      aria-label={`${project.title} cover art`}
    >
      <div className="proj-thumb__title">
        <h3>{project.title}</h3>
      </div>
      <div className="proj-thumb__scan" />
    </div>
  )
}

function Projects() {
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
            Project experience
          </motion.p>
          <motion.h2 variants={item} className="section-title">
            Games I've built
          </motion.h2>
          <motion.p variants={item} className="section-subtitle">
            Four shipped titles across game jams and academic work — from solo
            survival horror to team-driven co-op flight games.
          </motion.p>
        </motion.div>

        <motion.div
          className="projects"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, idx) => (
            <motion.article
              key={project.slug}
              className="proj-card"
              variants={item}
            >
              <Cover project={project} />
              <div className="proj-card__body">
                <div className="proj-card__meta">
                  <span>{project.role}</span>
                  <span>{project.event}</span>
                </div>
                {!project.image && (
                  <h3 className="proj-card__title">{project.title}</h3>
                )}
                <p className="proj-card__desc">{project.description}</p>
                <ul className="proj-card__tags">
                  {project.badges.map((badge) => (
                    <li key={badge}>{badge}</li>
                  ))}
                </ul>
                {project.links.length > 0 && (
                  <ul className="proj-card__links">
                    {project.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="proj-card__idx">{`0${idx + 1}`}</div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          className="page__footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          View more on my{' '}
          <a
            className="page__link"
            href="https://kuroneko14.itch.io"
            target="_blank"
            rel="noreferrer"
          >
            itch.io page ↗
          </a>
        </motion.p>
      </div>
    </section>
  )
}

export default Projects