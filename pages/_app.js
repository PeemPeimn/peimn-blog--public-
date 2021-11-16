import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/layouts/main'
import Rights from '../components/layouts/rights'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
      <Rights />
    </ChakraProvider>
  )
}

export default MyApp
