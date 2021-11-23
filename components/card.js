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
  
  var property = {
    imageUrl: props.imageUrl,
    imageAlt: props.imageAlt,
    imageW: props.imageW,
    imageH: props.imageH,
    imageFit: props.imageFit,
    textH: props.textH,
    title: props.title,
    fontS: props.fontS,
    text: props.text,
    link: props.link,
    id: props.id,
    category: props.category,
    tags: props.tags,

  }

  property.link = property.link ? property.link : "/" + (property.category === "work" ? "portfolio" : property.category) + "/" + property.id
  //console.log(property.link)
  
  let Tags=[]
  for (const tag of property.tags) {
    Tags.push(<Tag name={tag} />)
  }


  return (
    <Box  key={property.imageUrl} 
          className={styles.card} 
          maxW={property.imageW} 
          borderRadius="20px" 
          overflow="hidden" 
          boxShadow='0px 10px 10px 1px rgba(0, 0, 0, 0.2)' 
          my="20px" mx="20px" 
          backgroundColor='#f8edeb'
          position="relative"
          >
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
        
        <Box height='125px'>

          <Box px='5px' fontSize={property.fontS + 4}>
            {property.title}
          </Box>
          <Text fontSize={property.fontS} px='5px' noOfLines={2}>
            {property.text}
          </Text>
          
        </Box>


      </Box>
      <NextLink href={property.link} >
        <Box as={Button} fontSize={property.fontS} fontWeight="400" position='absolute' right='0px' bottom='0px' m='20px' bgColor='#ffd7ba' _hover={{ bg: "#fec89a" }}>
          Read More< ArrowForwardIcon boxSize="14px" marginLeft={2} />
        </Box>
      </NextLink>
    
    </Box>
  )
}

export default Card