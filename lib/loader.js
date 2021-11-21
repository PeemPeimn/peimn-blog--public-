import Tag from '../components/tag'
import { useDisclosure } from '@chakra-ui/hooks'
import { 
  Box,
  Center, 
  Flex, 
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  } from '@chakra-ui/react'
  
export function ContentLoader(props) {
  let components = []
  for ( const [key, content] of props.contents.entries() ) {
    let data = content.data
    data["key"] = content.type+key
    //console.log(content.type + ":" + key)

    if (content.type==="header")
      components.push(Header(data))
      
    else if (content.type==="paragraph")
      components.push(Paragraph(data))

    else if (content.type==="image")
      components.push(ImageModal(data))

    
  }

  return components 
    
}

/*
* Blog's Header Components
*/

export const Title = (props) => {
  const property = {
    title: props.text,
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

export const PostDate = (props) => {
  const property = {
    date:  new Date(props.date).toString()
  }

  return (
    <Box  textColor="gray" 
          fontSize="14px" 
          fontWeight="200" 
          fontStyle="italic"
    >
      Posted: {property.date}
    </Box>
  )
}

export const Tags = (props) => {
  const property = {
    tags: props.tags
  }

  let Tags = []
  for (const [index, tag] of property.tags.entries())
    Tags.push(Tag({name: tag, key: "Tag"+index}))

  return (
    <Flex flexWrap="wrap" gridGap="10px" marginY={4}>
      {Tags}
    </Flex>
  )
}


/*
* Repeatable components
*/

export const Header = (props) => {

  const property = {
    text: props.text,
    key: props.key
  }

  return (
    <Box fontWeight="400" 
          fontSize="18px" 
          my={8}
          key={property.key}
          dangerouslySetInnerHTML={{ __html: property.text}}
    >
    </Box>
  )
}

export const ImageModal = (props) => {
  const property = {
    imageSrc: props.imageSrc,
    imageW: props.imageW,
    imageH: props.imageH,
    caption: props.caption,
    key: props.key
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Center 
      key = {property.key}
      my={8} flexDirection="column" alignItems="center" 
    >
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
                  alt={property.imageSrc}
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

export const Paragraph = (props) => {
  
  const property = {
    text: "&emsp;"+props.text,
    key: props.key
  }

  return (
    <Box textAlign="justify" 
          fontWeight="300"
          my={2}
          key={property.key}
          dangerouslySetInnerHTML={{ __html: property.text}}
    >
    </Box>
  )
}

