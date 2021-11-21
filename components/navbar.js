import NextLink from 'next/link'
import styles from '../styles/navbar.module.css'
import { Box, Link, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const NavBar = props => {
  const { path } = props
  const router = useRouter()

  return (
    <Box className = { styles.nav }>

      <NextLink href='/home'>
      <Link className = 'peimn.' display = 'flex' margin='0px 80px 0px 0px' textDecoration='none !important' fontWeight='400'>
        <Box className = { styles.letter + " " + styles.p }>p</Box>
        <Box className = { styles.letter + " " + styles.e }>e</Box>
        <Box className = { styles.letter + " " + styles.i }>i</Box>
        <Box className = { styles.letter + " " + styles.m }>m</Box>
        <Box className = { styles.letter + " " + styles.n }>n</Box>
        <Box className = { styles.letter + " " + styles.dot }>.</Box>
      </Link>
      </NextLink>

      <Box className = { styles.normalBox }>
        <LinkItem href="/blog" path={path}>
          Blog
        </LinkItem>

        <LinkItem href="/portfolio" path={path}>
          Portfolio
        </LinkItem>

        <LinkItem href="/about" path={path}>
          About
        </LinkItem>
      
        <LinkItem href="/search" path={path} p='5px 10px 0px 10px' >
          <SearchIcon w='20px' h='20px'/>
        </LinkItem>

        <LinkItem href="https://github.com/PeemPeimn" p='8px 10px 0px 10px' marginLeft='80px' isExternal>
          <IoLogoGithub size={32} color='black'/>
        </LinkItem>

        <LinkItem href="https://www.linkedin.com/in/pheamwaruch-intamool-0b3297216" p='8px 10px 0px 10px' isExternal>
          <IoLogoLinkedin size={32} color='black'/>
        </LinkItem>
        
 
      </Box>

      <Box className={styles.phonenav}>
        <LinkItem href="/search" p='5px 10px 0px 10px' >
          <SearchIcon w='20px' h='20px' />
        </LinkItem>

        <Menu>
          <MenuButton as={ IconButton } icon={ <HamburgerIcon /> } margin='4px 0px 0px 10px' backdropBlur='10px' opacity={0.7} border='2px' borderColor='hsl(9, 97%, 86%)'/>
          <MenuList textDecoration='none !important' fontSize='20px' backdropBlur='10px' backgroundColor='hsl(7, 65%, 95%, 1)'>
            <MenuItem className={styles.menuItem} as={LinkItem} href="/home">Home</MenuItem>
            <MenuItem className={styles.menuItem} as={LinkItem} href="/blog">Blog</MenuItem>
            <MenuItem className={styles.menuItem} as={LinkItem} href="/portfolio">Porfolio</MenuItem>
            <MenuItem className={styles.menuItem} as={LinkItem} href="/about">About</MenuItem>
          </MenuList>
        </Menu>

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
        bgColor={active ? 'rgba(252, 213, 206, 0.7)' : undefined}
        borderBottom={active ? "2px" : "0px"}
        borderColor="black"
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