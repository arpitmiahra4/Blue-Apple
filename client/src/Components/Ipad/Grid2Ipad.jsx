import { Box,  SimpleGrid, Text, Flex } from '@chakra-ui/react'
import React from 'react'

import styles from "../../Styles/Ipad.module.css"

const Grid2Ipad = () => {
  return (
    <>
     <SimpleGrid className={styles.ipad_bgrid}>
      
      
        <Box className={styles.ipad_gthree}>
        <Box pt={10}>
        <Text color={"black"} fontSize={40} fontWeight="bold">Apple Pencil</Text>
        <Text color={"black"} fontSize={25} fontWeight="normal">Dream it up. Jot it down.</Text>
       
        <Flex justifyContent={"center"} gap="1%">
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Shop &gt;</Text>
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
        </Flex>
          
        
      </Box>
        </Box>
        <Box className={styles.ipad_gfour}>
        <Box pt={10}>
        <Text color={"black"} fontSize={40} fontWeight="bold">Keyboards for iPad</Text>
        <Text color={"black"} fontSize={25} fontWeight="normal">Keyboards that have you covered.</Text>
        <Flex justifyContent={"center"} gap="1%">
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Shop &gt;</Text>
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
        </Flex>
      </Box>
        </Box>
       
       
    </SimpleGrid>
      
    </>
  )
}

export default Grid2Ipad;
