import { Badge, Box, Button, Divider, Image, Link, Text } from "@chakra-ui/react"
import styles from "../styles/card.module.css"
import { useRouter } from 'next/router'
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Card = (props) => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }
  const router = useRouter()
  return (
    <Box className={styles.card} maxW="400px" borderRadius="20px" overflow="hidden" boxShadow='0px 0px 4px' marginTop='5px' marginBottom='5px' marginLeft='5px' marginRight='5px' backgroundColor='#f8edeb'>
      <Link onClick={()=>{router.push("https://youtube.com")}}>
        <Box maxH="500px" display="flex" justifyContent="center" overflow="hidden">
          <Image src={property.imageUrl} alt={property.imageAlt} />
        </Box>
      </Link>
      <Divider />
      <Box p={4}>
        <Box display="flex" alignItems="baseline" gridGap={1} py={2}>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Blog
          </Badge>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Review
          </Badge>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Book
          </Badge>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Game
          </Badge>
        </Box>
        
        <Box height='140px' position='relative'>

          <Box px='5px' fontSize='20px' isTruncated>
            ไอบอสเอ๊ย
          </Box>
          <Text px='5px' noOfLines={2}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </Text>
          <Button position='absolute' right='0px'
            onClick = {() => router.push('https://youtube.com')}
          >
            Read More <ArrowForwardIcon marginLeft={2} />
          </Button>
        </Box>

      </Box>
    
    </Box>
  )
}
export default Card