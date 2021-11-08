import NavBar from '../navbar'

const Layout = ({ router }) => {
  return (
    <NavBar path={router.asPath} />
  )
}

export default Layout