import Head from 'next/head'
import Layout from '../components/layouts/article'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { postToDB, getAllId, getAllTags } from '../lib/cosmos'
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
import Search from './search'

/*
* Write the blog's header here.
*/

var BlogHeader = {
    title: "Peimn blog",
    // The title of the blog
    // string 
    // example => title: "This is the title"

    category: "work",
    // Category of the blog
    // string => "blog" or "work"

    tags: ["web development", "database", "javascript","HTML & CSS", "azure", "deployment", "Next.js", "React.js", "Node.js"],
    // The tags of the blog
    // string[]
    // example => tags: ["Tag1", "Tag2", "Tag3"]

    postdate: Date.now(),
    // The date that this blog is posted on
    // Date
    // The default value is set to the date when this blog is posted

    thumbnailpicture: {
      src: "https://peimnblogpictures.blob.core.windows.net/public/Screenshot 2021-11-25 153114.png",
      caption: "My first website!"
    },
    // The thumbnail picture of the blog
    // string
    // example => thumbnailpicture: {
    //   src: "https://www.pictures.com/pic1.png",
    //   caption: "the sample pic"
    // }

    recap: "A simple personal blog website that also holds my works, created using Next.js, React.js, Node.js and Azure Cosmos Database.",
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
  type: "image",
  data: {
    imageSrc: "",
    // image link
    caption: "",
    // string
  }
}

{
  type: "quote"
  data: {
    text: "",
    // string  (in-line HTML is allowed)
  }
}
* *************************************************************
*/

/*
* Write blog's contents here
*/
const Contents = { data: [
  {
    type: "paragraph",
    data: {
      text: "สวัสดีครับ ในโพสท์นี้ผมก็จะมาอธิบายขั้นตอนการสร้างเว็บไซต์โดยย่อ รวมไปถึงการเลือกใช้เครื่องมือต่างๆในแต่ละขั้นตอนที่จำเป็นต่อการทำเว็บไซต์นี้ ตั้งแต่เริ่มต้นสร้าง จนไปถึงการ deploy"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: "เนื่องจากก่อนหน้านี้ ตัวผมเองก็เคยมีประสบการณ์ในการเขียน JavaScript มาบ้างเล็กน้อย และอยากฝึกเพิ่มเติมให้ชำนาญมากขึ้น จึงเลือกใช้ JavaScript เป็นภาษาหลัก โดยการเลือกใช้เครื่องมือต่างๆ จะมีแรงบันดาลใจมาจาก MERN stack โดยจะปรับตัวเครื่องมือเล็กน้อยให้เข้ากับแนวทางการพัฒนาของตนเอง "
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "header",
    data: {
      text: "Stack"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: "- <b>Next.js</b> : Next.js เป็น framework ที่สร้างขึ้นบน Node.js ที่ช่วยในการสร้าง static websites และยังมีการทำ dynamic routing ในตัวด้วย"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: "- <b>Node.js</b> : Node.js เป็น Runtime environment สำหรับ JavaScript ที่สามารถใช้งานแบบ cross-platform ได้"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: "- <b>React.js</b> : React.js เป็น library สำหรับการสร้าง UI ที่สามารถ update state ให้กับตัว component ต่างๆได้"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: "- <b>Azure Cosmos</b> :  Azure Cosmos เป็น database แบบ NoSQL ที่มี API แบบ SQL ที่เราคุ้นเคยให้ใช้"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: "<em>... ผมควรจะเรียก stack นี้ว่าอะไรดี ? NARN ? ARNN ? RANN ? ... เดี๋ยวค่อยคิดละกัน</em>"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "header",
    data: {
      text: "User Interfaces"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: "ก่อนหน้าที่จะเริ่มทำเว็บนี้ผมได้ไปเห็น <a href='https://www.youtube.com/watch?v=bSMZgXzC9AA&t=1698s' target='_blank' style='text-decoration: underline; color: blue'>Tutorial</a> ของคุณ craftzdog เข้า และคิดว่าน่าจะปรับให้เข้ากับตัวเว็บของผมได้ง่าย จึงทำตามแนวคิดของ tutorial นี้เป็นหลัก โดยใช้ chakra-ui เป็น library ช่วยในการสร้าง UI"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: "ขั้นตอนนี้ส่วนใหญ่เป็นจะการออกแบบ template ของหน้าเพจต่างๆ โดยใช้ React.js และใช้ components ที่มีใน chakra-ui นอกจากนี้ทางคุณ craftzdog ยังได้นำโมเดลสามมิติมาแสดงบนหน้าเว็บด้วย ผมเห็นว่าน่าสนใจจึงได้ไปลองแกะโค้ดแล้วนำมาปรับใช้กับเว็บตัวเอง โดยอาศัยการแสดงโมเดลผ่าน library three.js"
      // string ( in-line HTML is allowed)
    }
  },
  {
  type: "image",
  data: {
    imageSrc: "https://peimnblogpictures.blob.core.windows.net/public/camera.png",
    // image link
    caption: "ใช้ความรู้เรื่อง Orthographic View ด้วย ให้ตายเถอะ...",
    // string
    }
  },
  {
    type: "paragraph",
    data: {
      text: "ตอนเซ็ตกล้องให้โมเดลนี่ทำเอามึนไปพักหนึ่งเลยเหมือนกัน ไม่คิดว่าต้องใช้ความรู้มิติสัมพันธ์ด้วย ถึงกับต้องไปรื้อฟื้นความรู้สมัยเรียน drawing ตอนปี 1 กันเลย"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "header",
    data: {
      text: "Editor"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "image",
    data: {
      imageSrc: "https://peimnblogpictures.blob.core.windows.net/public/components.png",
      // image link
      caption: "ตัวอย่าง components ต่างๆของตัว editor",
      // string
      }
    },
  {
    type: "paragraph",
    data: {
      text: "ในตอนแรกที่จะทำตัว Editor ผมก็คิดว่าจะดึง library สำเร็จรูปมาใช้นั่นแหละ แต่ว่าพอลองมาใช้ก็พบปัญหาหลายๆอย่าง library นี้ไม่ซัพพอร์ต react บ้างล่ะ structure ของข้อมูลไม่ถูกใจบ้างล่ะ เลยตัดปัญหาโดยการสร้างเองมันซะเลย โดยหลักการก็เรียบง่ายเพียงแค่สร้าง component ที่จะใช้ไว้ แล้วนำมาเรียกใช้ในภายหลัง แน่นอนว่าผมไม่ได้ทำให้มันเป็น Editor ที่มีหน้าตา UI สวยงามหรอก เพียงแค่เขียนให้ดึง component มาใช้เท่านั้นเอง แต่นั่นก็ไม่เป็นปัญหา เพราะว่านี่เป็น personal blog ที่มีผู้เขียนข้อมูลคนเดียวนั่นก็คือผม"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "header",
    data: {
      text: "Routing"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: "ส่วนนี้สำหรับผมแล้วมันเป็นส่วนที่ยากที่สุดของการสร้างเว็บในครั้งนี้เลยครับ เนื่องจาก Next.js จะสร้าง static pages ตอน build time แต่เว็บผมมันเป็นแบบ dynamic ต้องรอรับข้อมูลนี่สิ ทำให้เมื่อ route ไปยังเพจที่ควรจะรอรับขอมูลมาเรนเดอร์ ที่ตัว Next.js นั้นไม่มี path ของหน้านี้อยู่ ทำให้ redirect ไปยังหน้า 404 ทันที ตอนเจอปัญหาครั้งแรกก็รู้สึกตันเลยครับ นึกว่าจะทำเว็บไม่สำเร็จซะแล้ว แต่หลังจากได้ไปค้นหาทางแก้ตาม stackoverflow และตาม board ต่างๆ ก็เจอว่า Next.js นั้น มีฟังก์ชั่นสำหรับการรับข้อมูลไปทำ static generation และ server side rendering อยู่ นั่นคือ getStaticProps, getStaticPaths และ getServerSideProps"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: "โดยตัว getStaticProps และ getStaticPaths จะเป็นฟังก์ชั่นที่จะทำการรับข้อมูลมาสร้าง props และ paths ตอน build time ทำให้ตัว next.js รู้แล้วว่ามี path นี้อยู่ และสามารถเรนเดอร์ได้"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: "ส่วน getServerSideProps นั้นจะเป็นการรับข้อมูลมาเรนเดอร์ทุกครั้งที่มีการ request มันจึงเป็นฟังก์ชันจำเป็นที่ขาดไปไม่ได้สำหรับ feature search นั่นเอง"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "image",
    data: {
      imageSrc: "https://peimnblogpictures.blob.core.windows.net/public/routing.png",
      // image link
      caption: "ฟังก์ชัน getStaticProps และ getStaticPaths",
      // string
      }
  },
  {
    type: "header",
    data: {
      text: "Database"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: 'ตอนเริ่มแรกที่จะทำเว็บ ผมติดว่าจะใช้ database แบบ SQL ในการทำ แล้วก็เลือกใช้ azure เป็น cloud เนื่องจากว่าปกติก็ใช้ผลิตภัณฑ์ของทาง Microsoft อยู่แล้ว แต่ตอนที่จะมาใช้จริงๆก็เห็นว่า อ้าว azure มี database แบบ NoSQL ให้ใช้ด้วยนี่นา นั่นก็คือ "Azure Cosmos" แถมยังมี API ที่ใช้การเขียน SQL แบบที่คุ้นเคยให้ใช้อีกต่างหาก ประกอบกับผมเคยแตะตัว MongoDB มาก่อนก็เลยเปลี่ยนมาใช้ตัวนี้เลย โดยจะใช้เก็บในส่วนของข้อมูลตัวอักษรของโพสท์ในบล็อก ส่วนของรูปภาพ และวิดีโอก็จะไปใช้ Azure Blob Storage แทน เนื่องจากเราสามารถนำ url ของไฟล์ใน blob มาแสดงได้เลยโดยไม่ต้องส่งข้อมูลมาแบบ binary'
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "image",
    data: {
      imageSrc: "https://peimnblogpictures.blob.core.windows.net/public/cosmos-entities.png",
      // image link
      caption: "โครงสร้างของ Azure Cosmos DB",
      // string
      }
  },
  {
    type: "header",
    data: {
      text: "Deployment"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: 'หลังจากที่ทำทุกส่วนเสร็จสิ้นแล้ว ก็ถึงคราวที่จะนำมาประกอบร่างกันแล้วนำไป deploy โดยทางผู้พัฒนาของ Next.js นั้นแนะนำให้ deploy บน Vercel ซึ่งเป็น platform ที่ใช้ผู้พัฒนาของ Next.js มีส่วนร่วมด้วยนั่นเอง ตัวผมก็ว่านอนสอนง่ายก็เลยทำตามไป (เอาจริงๆ แอบไปลอง deploy บน Azure แล้วไม่เวิร์กน่ะ T^T ) โดยขั้นตอนการ deploy ก็ง่ายเอามากๆ เพียงแค่เชื่อม repository ของเว็บเราบน GitHub เข้ากับทาง Vercel หลังจากนั้นปล่อยให้ Vercel build เว็บเราก็เสร็จเรียบร้อย'
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "image",
    data: {
      imageSrc: "https://peimnblogpictures.blob.core.windows.net/public/Screenshot 2021-11-25 172915.png",
      // image link
      caption: "ตัวอย่างหน้า Deployments",
      // string
      }
  },
  {
    type: "paragraph",
    data: {
      text: 'นอกจากนี้ Vercel เองก็ยังจะ Redeploy ให้เราเองหากมีการ push ไปที่ branch main อีกต่างหาก (ถ้าไม่ได้เปลี่ยนแปลงการตั้งค่า)'
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "header",
    data: {
      text: "Conclusion"
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: 'ก็จบไปแล้วสำหรับการสร้างเว็บไซต์ของผม โดยผมจะนำโค้ดที่เป็นส่วนที่สามารเปิดเผยได้ไปไว้ <a target="_blank" href="" style="color: blue; text-decoration: underline">ที่นี่</a> ความรู้ที่ได้รับจากการทำเว็บนี้ก็คือ ได้ฝึกโค้ดบางสิ่งขึ้นมาด้วยตนเอง ออกแบบ structures และ algorithms เอง รวมไปถึงการทำความเข้าใจ และนำเครื่องมือที่ผู้อื่นสร้างไว้มาใช้ให้เหมาะกับตัวเรา และการแก้ไขสถานการณ์ต่างๆ เมื่อเกิดปัญหา สามารถอ่าน error code ได้อย่างเข้าใจ และสามารถนำไปค้นหาหนทางแก้ได้'
      // string ( in-line HTML is allowed)
    }
  },
  {
    type: "paragraph",
    data: {
      text: 'และสิ่งที่สำคัญที่สุดที่ได้จากการทำเว็บในครั้งนี้ก็คือ การได้นำความรู้ที่ได้ร่ำเรียนมา มาประยุกต์ใช้กับการสรรสร้างบางสิ่งบางอย่างจริงๆ เปรียบเหมือนกับบันไดขั้นแรกที่จะนำเราไปสู่จุดที่สูงขึ้น ผลงานในครั้งนี้แม้ว่าจะไม่ได้สวยงามเลิศหรู หรือใช้กลวิธีที่สลับซับซ้อนใดๆ เป็นเพียงผลงานเล็กๆ ผลงานหนึ่ง แต่ผมก็ภูมิใจกับผลงานชิ้นนี้ และหวังว่าประสบการณ์ที่ได้จะทำให้ผมพัฒนาขึ้นไปในอนาคต'
      // string ( in-line HTML is allowed)
    }
  },
]}

export default function Editor() {

  const router = useRouter()

  function post() {
    BlogHeader["search"] =  BlogHeader.title + 
                          BlogHeader.category +
                          BlogHeader.tags.join() +
                          BlogHeader.thumbnailpicture.caption +
                          BlogHeader.recap
    var tags = []
    for ( var tag of BlogHeader.tags )
      tags.push(tag.toLowerCase())

    BlogHeader["tags"]=tags

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

function test() {
  var tags = []
  const query = getAllTags()
  for(var q of query)
    tags.push(q.name)
  console.log(tags)
}
