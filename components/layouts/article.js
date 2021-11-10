import { motion } from 'framer-motion'
import { SlideFade } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children }) => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.7, type: 'easeIn' }}
    style={{ position: 'relative' , paddingTop: '50px', backgroundColor: 'rgba(252, 213, 206)' }}
  >
    <>
      {children}
    </>
  </motion.div>
)

export default Layout