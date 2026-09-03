import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'
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

function Contact() {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = encodeURIComponent(
      message || "Hi Min Zay Ya — let's work together.",
    )
    const mail = `mailto:minzayya.augustinerichard@gmail.com?subject=${encodeURIComponent(subject || 'Project inquiry')}&body=${body}`
    window.location.href = mail
  }

  const contactInfo = [
    {
      label: 'Email',
      value: 'minzayya.augustinerichard@gmail.com',
      href: 'mailto:minzayya.augustinerichard@gmail.com',
    },
    {
      label: 'Phone',
      value: '+66 98 487 2353',
      href: 'tel:+66984872353',
    },
    { label: 'GitHub', value: 'github.com/kuroNeko-23', href: 'https://github.com/kuroNeko-23' },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/minzayya-kuroneko',
      href: 'https://linkedin.com/in/minzayya-kuroneko',
    },
    { label: 'itch.io', value: 'kuroneko14.itch.io', href: 'https://kuroneko14.itch.io' },
  ]

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
            Contact
          </motion.p>
          <motion.h2 variants={item} className="section-title">
            Let's get in touch
          </motion.h2>
          <motion.p variants={item} className="section-subtitle">
            I'm available for full-time roles and freelance software / game
            development work. Reach out and let's chat.
          </motion.p>
        </motion.div>

        <motion.div
          className="contact"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="contact__info" variants={item}>
            <ul className="contact__channels">
              {contactInfo.map((info) => (
                <li key={info.label}>
                  <span className="contact__channel-label">{info.label}</span>
                  <a href={info.href} target="_blank" rel="noreferrer">
                    {info.value} ↗
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="btn btn--ghost contact__resume"
              href="https://docs.google.com/document/d/1Kdfv6HruvtRch6mC_8_emYEf6dXi3xqr/preview"
              target="_blank"
              rel="noreferrer"
            >
              Download resume
            </a>
          </motion.div>

          <motion.form
            className="contact__form"
            variants={item}
            onSubmit={handleSubmit}
          >
            <label className="field">
              <span>Subject</span>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Freelance prototype"
              />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                placeholder="Tell me about your project, timeline, and budget…"
              />
            </label>
            <button type="submit" className="btn btn--primary contact__submit">
              Send message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact