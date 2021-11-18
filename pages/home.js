import Head from 'next/head'
import Layout from '../components/layouts/article'
import styles from '../styles/home.module.css'
import Card from '../components/card'
import ModelLoader from '../components/model-container'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { InfoOutlineIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {  Center, Box, Button, Grid, Link,
          Popover,
          PopoverTrigger,
          PopoverContent,
          PopoverHeader,
          PopoverBody,
          PopoverArrow,
          PopoverCloseButton } from '@chakra-ui/react'


const Dog = dynamic(() => import('../components/dog'), {
  ssr: false,
  loading: () => <ModelLoader />
})

const greet = () => {
  const now = new Date()
  const hour = now.getHours()
  if (hour < 12) {
    return "Good Morning!"
  }
  if (hour < 18) {
    return "Good Afternoon!"
  }
  return "Good Evening!"
}

const Greetings = () => {
  return (
    <Box display='flex' justifyContent='center' flexDirection='column'>
      <Box className={styles.greetings} margin='20px 2px 20px 2px'>
        <Box fontSize={28} fontWeight={400} >
          {greet()}
        </Box>
      </Box>
      <Box textAlign='justify' maxW='560px' padding={5}>
        &emsp;Hi ! My name is Pheamwaruch Intamool. You can also call me Peem.
        I am currently a computer engineering student at Kasetsart University.
        <br />
        &emsp;The main propose of this website is hosting my portfolio and my blog.
        I hope you will learn more about me from this website !
      </Box>
    </Box>
  )
}

const ModelDetails = () => {
  return (
      <Popover >
        <PopoverTrigger>
          <Button fontSize='12px' marginTop={-10} marginBottom={5}>Model Details &nbsp;<InfoOutlineIcon /></Button>
        </PopoverTrigger>
        <PopoverContent fontSize='14px'>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>
            <Link href='https://www.cgtrader.com/3d-models/animals/mammal/oscar-the-dog-quirky-wacky-pet-animal-series' isExternal >Oscar The Dog &nbsp;<ExternalLinkIcon/></Link>
          </PopoverHeader>
          <PopoverBody>Author: omabuarts<br/>Purchased via cgtrader.com<br/>on 2021-11-15</PopoverBody>
        </PopoverContent>
      </Popover>
  )
}

export default function Home() {

  const router = useRouter()
  return (
    <Layout>
      <Head>
        <title> Home - peimn. </title>
      </Head>

      <Box display='flex' justifyContent='center' backgroundColor='transparent' alignItems='center' margin='20px 5px -20px 5px'>
        <Greetings />
      </Box>

      <Dog />

      <Center>
        <ModelDetails />
      </Center>
      <Center>
        <Box textAlign='justify' maxW='560px' padding={5}>
          &emsp;Oh ! uhmm... by the way, I found this cute little dog model and purchased it. 
          So I&apos;m just going to show it up here.
        </Box>
      </Center>
      <Center marginBottom='30px' mx="10px">
        <Box textAlign="center">Below is a navigator through my website. Please enjoy !</Box>
      </Center>

      <Grid display='flex' flexWrap="wrap" justifyContent='center' backgroundColor='transparent' gap={8}>
        <Card imageUrl="https://peimnblogpictures.blob.core.windows.net/public/coffee.jpg"
              imageAlt="Blog"
              imageW="600px"
              imageH="250px"
              imageFit="cover"
              title="Blog"
              text="Hello, this is my blog."
              link="/blog"
              category="blog"
              tags={["book","review","game","anime"]}
        />
        <Card imageUrl="https://peimnblogpictures.blob.core.windows.net/public/port.jpg"
              imageAlt="Portfolio"
              imageW="600px"
              imageH="250px"
              imageFit="cover"
              title="Portfolio"
              text="Hello, this is my portfolio."
              link="/portfolio"
              category="work"
              tags={["stat","ml","web"]}
        />
      </Grid>

      <Center>
        <Box fontSize='16px' fontWeight='100' padding='20px'>
          CR: pixiv <Link href="https://www.pixiv.net/en/users/29737845" isExternal>くぅもんせ</Link> san
        </Box>
      </Center>

    </Layout>
  )
}