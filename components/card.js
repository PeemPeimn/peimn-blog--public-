import styles from "../styles/card.module.css"
import { useRouter } from 'next/router'
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Badge, Box, Button, Divider, Image, Link, LinkBox, LinkOverlay, Text,       
        Popover,
        PopoverTrigger,
        PopoverContent,
        PopoverHeader,
        PopoverBody,
        PopoverArrow,
        PopoverCloseButton } from "@chakra-ui/react"
        

const Tag = (props) => {
  const name = props.name
  const tagColor = props.tagColor
  let link

  if ( name === "blog" || name === "work" )
    link = "/" + (name === "work" ? "portfolio": "blog")
  else
    link = "/search?word=" + name

  return (
    <LinkBox>
      <LinkOverlay href={link}>
        <Badge borderRadius="full" px="2" colorScheme={ tagColor ? tagColor: "teal"}>
          {name}
        </Badge>
      </LinkOverlay>
    </LinkBox>
  )
}

function tag_generator(tags) {
  let Tags=[]
  for (const [index, tag] of tags.entries()) {
    Tags.push(<Tag key={index.toString()} name={tag} />)
  }
  return Tags
}

const Card = (props) => {
  
  
  const property = {
    imageUrl: props.imageUrl,
    imageAlt: props.imageAlt,
    imageW: props.imageW,
    imageH: props.imageH,
    textH: props.textH,
    title: props.title,
    text: props.text,
    link: props.link,
    category: props.category,
    tags: props.tags,

  }
  
  const Tags = tag_generator(property.tags)

  return (
    <Box className={styles.card} maxW="400px" borderRadius="20px" overflow="hidden" boxShadow='0px 0px 4px' m="10px" backgroundColor='#f8edeb'>
      <Link href={property.link}>
        <Box maxH="250px" display="flex" justifyContent="center" overflow="hidden">
          <Image src={property.imageUrl} alt={property.imageAlt} objectFit='fill'/>
        </Box>
      </Link>
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
        </Box>

        <LinkBox>
          <LinkOverlay href={property.link}>
            <Button position='absolute' right='0px' bottom='0px' m='6px' bgColor='#ffd7ba' _hover={{ bg: "#fec89a" }}>
              Read More < ArrowForwardIcon marginLeft={2} />
            </Button>
          </LinkOverlay>
        </LinkBox>

      </Box>
    
    </Box>
  )
}
export default Card


const TagsOverflow = (tags) => {
  return (
    <Popover >
      <PopoverTrigger>
        <Badge as={Button} borderRadius="full" px="2" colorScheme="teal">
        ···
        </Badge>
      </PopoverTrigger>
      <PopoverContent fontSize='14px'>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          Tags
        </PopoverHeader>
        <PopoverBody>
          {tag_generator(tags)}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}