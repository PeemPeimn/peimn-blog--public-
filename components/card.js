import styles from "../styles/card.module.css"
import NextLink from "next/link"
import Tag from "./tag"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { 
  Box, 
  Button, 
  Divider, 
  Image, 
  Link, 
  Text } from "@chakra-ui/react"
        
  
const Card = (props) => {
  
  const property = {
    imageUrl: props.imageUrl,
    imageAlt: props.imageAlt,
    imageW: props.imageW,
    imageH: props.imageH,
    imageFit: props.imageFit,
    textH: props.textH,
    title: props.title,
    text: props.text,
    link: props.link,
    category: props.category,
    tags: props.tags,

  }
  
  let Tags=[]
  for (const tag of property.tags) {
    Tags.push(<Tag name={tag} />)
  }


  return (
    <Box className={styles.card} maxW="400px" borderRadius="20px" overflow="hidden" boxShadow='0px 10px 10px 1px rgba(0, 0, 0, 0.2)' my="10px" mx="20px" backgroundColor='#f8edeb'>
      <NextLink href={property.link}>
        <Link href={property.link}>
          <Box maxH="250px" display="flex" justifyContent="center" overflow="hidden">
            <Image src={property.imageUrl} alt={property.imageAlt} objectFit={property.imageFit}/>
          </Box>
        </Link>
      </NextLink>
  
      <Divider />
      <Box py={2} px={4}>
        <Box display="flex" gridGap={1} py={2} flexWrap='wrap'>
          { property.category === "blog" ? <Tag name="blog" tagColor="blue"/> : <Tag name="work" tagColor="red"/>}
          { Tags.length > 4 ? Tags.slice(0,4) : Tags }
        </Box>
        
        <Box height='125px' position='relative'>

          <Box px='5px' fontSize='20px'>
            {property.title}
          </Box>
          <Text fontSize="16px" px='5px' noOfLines={2}>
            {property.text}
          </Text>
          
          <NextLink as={Link} href={property.link}>
            <Button position='absolute' right='0px' bottom='0px' m='6px' bgColor='#ffd7ba' _hover={{ bg: "#fec89a" }}>
              Read More < ArrowForwardIcon marginLeft={2} />
            </Button>
          </NextLink>
        </Box>


      </Box>
    
    </Box>
  )
}

export default Card