import NextLink from 'next/link'
import { Box, Link, LinkBox }from '@chakra-ui/react'
import styles from '../styles/navbar.module.css'
import { SearchIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const NavBar = props => {
  const { path } = props
  return (
    <Box className = { styles.nav }>

      <Link href='home' className = 'peimn.' display = 'flex' margin='0px 80px 0px 0px' textDecoration='none !important' fontWeight='400'>
        <Box className = { styles.letter + " " + styles.p }>p</Box>
        <Box className = { styles.letter + " " + styles.e }>e</Box>
        <Box className = { styles.letter + " " + styles.i }>i</Box>
        <Box className = { styles.letter + " " + styles.m }>m</Box>
        <Box className = { styles.letter + " " + styles.n }>n</Box>
        <Box className = { styles.letter + " " + styles.dot }>.</Box>
      </Link>

      <Box display={{base:'none', md:'flex'}}>
        <LinkItem href="/blog" path={path}>
          Blog
        </LinkItem>

        <LinkItem href="/portfolio" path={path}>
          Portfolio
        </LinkItem>

        <LinkItem href="/about" path={path}>
          About
        </LinkItem>
      
        <LinkItem href="/search" p='5px 10px 0px 10px' >
          <SearchIcon w='20px' h='20px'/>
        </LinkItem>

        <LinkItem href="https://github.com/PeemPeimn" p='8px 10px 0px 10px' marginLeft='80px'>
          <IoLogoGithub size={32} color='black'/>
        </LinkItem>

        <LinkItem href="https://www.linkedin.com/in/pheamwaruch-intamool-0b3297216" p='8px 10px 0px 10px'>
          <IoLogoLinkedin size={32} color='black'/>
        </LinkItem>
        
 
      </Box>



    </Box>
  )
}

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = (path === href)
  return (
    <NextLink href={href} passHref>
      <Link
        className={ styles.navLink }
        m='0px 5px 0px 5px'
        p='8px 20px 0px 20px'
        borderRadius={10}
        bgColor={active ? 'rgba(252, 213, 206, 0.7)' : undefined}
        _target={_target}
        textDecoration = 'none !important'
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default NavBar