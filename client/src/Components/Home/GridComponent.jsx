import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillApple } from 'react-icons/ai'
import styles from "../../Styles/Home.module.css"
const GridComponent = () => {
  return (
    <>
    <SimpleGrid className={styles.arpit_bgrid}>
        <Box className={styles.arpit_gone}>
             <Box pt={10}>
      <Flex alignItems={"center"} justifyContent="center">
      <AiFillApple color='black' fontSize={45}/>
        <Text color={"black"} fontSize={40} fontWeight="bold">  Watch</Text>
      </Flex>
      <Text color={"orange"} fontSize={22} fontWeight="normal" mt={"-3"}>ULTRA</Text>
        <Text color={"black"} fontSize={25} fontWeight="normal">Adventure awaits.</Text>
        <Flex justifyContent={"center"} gap="1%">
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Buy &gt;</Text>
        </Flex>
      </Box>
        </Box>
        <Box className={styles.arpit_gtwo}>
        <Box pt={10}>
        <Text color={"white"} fontSize={40} fontWeight="bold">iPad Pro</Text>
        <Text color={"white"} fontSize={25} fontWeight="normal">Supercharged by #m2</Text>
        <Flex justifyContent={"center"} gap="3%">
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Buy &gt;</Text>
        </Flex>
      </Box>
        </Box>
        <Box className={styles.arpit_gthree}>
        <Box pt={10}>
        <Text color={"black"} fontSize={40} fontWeight="bold">iPad</Text>
        <Text color={"black"} fontSize={25} fontWeight="normal">Lovable. Drawable. Magical.</Text>
        <Flex justifyContent={"center"} gap="3%">
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Buy &gt;</Text>
        </Flex>
      </Box>
        </Box>
        <Box className={styles.arpit_gfour}>
        <Box pt={10}>
        <Text color={"black"} fontSize={40} fontWeight="bold">MackBook Air</Text>
        <Text color={"black"} fontSize={25} fontWeight="normal">Supercharged by #m2</Text>
        <Flex justifyContent={"center"} gap="3%">
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Buy &gt;</Text>
        </Flex>
      </Box>
        </Box>
        <Box className={styles.arpit_gfive}>
        <Box pt={10}>
        <Flex alignItems={"center"} justifyContent="center">
      <AiFillApple color='black' fontSize={45}/>
        <Text color={"black"} fontSize={40} fontWeight="bold">tv 4K</Text>
      </Flex>
        <Text color={"black"} fontSize={22} fontWeight="normal">The Apple experience.<br/>Cinematic in every sense</Text>
        <Flex justifyContent={"center"} gap="3%">
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Buy &gt;</Text>
        </Flex>
      </Box>
        </Box>
        <Box className={styles.arpit_gsix}>
        <Box pt={10}>
        <Flex alignItems={"center"} justifyContent="center">
      <AiFillApple color='white' fontSize={45}/>
        <Text color={"white"} fontSize={40} fontWeight="bold">Arcade</Text>
      </Flex>
        <Text color={"black"} fontSize={25} fontWeight="normal">Episode XOXO</Text>
        <Box mt={"40%"}>
        <Text fontSize={20} fontWeight="bold" color={"white"}>It's your<br/>What will you choose?</Text>
        <Flex justifyContent={"center"} gap="3%">
          <Text color={"white"}  fontSize={22} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
          <Text color={"white"}  fontSize={22} _hover={{textDecoration:"underline"}}>Try it free &#8599;</Text>
        </Flex>
        </Box>
      </Box>
        </Box>
    </SimpleGrid>
    </>
  )
}

export default GridComponent