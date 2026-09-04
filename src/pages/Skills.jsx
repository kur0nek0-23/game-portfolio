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

const domains = [
  {
    title: 'Backend & .NET Engineer',
    blurb:
      'Specialized in building scalable web APIs, data pipelines, and robust backend architectures.',
    categories: [
      {
        label: 'Languages & Frameworks',
        skills: ['C#', '.NET Core', 'ASP.NET Core'],
      },
      {
        label: 'Database & ORM',
        skills: ['SQL Server', 'PostgreSQL', 'Entity Framework Core'],
      },
      {
        label: 'API Design',
        skills: ['RESTful Architecture', 'Swagger / OpenAPI Documentation'],
      },
      {
        label: 'Core Engineering',
        skills: [
          'Object-Oriented Programming (OOP)',
          'Data Structures & Algorithms',
        ],
      },
    ],
  },
  {
    title: 'Unity Game Developer',
    blurb:
      'Focused on gameplay mechanics, level layout, rapid prototyping, and dynamic camera systems.',
    categories: [
      {
        label: 'Engine & Logic',
        skills: ['Unity Engine', 'C# Gameplay Systems', 'Mechanics Prototyping'],
      },
      {
        label: 'Level Design',
        skills: ['ProBuilder', 'Cinemachine', 'Timeline'],
      },
      {
        label: 'Interface & Assets',
        skills: ['Unity UI Toolkit', 'Blender Asset Integration'],
      },
      {
        label: 'UI/UX Design',
        skills: ['Figma', 'Canva'],
      },
    ],
  },
  {
    title: 'Development Environment',
    blurb: '',
    categories: [
      {
        label: 'Version Control',
        skills: ['Git', 'GitHub'],
      },
      {
        label: 'IDEs',
        skills: ['Visual Studio', 'VS Code'],
      },
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
            Backend engineering, game development, and the tools that power my
            workflow.
          </motion.p>
        </motion.div>

        <motion.div
          className="skills"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {domains.map((domain) => (
            <motion.article key={domain.title} className="domain-card" variants={item}>
              <header className="domain-card__head">
                <h3 className="domain-card__title">{domain.title}</h3>
                {domain.blurb && (
                  <p className="domain-card__blurb">{domain.blurb}</p>
                )}
              </header>
              <div className="domain-card__grid">
                {domain.categories.map((category) => (
                  <div key={category.label} className="domain-card__group">
                    <h4 className="domain-card__label">{category.label}</h4>
                    <ul className="domain-card__list">
                      {category.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
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
