import Head from 'next/head'
import Layout from '../components/layouts/article'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { postToDB, getAllId } from './api/cosmos'
import { 
  ContentLoader,
  Title,
  Tags,
  PostDate,
  ImageModal } from '../lib/loader'

import { 
  Button,
  Center,
  Container, 
  Flex,
  FormControl,
  Image,
  Input,
  Text } from '@chakra-ui/react'

/*
* Write the blog's header here.
*/

const BlogHeader = {
    title: "Review: The Midnight Library",
    // The title of the blog
    // string 
    // example => title: "This is the title"

    category: "blog",
    // Category of the blog
    // string => "blog" or "work"

    tags: ["review","book","mental health","psychology"],
    // The tags of the blog
    // string[]
    // example => tags: ["Tag1", "Tag2", "Tag3"]

    postdate: Date.now(),
    // The date that this blog is posted on
    // Date
    // The default value is set to the date when this blog is posted

    thumbnailpicture: {
      src: "https://peimnblogpictures.blob.core.windows.net/public/20211118_144214.jpg",
      caption: "The Midnight Library By Matt Haig"
    },
    // The thumbnail picture of the blog
    // string
    // example => thumbnailpicture: {
    //   src: "https://www.pictures.com/pic1.png",
    //   caption: "the sample pic"
    // }

    recap: "บอกเล่าความรู้สึกจากหนังสือ The Midnight Library โดยคุณ Matt Haig",
    // A short text explaining the content of the post
    // string
    // example => recap: "This post is about a man who traveled around the world"
}

/*
* *************************************************************
* Content's components details
{
  type: "header",
  data: {
    text: ""
    // string ( in-line HTML is allowed)
  }
}

{
  type: "paragraph",
  data: {
    text: ""
    // string ( in-line HTML is allowed)
  }
}

{
  type: "image"
  data: {
    imageSrc: "",
    // image link
    caption: "",
    // string
  }
}
* *************************************************************
*/

