import { motion } from 'framer-motion'
import { useEffect } from 'react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x:0 , y: 0},
  exit: { opacity: 0, x:0, y: 20 }
}

const Layout = ({ children }) => {

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ position: 'relative' , paddingTop: '50px', backgroundColor: 'transparent', minHeight: "900px" }}
      >
      <>
        {children}
      </>
    </motion.div>
  )
}


export default Layout