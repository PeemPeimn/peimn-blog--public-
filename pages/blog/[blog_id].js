import Head from 'next/head'
import Layout from '../../components/layouts/article'
import router from 'next/router'
import { useEffect, useState } from 'react'
import { getOnePost, getOneMetaData, getAllId } from '../../lib/cosmos'
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


export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = await getAllId("blog")

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { blog_id: post.id },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /blog/1, then params.id is 1
  const BlogHeader = await getOneMetaData(params.blog_id)
  const BlogContents = await getOnePost(params.blog_id)
  const data = { BlogHeader: BlogHeader, BlogContents: BlogContents }

  // Pass post data to the page via props
  return { props: { data } }
}

export default function Blog({ data }) {

  const [ loading, setLoading ] = useState(true)
  const { BlogHeader, BlogContents } = data

  useEffect( () => {

    const fetchData = async () => {
      
      if (!loading)
        return;
      setLoading(false)
    }
    setTimeout(() => {
      fetchData()
    }, 2000)
    
  }, [loading])

  if (loading){

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
          <Container  maxW="container.md"
                      backgroundColor="#f8edeb"
                      borderRadius="20px"
                      border="2px"
                      borderColor="#e8e8e4"
                      paddingY="20px"
                      paddingX="30px" 
          >
            <SkeletonText my={8} noOfLines={1} spacing="7" maxWidth="60%"/>
            <SkeletonText my={8} noOfLines={1} spacing="7" maxWidth="40%"/>
            <SkeletonText my={8} noOfLines={1} spacing="7" maxWidth="70%"/>

            <SkeletonText mt={300} noOfLines={30} spacing="5" />
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