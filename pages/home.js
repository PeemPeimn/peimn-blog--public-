import Head from 'next/head'
import { Box, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import styles from '../styles/home.module.css'
import Card from '../components/card'

const Morning = () => {
  return (
      <Box textAlign='center' className={styles.greetings} marginTop={20} marginBottom={20}>
        <Box fontSize={36} fontWeight={400}  marginBottom={5}>
          Good Morning!
        </Box>
        <Divider />
        <Box>
          <p>Another day has just started. Do you want to join me for a cup of coffee?</p>
          <p>I don&apos;t know how hard your yesterday was. But cheer up!</p>
          <p>Today is a new beginning. May this day go as beautifully as you want.</p>
        </Box>
      </Box>
  )
}


// const quotes = { 'Morning': M,
//                     'Afternoon': ['Good Afternoon!'],
//                     'Evening': ['Good Evening!']
//                   }

const now = new Date()
const hour = now.getHours();
const quote = (hour) => {
  if (hour < 12) {
    return quotes['Morning']
  }
  if (hour < 18) {
    return quotes['Afternoon']
  }
  if (hour < 21) {
    return quotes['Evening'] 
  }
  return quotes['Night']
}



export default function Home() {

  
  return (
    <Layout>
      <Head>
        <title> Home - peimn. </title>
      </Head>

      
      <Box display='flex' justifyContent='center' backgroundColor='transparent' >
        <Box></Box>

        {Morning()}

        <Box></Box>
      </Box>

      <Card />
      <div className='hello'>

    
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
      <p>Some text some text some text some text..      Some text some text some text some text..</p>
    </div>
    </Layout>
  )
}
