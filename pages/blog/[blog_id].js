import Head from 'next/head'
import Layout from '../../components/layouts/article'
import Tag from '../../components/tag'
import { useDisclosure } from '@chakra-ui/hooks'
import { useRouter } from 'next/router'
import { 
  Box,
  Center, 
  Container, 
  Flex, 
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text } from '@chakra-ui/react'

export default function Blog() {

  const router = useRouter()
  const { blog_id } = router.query

  return (
    <Layout>
      <Head>
        <title> Blog - peimn. </title>
      <Center>{ blog_id }</Center>
      </Head>
      <Flex flexDirection="column" alignItems="Center">
        <Image  alt="thumbnail" 
                src="https://peimnblogpictures.blob.core.windows.net/public/20211118_144214.jpg" 
                width="container.md"
                maxHeight="200px"
                objectFit="cover"
                borderRadius="20px"
                border="2px"
                borderColor="#e8e8e4"
        />
        <Container  maxW="container.md" 
                    height="1000px" 
                    backgroundColor="#f8edeb"
                    borderRadius="20px"
                    border="2px"
                    borderColor="#e8e8e4"
                    paddingY="20px"
                    paddingX="30px"
        >
        {Title({text: "Review: The Midnight Library"})}
        {Tags({ tags: ["review","book","mental health","psychology"]})}
        {PostDate({ date: Date()})}
        {ImageModal({ imageSrc: "https://peimnblogpictures.blob.core.windows.net/public/20211118_144214.jpg",
                      caption: "The Midnight Library By Matt Heig"})}
        {Paragraph({ text: 'สวัสดีครับผู้อ่านทุกท่าน ตอนนี้เป็นช่วงปิดเทอมหลังจากช่วงปีสาม เทอม1 ซึ่งผมก็ได้ตัดสินใจเริ่มทำเว็บเป็นของตัวเอง แล้วก็ถือโอกาสอ่านหนังสือหลายๆเล่มที่ซื้อมาดองไว้เต็มชั้นไปหมด ช่วงก่อนผมเริ่มสนใจในเรื่องของจิตวิทยาขึ้นมา ก็เลยซื้อหนังสือที่เกี่ยวกับจิตวิทยามาไว้หลายเล่มหน่อย ซึ่งเล่มที่จะหยิบมารีวิวในวันนี้ก็คือ "The Midnight Library" ของคุณ Matt Haig หลายๆคนอาจจะรู้จักชื่อของเขาผ่าน "แด่ผู้แหลกสลาย (Reasons To Stay Alive)" แน่นอนว่าผมเองก็ซื้อหนังสือเล่มนั้นมาด้วย และน่าจะนำมารีวิวในภายภาคหน้า หนังสือเล่มนี้จะเป็นการบอกเล่าประสบการณ์ของผู้ป่วยเป็นโรคซึมเศร้าในรูปแบบนิยาย ซึ่งคุณ Matt Haig เองก็เคยป่วยเป็นโรคซึมเศร้ามาก่อน ทำให้เข้าใจในตัวอาการของโรคเป็นอย่างดี และนำมาเขียนเป็นนิยายให้ผู้อ่านที่แม้จะไม่เคยเป็นโรคซึมเศร้ามาก่อนเข้าใจและมีอารมณ์ร่วมไปกับเนื่อหาได้ง่าย ผมคิดว่าหนังสือเล่มนี้เหมาะทีเดียวสำหรับการเป็นโพสต์แรกในบล็อก เนื่องจากช่วงก่อนที่จะปิดเทอมผมเองก็มีปัญหาในชีวิตหลายอย่างรุมล้อม โดยเฉพาะด้านจิตใจ ก็เลยจะมาบอกเล่าความรู้สึกที่เกิดขึ้นในการอ่านหนังสือเล่มนี้ผ่านมุมมองของผู้มีปัญหาสุขภาพจิตให้ได้อ่านกันครับ'})}
        {Header({ text: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" })}
        </Container>
      </Flex>
    </Layout>
  )
}


const Title = (props) => {
  const property = {
    title: props.text
  }
  return (
    <Box  fontSize="28px" 
          fontWeight="500" 
          letterSpacing="1px"
          marginY={4}
    >
      {property.title}
    </Box>
  )
}

const PostDate = (props) => {
  const property = {
    date: props.date
  }
  return (
    <Box textColor="gray" fontSize="14px" fontWeight="200" fontStyle="italic">
      Posted: {property.date.toString()}
    </Box>
  )
}

const Tags = (props) => {
  const property = {
    tags: props.tags
  }

  let Tags = []
  for (const [index, tag] of property.tags.entries())
    Tags.push(Tag({name: tag}))

  return (
    <Flex flexWrap="wrap" gridGap="10px" marginY={4}>
      {Tags}
    </Flex>
  )
}

const ImageModal = (props) => {
  const property = {
    imageSrc: props.imageSrc,
    imageW: props.imageW,
    imageH: props.imageH,
    caption: props.caption,
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Center my={4} flexDirection="column" alignItems="center">
      <Image  alt={property.caption}
              src={property.imageSrc}
              maxWidth="80%"
              onClick={onOpen}
              borderRadius="20px"
      />

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent my="auto" paddingBottom="25">
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Center>
              <Image  
                  alt={property.caption}
                  src={property.imageSrc}
              />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box  mx={10} 
            my={2} 
            fontSize="15px" 
            fontWeight="200" 
            fontStyle="italic"
      >
        {property.caption}
      </Box>
    </Center>
  )
}

const Paragraph = (props) => {
  
  const property = {
    text: props.text
  }

  return (
    <Text textAlign="justify" 
          fontWeight="300"
          my={2}
    >
      <Box dangerouslySetInnerHTML={{__html: "&emsp;"+property.text}}></Box>
    </Text>
  )
}

const Header = (props) => {

  const property = {
    text: props.text
  }

  return (
    <Text fontWeight="400" 
          fontSize="18px" 
          my={4}
    >
      <Box dangerouslySetInnerHTML={{__html: property.text}}></Box>
    </Text>
  )
}
