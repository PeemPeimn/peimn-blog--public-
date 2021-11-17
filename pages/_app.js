import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Rights from '../components/layouts/rights'
import Layout from '../components/layouts/main'
import { ChakraProvider } from "@chakra-ui/react"


function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
      </Layout>
      <Rights />
    </ChakraProvider>
  )
}

export default MyApp
