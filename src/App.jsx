import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const TITLES = {
  '/': 'Min Zay Ya — Software & Game Developer',
  '/experience': 'Experience — Min Zay Ya',
  '/projects': 'Projects — Min Zay Ya',
  '/recognition': 'Education & Awards — Min Zay Ya',
  '/skills': 'Skills — Min Zay Ya',
  '/contact': 'Contact — Min Zay Ya',
}

function AnimatedOutlet() {
  const location = useLocation()

  useEffect(() => {
    document.title = TITLES[location.pathname] ?? TITLES['/']
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.main>
    </AnimatePresence>
  )
}

function Layout() {
  return (
    <>
      <Navbar />
      <AnimatedOutlet />
      <Footer />
    </>
  )
}

export default Layout