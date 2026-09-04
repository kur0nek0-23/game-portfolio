import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Skills.css'
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

const groups = [
  {
    title: 'Programming Languages',
    skills: ['C#', 'C++', 'Java', 'Python', 'JavaScript', 'HTML / CSS'],
  },
  {
    title: 'Backend & Web',
    skills: [
      'ASP.NET Core',
      'RESTful APIs',
      'Entity Framework Core',
      'Swagger / OpenAPI',
      'React.js (basic)',
    ],
  },
  {
    title: 'Game Development',
    skills: [
      'Unity Engine',
      'ProBuilder',
      'Cinemachine',
      'Timeline',
      'Unity UI Toolkit',
      'Blender',
    ],
  },
  {
    title: 'Tools & Practices',
    skills: [
      'Git / GitHub',
      'OOP',
      'Data Structures & Algorithms',
      'Visual Studio',
      'VS Code',
      'Figma',
      'Canva',
    ],
  },
]

function Skills() {
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
            Skill set
          </motion.p>
          <motion.h2 variants={item} className="section-title">
            What I work with
          </motion.h2>
          <motion.p variants={item} className="section-subtitle">
            Technologies and practices across backend development, game
            engineering, and creative tooling.
          </motion.p>
        </motion.div>

        <motion.div
          className="skills"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="skills__grid">
            {groups.map((group) => (
              <motion.div
                key={group.title}
                className="skill-card"
                variants={item}
              >
                <h3 className="skill-card__title">{group.title}</h3>
                <ul className="skill-card__list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="page__footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          Like what you see?{' '}
          <Link to="/contact" className="page__link">
            Let's get in touch →
          </Link>
        </motion.p>
      </div>
    </section>
  )
}

export default Skills