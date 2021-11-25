import Head from 'next/head'
import Layout from '../components/layouts/article'
import { getAllMetadata } from '../lib/cosmos'
import { useEffect, useState } from 'react'
import { 
  Box,
  Flex,
  Spinner
 } from '@chakra-ui/react'
import Card from '../components/card'

export async function getStaticProps() {
  const Meta = await getAllMetadata("work")

  return {
    props: { Meta }, // will be passed to the page component as props
  }
}

export default function WorkHome({ Meta }) {
  const [ loading, setLoad ] = useState(true)
  var Cards = []
  var cardprops = {
    imageUrl: "",
    imageAlt: "",
    imageW: "350px",
    imageH: "200px",
    imageFit: "cover",
    textH: "200px",
    title: "",
    fontS: 14,
    text: "",
    link: undefined,
    id: "",
    category: "",
    tags: [],
  }

  for ( const post of Meta ) {
    cardprops.imageUrl  = post.thumbnailpicture.src
    cardprops.imageAlt  = post.thumbnailpicture.src
    cardprops.title     = post.title
    cardprops.text      = post.recap
    cardprops.id        = post.id
    cardprops.category  = post.category
    cardprops.tags      = post.tags
    //console.log(cardprops)

    Cards.push(Card(cardprops))
  }
  
  
  useEffect( () => {
    if (!loading)
      return;

    setInterval( () => {
      setLoad(false)
    }, 2000)

  }, [loading])

  return (
    <Layout>
      <Head>
        <title> Portfolio - peimn. </title>
      </Head>

    <Flex flexDirection="column" alignItems="center" mt="100px">
      <Box  backgroundColor="transparent" 
            maxWidth="850px" 
            textAlign="center" 
            padding="10px"
            borderRadius="10px"
            letterSpacing="2px"
            fontSize="28px"
            fontWeight="400"
            >
        Welcome to my portfolio!
      </Box>
      <Box  textAlign='center' 
            maxW='560px' 
            padding="5px"
            fontWeight="300"
            mx="20px"
            >
        All my projects are in here. So is my dedication. 
      </Box>
      <Box  
            maxWidth="600px"
            width="90%"
            mx="auto"
            my="20px"
            height="1px"
            bgColor="gray"
            opacity="0.3"
            />
      <Flex flexWrap="wrap" 
            justifyContent="center">
        { !loading && 
          Cards
        }
        { loading && 
          (
            <Spinner
              my="60px"
              thickness="4px"
              speed="0.6s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )
        }
      </Flex>
    </Flex>

    </Layout>
  )
}
