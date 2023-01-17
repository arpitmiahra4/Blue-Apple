import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import MetaData from '../Components/Home/MetaData'
import styles from "../Styles/Home.module.css"
import { AiFillApple } from "react-icons/ai";
import GridComponent from '../Components/Home/GridComponent';
import HomeCarousel from '../Components/Home/HomeCarousel';
// import TopDrawer from '../Components/Home/TopDrawer';
// import allData from '../Components/Home/allData';
const Home = () => {
  return (
    <>
    <MetaData title={"BlueApple (India)"}/>
    {/* <Box>
      <TopDrawer data={allData.topDrawer.data1} />
    </Box> */}
    <Box w={"100%"}>
    <Box w={"100%"} display={"flex"} alignItems="center" fontSize={13} justifyContent={"center"} h={"50px"}>
    Get up to ₹6000 instant savings on orders over ₹41900 with HDFC Bank credit cards.‡ Plus No Cost EMI from most leading banks.‡‡ Shop now &gt;
    </Box>
    {/* first box */}
      <Box w={"100%"}  className={styles.arpit_one}>
      <Box pt={5}>
        <Text color={"white"} fontSize={50} fontWeight="bold">iPhone 14 Pro</Text>
        <Text color={"white"} fontSize={28} fontWeight="bold">Pro. Beyond</Text>
        <Box border={"1px solid white"} w={60} borderRadius={10} color="gray" m={"auto"}  mt={"1%"}>With Superfast 5G*</Box>
        <Flex justifyContent={"center"} gap="5%" mt={"1%"}>
          <Text color={"#175590"} fontWeight="bold" fontSize={25} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
          <Text color={"#175590"} fontWeight="bold" fontSize={25} _hover={{textDecoration:"underline"}}>Buy &gt;</Text>
        </Flex>
      </Box>
      </Box>
      {/* second box */}
      <Box w={"100%"}  className={styles.arpit_two}>
      <Box pt={5}>
        <Text color={"black"} fontSize={50} fontWeight="bold">iPhone 14</Text>
        <Text color={"black"} fontSize={28} fontWeight="normal">Big and bigger</Text>
        <Box border={"1px solid gray"} w={60} borderRadius={10} color="gray" m={"auto"}  mt={"1%"}>With Superfast 5G*</Box>
        <Flex justifyContent={"center"} gap="5%" mt={"1%"}>
          <Text color={"#175590"} fontWeight="bold" fontSize={25} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
          <Text color={"#175590"} fontWeight="bold" fontSize={25} _hover={{textDecoration:"underline"}}>Buy &gt;</Text>
        </Flex>
      </Box>
      </Box>
      {/* third box */}
      <Box w={"100%"}  className={styles.arpit_third} mt="1%">
      <Box pt={5}>
      <Flex alignItems={"center"} justifyContent="center">
      <AiFillApple color='white' fontSize={50}/>
        <Text color={"white"} fontSize={50} fontWeight="bold">  Watch</Text>
      </Flex>
      <Text color={"red"} fontSize={25} fontWeight="normal" mt={"-3"}>SERIES 8</Text>
        <Text color={"white"} fontSize={28} fontWeight="normal">A healthy leap ahead</Text>
        <Flex justifyContent={"center"} gap="1%">
          <Text color={"#175590"} fontWeight="bold" fontSize={25} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
          <Text color={"#175590"} fontWeight="bold" fontSize={25} _hover={{textDecoration:"underline"}}>Buy &gt;</Text>
        </Flex>
      </Box>
      </Box>
      {/* Grid started */}
    <GridComponent />
    <Box>
      <HomeCarousel />
    </Box>
    </Box>
    </>
  )
}

export default Home