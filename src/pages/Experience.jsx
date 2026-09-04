import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Experience.css'
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

const experience = [
  {
    role: 'Junior App Developer',
    company: 'BIM Group of Companies',
    period: 'Jul 2026 – Present',
    type: 'Full-time',
    points: [
      'Design and develop RESTful API backends using ASP.NET Core (C#) to support internal and customer-facing applications',
      'Implement data access layers with Entity Framework Core, working with relational databases to support core business logic',
      'Collaborate with senior developers and cross-functional teams to translate requirements into working features',
      'Debug, test, and maintain existing APIs, improving performance and reliability; document endpoints via Swagger/OpenAPI',
    ],
    tools: ['Visual Studio', 'C# (.NET)', 'Entity Framework Core', 'Swagger/OpenAPI'],
    accent: 'backend',
  },
  {
    role: 'Junior Unity Developer Intern',
    company: 'Colorful Animal Studio',
    period: 'Oct 2025 – June 2026',
    type: 'Internship',
    points: [
      'Implement and refine core gameplay mechanics, animation systems, and interactive features in Unity (3D) and C#',
      'Develop reusable scripts following OOP principles to support scalable production workflows',
      'Create full 3D animated videos using Timeline, Animator, Cinemachine, and physics systems for the studio YouTube channel',
      'Design and program character behaviors, state-driven animations, and scene transitions',
      'Assist with debugging, performance optimization, and smooth playback/render output; collaborate with designers and artists',
    ],
    tools: ['Unity', 'C#', 'Blender', 'Cinemachine', 'Timeline'],
    accent: 'game',
  },
]

function Experience() {
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
            Professional experience
          </motion.p>
          <motion.h2 variants={item} className="section-title">
            Where I've worked
          </motion.h2>
          <motion.p variants={item} className="section-subtitle">
            A mix of production backend engineering and hands-on game
            development across two roles.
          </motion.p>
        </motion.div>

        <motion.div
          className="exp__list"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {experience.map((job) => (
            <motion.article
              key={job.role}
              className={`exp-card exp-card--${job.accent}`}
              variants={item}
            >
              <div className="exp-card__head">
                <div>
                  <h3 className="exp-card__role">{job.role}</h3>
                  <p className="exp-card__company">{job.company}</p>
                </div>
                <div className="exp-card__meta">
                  <span className="exp-card__type">{job.type}</span>
                  <span className="exp-card__period">{job.period}</span>
                </div>
              </div>
              <ul className="exp-card__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="exp-card__tools">
                {job.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          className="page__footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          More about the games and side projects I've built:{' '}
          <Link to="/projects" className="page__link">
            see my projects →
          </Link>
        </motion.p>
      </div>
    </section>
  )
}

export default Experience