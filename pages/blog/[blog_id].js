import Head from 'next/head'
import Layout from '../../components/layouts/article'
import router from 'next/router'
import { useEffect, useState } from 'react'
import { getOnePost, getOneMetaData } from '../api/cosmos'
import { 
  ContentLoader,
  Title,
  Tags,
  PostDate,
  ImageModal } from '../../lib/loader'

import { 
  Container, 
  Flex,
  Image,
  SkeletonText,
  Skeleton } from '@chakra-ui/react'

export default function Blog() {

  const [ loading, setLoading ] = useState(true)
  const [ BlogHeader, setHeader ] = useState(undefined)
  const [ BlogContents, setContents ] = useState(undefined)

  useEffect( () => {

    const fetchData = async () => {
      
      if (!loading)
        return;

      try {
        const { blog_id } = router.query
        await getOneMetaData(blog_id)
          .then(res => { 
            if (res === undefined) {
              router.push("/404")
            } else 
            setHeader(res)
          })

        await getOnePost(blog_id)
          .then(res => { 
            if (res === undefined) {
              router.push("/404")
            } else 
            setContents(res)
          })

        setLoading(false)
      }
      catch(err) {
        console.error(err)
      }
    }
    setTimeout(() => {
      fetchData()
    }, 2000)
    
  }, [loading])

  if (loading || BlogContents === undefined || BlogHeader === undefined ){

    return (
      <Layout>
        <Head>
          <title> Blog - peimn. </title>
        </Head>
        <Flex flexDirection="column" alignItems="Center">
          <Skeleton maxW="container.md"
                    width="container.md"
                    borderRadius="20px"
                    height="200px"
          />
          <Container   maxW="container.md" 
                        backgroundColor="#f8edeb"
                        borderRadius="20px"
                        border="2px"
                        borderColor="#e8e8e4"
                        paddingY="20px"
                        paddingX="30px" 
          >
            <SkeletonText mt={4} noOfLines={30} spacing="6" />
          </Container>
        </Flex>
      </Layout>
    )
  }

  return (
    <Layout>
      <Head>
        <title> Blog - peimn. </title>
      </Head>
      <Flex flexDirection="column" alignItems="Center">
        <Image  alt="thumbnail" 
                src={BlogHeader.thumbnailpicture.src} 
                width="container.md"
                maxHeight="200px"
                objectFit="cover"
                borderRadius="20px"
                border="2px"
                borderColor="#e8e8e4"
        />
        <Container  maxW="container.md" 
                      backgroundColor="#f8edeb"
                      borderRadius="20px"
                      border="2px"
                      borderColor="#e8e8e4"
                      paddingY="20px"
                      paddingX="30px"
        >
            <Title text={BlogHeader.title} />
            <Tags tags={BlogHeader.tags} />
            <PostDate date={BlogHeader.postdate} />
            <ImageModal imageSrc={BlogHeader.thumbnailpicture.src}
                        caption={BlogHeader.thumbnailpicture.caption} />

            <ContentLoader contents={BlogContents.data}/>
        </Container>
      </Flex>
    </Layout>
  ) 
}