import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/layouts/main'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Layout router={router}>
      </Layout>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
