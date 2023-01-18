import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import MetaData from '../../Components/Home/MetaData'

const Register = () => {
  return (
    <>
    <MetaData title={"Create Your BlueApple ID - BlueApple(IN)"}/>
    <Box w={"100%"} borderBottom="2px solid gray">
    <Flex>
    <Box>
        <Text>BlueApple ID</Text>
    </Box>
    <Box>
        <Text>Si</Text>
        <Text></Text>
        <Text></Text>
    </Box>
    </Flex>    
    </Box>
    </>
  )
}

export default Register