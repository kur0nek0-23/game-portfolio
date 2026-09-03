import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Min Zay Ya. Built with React.</p>
        <Link to="/" className="footer__top">
          Back to top ↑
        </Link>
      </div>
    </footer>
  )
}

export default Footer