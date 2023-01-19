import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../../Styles/Store.module.css"
import { AiFillLock, AiOutlineGoogle, AiOutlineUser } from "react-icons/ai";
const Login = () => {
  return (
   <>
   <Box className={styles.log_main} py={5}>
    <Flex borderRadius="10px" w="70%" m={"auto"}>
      <Box w={"45%"} minH="600" bgImage="https://cdn.wallpapersafari.com/95/10/Z7FCgJ.png" bgSize={"cover"} bgRepeat="no-repeat" bgPosition={"center"} zIndex="1">
        <Text fontWeight={"bold"} fontSize={35} mt="20px" className={styles.text_log}>Welcome To Blue Apple</Text>
      </Box>
      <Box w={"55%"} minH="600" borderRadius="10px"  className={styles.gyay_teal} >
        <Box mt="20%" w={"80%"} ml="10%">
        <Text fontSize={40} textAlign="left" className={styles.text_login} fontWeight="bold" color={"white"}>Login Here !</Text>
        <Box>
          <Flex alignItems={"center"} gap="2%" pl={5} py={5}>
            <AiOutlineUser size={40} color="#f9ae72"/>
            <Input w={"80%"} borderRadius={20} border="4px solid #f9ae72" textAlign={"center"} fontSize={20} fontWeight="bold"  placeholder='Email / BlueApple ID'/>
          </Flex>
          <Flex alignItems={"center"} gap="2%" pl={5} py={5}>
            <AiFillLock size={40} color="#f9ae72"/>
            <Input w={"80%"} borderRadius={20} border="4px solid #f9ae72" textAlign={"center"} fontSize={20} fontWeight="bold"  placeholder='Password / BlueApple Password'/>
          </Flex>
          <Button bg={"black"} color="teal" w={"40%"} border="2px solid #f9ae72" fontSize={25} fontWeight="bold">Login</Button><br/>
          <Button bg={"black"} color="teal" w={"80%"} border="2px solid #f9ae72" fontSize={25} fontWeight="bold" mt={5}><AiOutlineGoogle size={25} color="#f9ae72"/> Continue with Google</Button>
        </Box>
        
        </Box>

      </Box>
    </Flex>
   </Box>
   </>
  )
}

export default Login