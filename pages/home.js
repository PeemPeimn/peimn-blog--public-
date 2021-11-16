import Head from 'next/head'
import Layout from '../components/layouts/article'
import styles from '../styles/home.module.css'
import Card from '../components/card'
import ModelLoader from '../components/dog-container'
import dynamic from 'next/dynamic'
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

const Morning = () => {
  return (
    <Box display='flex' justifyContent='center' flexDirection='column'>
      <Box className={styles.greetings} margin='20px 2px 20px 2px'>
        <Box fontSize={28} fontWeight={400} >
          Good Morning!
        </Box>
      </Box>
      <Box textAlign='justify' maxW='560px' padding={5}>
        &emsp;My name is Pheamwaruch Intamool. You can also call me Peem.
        I am currently a computer engineering student at Kasetsart University.
        <br />
        &emsp;The main propose of this website is hosting my portfolio and my blog.
        I hope you will learn more about me from this website !
      </Box>
    </Box>
  )
}


// const quotes = { 'Morning': M,
//                     'Afternoon': ['Good Afternoon!'],
//                     'Evening': ['Good Evening!']
//                   }

const now = new Date()
const hour = now.getHours();
const quote = (hour) => {
  if (hour < 12) {
    return quotes['Morning']
  }
  if (hour < 18) {
    return quotes['Afternoon']
  }
  if (hour < 21) {
    return quotes['Evening'] 
  }
  return quotes['Night']
}



export default function Home() {
  
  return (
    <Layout>
      <Head>
        <title> Home - peimn. </title>
      </Head>

      <Box display='flex' justifyContent='center' backgroundColor='transparent' alignItems='center' margin='20px 5px -20px 5px'>
        <Box></Box>

        {Morning()}

        <Box></Box>
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
      <Center marginBottom='30px'>Below is a navigator through my website. Please enjoy !</Center>

      <Grid className={styles.cardFlex} display='flex' justifyContent='center' backgroundColor='transparent' gap={8}>
        <Card />
        <Card />
      </Grid>

    </Layout>
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
            <Link href='https://www.cgtrader.com/3d-models/animals/mammal/oscar-the-dog-quirky-wacky-pet-animal-series'>Oscar The Dog &nbsp;<ExternalLinkIcon/></Link>
          </PopoverHeader>
          <PopoverBody>Author: omabuarts<br/>Purchased via cgtrader.com<br/>on 2021-11-15</PopoverBody>
        </PopoverContent>
      </Popover>
  )
}
