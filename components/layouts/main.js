import NavBar from '../navbar'

const Layout = ({ children , router }) => {
  return (
    <>
      <NavBar path={router.asPath} />
      {children}
    </>
  )
}

export default Layout