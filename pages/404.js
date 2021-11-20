import Head from 'next/head'
import Layout from '../components/layouts/article'
import { Center, Box, Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title> Page not found - peimn. </title>
      </Head>
      <Center height="1000px" backgroundColor="white">
          <Image alt="404" src="https://peimnblogpictures.blob.core.windows.net/public/image_processing20210904-5059-1t2m5g3.gif"/>
      </Center>
    </Layout>
  )
}