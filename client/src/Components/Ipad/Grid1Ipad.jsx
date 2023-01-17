import { Box,  SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

import styles from "../../Styles/Ipad.module.css"

const Grid1Ipad = () => {
  return (
    <>
     <SimpleGrid className={styles.ipad_bgrid}>
      
      
        <Box className={styles.ipad_gthree}>
        <Box pt={10}>
        <Text color={"black"} fontSize={40} fontWeight="bold">iPad</Text>
        <Text color={"black"} fontSize={25} fontWeight="normal">Lovable. Drawable. Magical.</Text>
       
          <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
          
        
      </Box>
        </Box>
        <Box className={styles.ipad_gfour}>
        <Box pt={10}>
        <Text color={"black"} fontSize={40} fontWeight="bold">MackBook Air</Text>
        <Text color={"black"} fontSize={25} fontWeight="normal">Supercharged by #m2</Text>
        <Text color={"#175590"} fontWeight="bold" fontSize={22} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
      </Box>
        </Box>
       
       
    </SimpleGrid>
      
    </>
  )
}

export default Grid1Ipad
