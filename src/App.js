import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  SimpleGrid,
  IconButton,
  chakra, 
  shouldForwardProp
} from '@chakra-ui/react';
import osaka from "./media/osaka.mp4"
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {FaPinterest} from "react-icons/fa";
import {FaGithub} from "react-icons/fa"; 
import theme from './background';
import { motion, isValidMotionProp } from "framer-motion";
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Flex marginTop="10" justifyContent="center"><video autoPlay loop="true"><source type="video/mp4" src={osaka}/></video></Flex>       
        <Flex marginTop="10" justifyContent="center">
        <ChakraBox
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          delay:0.5,
          duration:0.1
        }}>
          <Text fontSize="2xl" fontFamily="Silkscreen">Where do you want to go?</Text>
        </ChakraBox>
        </Flex>
        <ChakraBox
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          delay:0.8,
          duration:0.1
        }}>
        <Flex marginTop="10" justifyContent="center">
          <Box w={{
            sm:"100%",
            xl:"50%"
          }} shadow="dark-lg" bgColor="gray.800" borderRadius={12}>
            <SimpleGrid columns={5}>
              <IconButton color="blue.400" margin="10" icon={<FaTwitter />} variant="link"  onClick={()=>{
                window.open("https://twitter.com/home")
              }}/>
              <IconButton color="blue.600" margin="10" icon={<FaFacebook shadow="dark-lg"/>} variant="link" onClick={()=>{
                window.open("https://facebook.com")
              }}/>
              <IconButton color="red.500" margin="10" icon={<FaYoutube shadow="dark-lg"/>} variant="link" onClick={()=>{
                window.open("https://youtube.com")
              }}/>
              <IconButton color="red.600" margin="10" icon={<FaPinterest shadow="dark-lg"/>} variant="link" onClick={()=>{
                window.open("https://pinterest.jp")
              }}/>
              <IconButton color="gray.500" margin="10" icon={<FaGithub shadow="dark-lg"/>} variant="link" onClick={()=>{
                window.open("https://github.com")
              }}/>
            </SimpleGrid>
          </Box>
        </Flex>
        </ChakraBox>
      </Box>
    </ChakraProvider>
  );
}

export default App;
