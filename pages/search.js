import Head from 'next/head'
import Layout from '../components/layouts/article'
import { searchMetadata } from '../lib/cosmos'
import { useEffect, useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { 
  Box,
  Flex,
  Input,
  IconButton,
  Spinner
 } from '@chakra-ui/react'
import Card from '../components/card'
import { useRouter } from 'next/router'

export async function getServerSideProps(router) {
  var { word } = router.query
  var Meta = []
  if ( word !== undefined ){
    Meta = await searchMetadata(word.toString().toLowerCase())
  }
  return {
    props: { Meta: Meta, word:(word ? word : null) }
  }
}

export default function Search({ Meta, word }) {

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

  useEffect(() => {
    setLoad(true)
    setInterval(() => {
      setLoad(false)
    }, 2000);
  },[word])

  return (
    <Layout>
      <Head>
        <title> Search - peimn. </title>
      </Head>
      <Flex flexDirection="column" alignItems="center" mt="100px">
      <Box  backgroundColor="transparent" 
            maxWidth="850px" 
            textAlign="center" 
            padding="10px"
            borderRadius="10px"
            letterSpacing="1px"
            fontSize="28px"
            fontWeight="400"
            >
        Are you looking for something?
      </Box>
      <Box  textAlign='center' 
            maxW='560px' 
            padding="5px"
            fontWeight="300"
            mx="20px"
            >

      </Box>
      <SearchBar word={word}/>
      <Box  
            maxWidth="600px"
            width="90%"
            mx="auto"
            my="20px"
            height="1px"
            bgColor="gray"
            opacity="0.3"
            />

  
      {/* <-------- Search results ---------> */}
      <Flex flexWrap="wrap" 
            justifyContent="center">
        { !loading && Cards.length === 0 && word !== null &&
          (<Box letterSpacing="0.5px">{"Sadly, Nothing is found. (｡•́︿•̀｡)"}</Box>)
        }
        { !loading && Cards.length > 0 && word !== null &&
          Cards
        }
        { loading && word !== null &&
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

const SearchBar = (props) => {
  const router = useRouter()
  const [ value, setValue ] = useState(props.word)

  function handleChange(event) {
    // exclude special characters
    setValue( event.target.value.replace(/[^a-zA-Z0-9\u0E00-\u0E7F]/gi, ""))
  }

  function handleSubmit() {
    router.push("/search?word="+value)
  }
  return (
    <Flex>
      <Input  type="text" 
              maxWidth="400px"
              value={value}
              backgroundColor="white"
              placeholder="Search here..."
              onChange={handleChange}
              focusBorderColor="#d8e2dc"
              onKeyPress={ event => {
                if (event.key === 'Enter') {
                  handleSubmit()
                }
              }}    
      />
      <IconButton
        bgColor='#ffd7ba' 
        _hover={{ bg: "#fec89a" }}
        borderColor="#d8e2dc !important"
        border="1px"
        size="md"
        aria-label="Search"
        icon={<SearchIcon />}
        onClick={handleSubmit}
      />
    </Flex>
  )
}