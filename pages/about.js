import Layout from "../components/layouts/article"
import Fade from 'react-reveal/Fade'
import { Image } from '@chakra-ui/react'
import Head from "next/head"
import { 
  Box,
  Flex,
  Link,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { 
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
 } from "react-icons/io5"


const About = () => {
  return (
    <Layout>
      <Head>
          <title> About - peimn. </title>
      </Head>
      <Flex direction="column" alignItems="center">
        <Fade top>
          <Flex my="80px" maxWidth="500px"alignItems="center">
            <Image w="150px" h="150px" borderRadius="100%" src="https://peimnblogpictures.blob.core.windows.net/public/20211125_233650.jpg" alt="ProfilePicture"/>
          </Flex>
        </Fade>
        <Flex maxWidth="500px">
          <Box  width="1px"
                backgroundColor="black"
          />
          <Flex direction='column' 
          >
            <Block header="About Me">
              <Box>
                Name: Pheamwaruch Intamool<br/>
                Nickname: Peem<br/>
                Date of Birth: Aug 6, 2000<br/>

              </Box>
            </Block>

            <Block header="Contacts">
              <Flex as={Link} isExternal alignItems="center" href="https://github.com/PeemPeimn">
                <IoLogoGithub/><Box px="4px">PeemPeimn</Box>
              </Flex>
              <Flex as={Link} isExternal alignItems="center" href="https://www.linkedin.com/in/pheamwaruch-intamool-0b3297216/">
                <IoLogoLinkedin/><Box px="4px">Pheamwaruch</Box>
              </Flex>
              <Flex alignItems="center"><IoMail/><Box px="4px">intamoon.peem@gmail.com</Box></Flex>
            </Block>

            <Block header="Education">
                2013-2019: High School <br/>Satit CMU, Chiang Mai, Thailand<br/><br/>
                2019-present: Bachelor in Computer Engineering<br/>
                Kasetsart University, Bangkok, Thailand
            </Block>

            <Block header="Interests">
              <UnorderedList>
                <ListItem>Books: Fiction, Novel, Literature, Science</ListItem>
                <ListItem>Games: RPG, Puzzle, Strategy, Visual Novel</ListItem>
                <ListItem>Animes</ListItem>
                <ListItem>Coffee</ListItem>
                <ListItem>Desserts</ListItem>
                <ListItem>Academic Interests
                  <UnorderedList listStyleType="square" >
                    <ListItem>Machine Learning</ListItem>
                    <ListItem>Neural Networks</ListItem>
                    <ListItem>Bioinformatics</ListItem>
                    <ListItem>Philosophy</ListItem>
                    <ListItem>Psychology</ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
            </Block>

            <Block header="Skills">
              <UnorderedList>
                <ListItem>Programming Languages <br/> + Libraries & Frameworks
                  <UnorderedList listStyleType="square" >
                    <ListItem>
                      Python<br/>
                      - Numpy, Pandas
                    </ListItem>
                    <ListItem>
                      JavaSript<br/>
                      - Node.js, React.js, Next.js
                    </ListItem>
                    <ListItem>HTML & CSS</ListItem>

                  </UnorderedList>
                </ListItem>
                <ListItem>Databases <br/>
                  <UnorderedList listStyleType="square" >
                    <ListItem>SQLite</ListItem>
                    <ListItem>MongoDB</ListItem>
                    <ListItem>Azure Cosmos</ListItem>
                    <ListItem>Azure Blob Storage</ListItem>

                  </UnorderedList>
                </ListItem>
                <ListItem>Softwares
                  <UnorderedList listStyleType="square" >
                    <ListItem>Microsoft Office</ListItem>
                    <ListItem>DaVinCi</ListItem>
                    <ListItem>OBS</ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
            </Block>

            <Block header="Featured Courses">
              <UnorderedList> 
                <ListItem> Kasetsart University
                  <UnorderedList listStyleType="square">
                    <ListItem>Data Structures & Algorithms</ListItem>
                    <ListItem>Database Design</ListItem>
                    <ListItem>Software Engineering</ListItem>
                    <ListItem>Operating Systems</ListItem>
                    <ListItem>Probability & Statistics</ListItem>

                  </UnorderedList>
                </ListItem>

                <ListItem> Coursera
                  <UnorderedList listStyleType="square">
                    <ListItem>Machine Learning</ListItem>
                    <ListItem>Financial Markets</ListItem>
                    <ListItem>Introduction to Psychology</ListItem>
                    <ListItem>Introduction to Philosophy</ListItem>
                  </UnorderedList>
                </ListItem>

                <ListItem> edX
                  <UnorderedList listStyleType="square">
                    <ListItem>Statistics</ListItem>
                  </UnorderedList>
                </ListItem>

                <ListItem> Udemy
                  <UnorderedList listStyleType="square">
                    <ListItem>JavaScript</ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
            </Block>

         </Flex>
        </Flex>  
      </Flex>
    </Layout>
  )
}

export default About


const Block = ({ children, ...props }) => {
  const header = props.header
  return (
    <Fade bottom>
      <Box py="10px">
        <Box  width="fit-content"
              borderBottom="2px"
              px="5px"
              bordercolor="black"
        >
          {header}
        </Box>
        <Box  px="10px"
              py="10px" 
              fontSize="15px" 
              fontWeight="300"
        >
          {children}
        </Box>
      </Box>
    </Fade>
  )
}