import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'


const StoreComponent = () => {
  return (
    <>
      <Flex w={"100%"} py={5}>
      <Box  transition="0.5s all ease-in-out" _hover={{transform: "scale(1.02)"}}>
        <Image src='https://i.ibb.co/ZHC2dW1/Screenshot-20230117-153954.png' w={"80%"} />
      </Box>
      <Box mr={5} transition="0.5s all ease-in-out" ml={"-120px"} _hover={{transform: "scale(1.02)"}}>
      <Image src='https://i.ibb.co/LnczpFG/Screenshot-20230117-154006.png' w={"80%"} />
      </Box>
      </Flex>
    </>
  )
}

export default StoreComponent