/*
* Write blog's contents here
*/
const Contents = { data: [
  {
    type: "header",
    data: {
      text: "HELLO"
    }
  },
  { type: "paragraph",
    data: {
      text: 'สวัสดีครับผู้อ่านทุกท่าน ตอนนี้เป็นช่วงปิดเทอมหลังจากช่วงปีสาม เทอม1 ซึ่งผมก็ได้ตัดสินใจเริ่มทำเว็บเป็นของตัวเอง แล้วก็ถือโอกาสอ่านหนังสือหลายๆเล่มที่ซื้อมาดองไว้เต็มชั้นไปหมด ช่วงก่อนผมเริ่มสนใจในเรื่องของจิตวิทยาขึ้นมา ก็เลยซื้อหนังสือที่เกี่ยวกับจิตวิทยามาไว้หลายเล่มหน่อย ซึ่งเล่มที่จะหยิบมารีวิวในวันนี้ก็คือ "The Midnight Library" ของคุณ Matt Haig หลายๆคนอาจจะรู้จักชื่อของเขาผ่าน "แด่ผู้แหลกสลาย (Reasons To Stay Alive)" แน่นอนว่าผมเองก็ซื้อหนังสือเล่มนั้นมาด้วย และน่าจะนำมารีวิวในภายภาคหน้า หนังสือเล่มนี้จะเป็นการบอกเล่าประสบการณ์ของผู้ป่วยเป็นโรคซึมเศร้าในรูปแบบนิยาย ซึ่งคุณ Matt Haig เองก็เคยป่วยเป็นโรคซึมเศร้ามาก่อน ทำให้เข้าใจในตัวอาการของโรคเป็นอย่างดี และนำมาเขียนเป็นนิยายให้ผู้อ่านที่แม้จะไม่เคยเป็นโรคซึมเศร้ามาก่อนเข้าใจและมีอารมณ์ร่วมไปกับเนื่อหาได้ง่าย ผมคิดว่าหนังสือเล่มนี้เหมาะทีเดียวสำหรับการเป็นโพสต์แรกในบล็อก เนื่องจากช่วงก่อนที่จะปิดเทอมผมเองก็มีปัญหาในชีวิตหลายอย่างรุมล้อม โดยเฉพาะด้านจิตใจ ก็เลยจะมาบอกเล่าความรู้สึกที่เกิดขึ้นในการอ่านหนังสือเล่มนี้ผ่านมุมมองของผู้มีปัญหาสุขภาพจิตให้ได้อ่านกันครับ'
    }
  },
  {
    type: "header",
    data: {
      text: "HELLO"
    }
  },
  { type: "paragraph",
    data: {
      text: 'สวัสดีครับผู้อ่านทุกท่าน ตอนนี้เป็นช่วงปิดเทอมหลังจากช่วงปีสาม เทอม1 ซึ่งผมก็ได้ตัดสินใจเริ่มทำเว็บเป็นของตัวเอง แล้วก็ถือโอกาสอ่านหนังสือหลายๆเล่มที่ซื้อมาดองไว้เต็มชั้นไปหมด ช่วงก่อนผมเริ่มสนใจในเรื่องของจิตวิทยาขึ้นมา ก็เลยซื้อหนังสือที่เกี่ยวกับจิตวิทยามาไว้หลายเล่มหน่อย ซึ่งเล่มที่จะหยิบมารีวิวในวันนี้ก็คือ "The Midnight Library" ของคุณ Matt Haig หลายๆคนอาจจะรู้จักชื่อของเขาผ่าน "แด่ผู้แหลกสลาย (Reasons To Stay Alive)" แน่นอนว่าผมเองก็ซื้อหนังสือเล่มนั้นมาด้วย และน่าจะนำมารีวิวในภายภาคหน้า หนังสือเล่มนี้จะเป็นการบอกเล่าประสบการณ์ของผู้ป่วยเป็นโรคซึมเศร้าในรูปแบบนิยาย ซึ่งคุณ Matt Haig เองก็เคยป่วยเป็นโรคซึมเศร้ามาก่อน ทำให้เข้าใจในตัวอาการของโรคเป็นอย่างดี และนำมาเขียนเป็นนิยายให้ผู้อ่านที่แม้จะไม่เคยเป็นโรคซึมเศร้ามาก่อนเข้าใจและมีอารมณ์ร่วมไปกับเนื่อหาได้ง่าย ผมคิดว่าหนังสือเล่มนี้เหมาะทีเดียวสำหรับการเป็นโพสต์แรกในบล็อก เนื่องจากช่วงก่อนที่จะปิดเทอมผมเองก็มีปัญหาในชีวิตหลายอย่างรุมล้อม โดยเฉพาะด้านจิตใจ ก็เลยจะมาบอกเล่าความรู้สึกที่เกิดขึ้นในการอ่านหนังสือเล่มนี้ผ่านมุมมองของผู้มีปัญหาสุขภาพจิตให้ได้อ่านกันครับ'
    }
  },
  {
    type: "image",
    data: {
      imageSrc: "https://peimnblogpictures.blob.core.windows.net/public/20211118_144214.jpg",
      caption: "The Midnight Library By Matt Heig"
    }
  },
  {
    type: "header",
    data: {
      text: "HELLO"
    }
  },
  { type: "paragraph",
    data: {
      text: '<em>สวัสดีครับผู้อ่านทุกท่าน</em> ตอนนี้เป็นช่วงปิดเทอมหลังจากช่วงปีสาม เทอม1 ซึ่งผมก็ได้ตัดสินใจเริ่มทำเว็บเป็นของตัวเอง แล้วก็ถือโอกาสอ่านหนังสือหลายๆเล่มที่ซื้อมาดองไว้เต็มชั้นไปหมด ช่วงก่อนผมเริ่มสนใจในเรื่องของจิตวิทยาขึ้นมา ก็เลยซื้อหนังสือที่เกี่ยวกับจิตวิทยามาไว้หลายเล่มหน่อย ซึ่งเล่มที่จะหยิบมารีวิวในวันนี้ก็คือ "The Midnight Library" ของคุณ Matt Haig หลายๆคนอาจจะรู้จักชื่อของเขาผ่าน "แด่ผู้แหลกสลาย (Reasons To Stay Alive)" แน่นอนว่าผมเองก็ซื้อหนังสือเล่มนั้นมาด้วย และน่าจะนำมารีวิวในภายภาคหน้า หนังสือเล่มนี้จะเป็นการบอกเล่าประสบการณ์ของผู้ป่วยเป็นโรคซึมเศร้าในรูปแบบนิยาย ซึ่งคุณ Matt Haig เองก็เคยป่วยเป็นโรคซึมเศร้ามาก่อน ทำให้เข้าใจในตัวอาการของโรคเป็นอย่างดี และนำมาเขียนเป็นนิยายให้ผู้อ่านที่แม้จะไม่เคยเป็นโรคซึมเศร้ามาก่อนเข้าใจและมีอารมณ์ร่วมไปกับเนื่อหาได้ง่าย ผมคิดว่าหนังสือเล่มนี้เหมาะทีเดียวสำหรับการเป็นโพสต์แรกในบล็อก เนื่องจากช่วงก่อนที่จะปิดเทอมผมเองก็มีปัญหาในชีวิตหลายอย่างรุมล้อม โดยเฉพาะด้านจิตใจ ก็เลยจะมาบอกเล่าความรู้สึกที่เกิดขึ้นในการอ่านหนังสือเล่มนี้ผ่านมุมมองของผู้มีปัญหาสุขภาพจิตให้ได้อ่านกันครับ'
    }
  },
  {
    type: "image",
    data: {
      imageSrc: "https://peimnblogpictures.blob.core.windows.net/public/20211118_144214.jpg",
      caption: "The Midnight Library By Matt Heig"
    }
  },
]}

export default function Editor() {

  const router = useRouter()

  function post() {
    postToDB(BlogHeader, Contents)
    router.push("/blog")
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

        <ContentLoader contents={Contents.data}/>
        <Center>
          <Button onClick={post}>
            Upload
          </Button>
        </Center>
        <Button onClick={test}>
          TEST
        </Button>
        </Container>
        
      </Flex>
    </Layout>
  )
}

async function test() {
  const ids = await getAllId()
}
