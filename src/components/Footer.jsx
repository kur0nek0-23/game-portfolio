import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Min Zay Ya. Built with React.</p>
      </div>
    </footer>
  )
}

export default Footer