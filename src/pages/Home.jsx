import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'
import './Pages.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const aboutCards = [
  {
    title: 'Software Development',
    body: 'Backend APIs with ASP.NET Core and C#, plus full-stack web work with React and RESTful design.',
    accent: 'backend',
    glyph: '</>',
  },
  {
    title: 'Game Development',
    body: 'Unity game developer building gameplay systems, animation, and interactive experiences from concept to release.',
    accent: 'game',
    glyph: '▲',
  },
  {
    title: 'Level Design & Prototyping',
    body: 'Atmospheric level design and rapid prototyping for survival and psychological horror experiences.',
    accent: 'design',
    glyph: '◧',
  },
  {
    title: 'Technical Craft',
    body: 'OOP, data structures, Git, and performance-minded engineering across every project I touch.',
    accent: 'tech',
    glyph: '#',
  },
]

const stats = [
  { value: 'Top 10', label: 'Game Makers Myanmar 2025' },
  { value: '31K', label: 'YouTube views via streamer' },
  { value: '2', label: 'Game jam titles shipped' },
  { value: '2', label: 'Professional roles' },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <motion.p
            className="hero__hello"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <span className="hero__dot" aria-hidden="true" />
            Min Zay Ya — Portfolio
          </motion.p>
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1 className="hero__title" variants={fadeUp}>
              Hi, I'm{' '}
              <span className="hero__accent">Min Zay Ya</span>
            </motion.h1>
            <motion.p className="hero__role" variants={fadeUp}>
              Software Developer <span className="hero__divider">·</span>{' '}
              Unity Developer <span className="hero__divider">·</span> Gameplay
              Programmer
            </motion.p>
            <motion.p className="hero__subtitle" variants={fadeUp}>
              I'm a Computer Engineering graduate building backend APIs with
              ASP.NET Core and C#, alongside interactive game systems and tools
              in Unity — turning ideas into complete software from concept to
              deployment.
            </motion.p>
            <motion.div className="hero__actions" variants={fadeUp}>
              <Link className="btn btn--primary" to="/projects">
                View my projects
              </Link>
              <Link className="btn btn--ghost" to="/experience">
                My experience
              </Link>
              <a
                className="btn btn--ghost"
                href="https://docs.google.com/document/d/1Kdfv6HruvtRch6mC_8_emYEf6dXi3xqr/preview"
                target="_blank"
                rel="noreferrer"
              >
                Download resume ↗
              </a>
            </motion.div>
          </motion.div>
          <motion.ul
            className="hero__stats"
            variants={stagger}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.6 }}
          >
            {stats.map((stat) => (
              <motion.li key={stat.label} variants={fadeUp}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="container">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp} className="page__head">
              <p className="section-label">About me</p>
              <h2 className="section-title">Software & game developer</h2>
              <p className="section-subtitle">
                I focus on building atmospheric, interactive experiences and
                reliable backend systems. My work spans survival horror games
                and production-grade RESTful APIs — always with an eye for
                polish, performance, and emotional impact.
              </p>
            </motion.div>

            <motion.div className="about__grid" variants={fadeUp}>
              {aboutCards.map((card) => (
                <div
                  key={card.title}
                  className={`about-card about-card--${card.accent}`}
                >
                  <span className="about-card__glyph" aria-hidden="true">
                    {card.glyph}
                  </span>
                  <h3 className="about-card__title">{card.title}</h3>
                  <p className="about-card__body">{card.body}</p>
                </div>
              ))}
            </motion.div>

            <motion.p
              className="page__footer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Want the full picture?{' '}
              <Link to="/experience" className="page__link">
                See my experience →
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home