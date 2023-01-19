import { Box, Flex, Text,  Stack, Button } from "@chakra-ui/react";
import React from "react";
import MetaData from "../Components/Home/MetaData";
import styles from "../Styles/Ipad.module.css";
import FirstBoxComponent from "../Components/Ipad/FirstBoxComponent";
import FiveGridsComponent from "../Components/Ipad/FiveGridsComponent";
// import Grid1Ipad from "../Components/Ipad/Grid1Ipad";
import ThreeDataComponent from "../Components/Ipad/ThreeDataComponent";
import Grid2Ipad from "../Components/Ipad/Grid2Ipad";
import Grid3Ipad from "../Components/Ipad/Grid3Ipad";
import GridBigIpad from "../Components/Ipad/GridBigIpad";
import OneComponent from "../Components/Ipad/OneComponent";
import WhyIpadComponent from "../Components/Ipad/WhyIpadComponent";
import TopDrawer from "../Components/Home/TopDrawer";
import allData from "../Components/Home/allData";

//import { AiFillApple } from "react-icons/ai";

const Ipad = () => {
  return (
    <>
      <MetaData title={"iPad-Apple (IN)"} />
      <Box>
        <TopDrawer data={allData.topDrawer.ipad} />
      </Box>

      <Box w={"100%"} backgroundColor={"#f5f5f7"}>

        <Box
          w={"100%"}
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          h={"50px"}
          color={"white"}
          backgroundColor={"#cc0001"}
        >
          Find gifts to jumpstart their Lunar New Year. Shop the gift guide &gt;
        </Box>

        {/* first box */}

        <FirstBoxComponent/>
        

        {/* two box */}
        <Box w={"100%"} backgroundColor={"black"}>
          <Box pt={0}>
            <Flex>
              <Stack w={"25%"} alignItems={"center"} marginTop={"250px"} ml={"60px"}>
                <Text color={"red"} fontSize={15} fontWeight="bold" >
                  New
                </Text>
                <Text color={"white"} fontSize={50} fontWeight="bold">
                  iPad Pro
                </Text>
                <Text color={"white"} fontSize={28} fontWeight="bold" mb={"10px"} mt={"10px"}>
                  Supercharged 
                </Text>
                <Text color={"white"} fontSize={20} fontWeight="400" mb={"10px"}>
                From ₹81900.00*
                </Text>
                <Button colorScheme="blue">Buy</Button>

                <Text
                  color={"#175590"}
                  fontWeight="bold"
                  fontSize={15}
                  mb={"10px"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Learn more &gt;
                </Text>
              </Stack>

             
              <Box className = {styles.ipad_iSecondBox}
              width={950}
              height={750}
              // border={"1px solid red"}
              >
                
              </Box>
            </Flex>
          </Box>
        </Box>
        <FiveGridsComponent/>

        {/* <Grid1Ipad /> */}

        <ThreeDataComponent/>
        
        <Grid2Ipad/>

        {/* accessories box */}
        <Box w={"96%"} 
        // border={"1px solid teal"}
        backgroundColor={"white"}
        mt={"30px"}
         ml={"2%"}>
          <Box pt={10}>
            <Text color={"black"} fontSize={35} fontWeight="bold">
              Accessories
            </Text>
            <Text color={"black"} fontSize={20} fontWeight="400" mt={"10px"}>
              Explore cases, covers, keyboards,
            </Text>
            <Text color={"black"} fontSize={20} fontWeight="400" mt={-1}>
              Apple Pencil, AirPods, and more.
            </Text>

            <Text
              mt={"2%"}
              color={"#175590"}
              fontWeight="bold"
              fontSize={20}
              _hover={{ textDecoration: "underline" }}
            >
              Shop iPad accessories &gt;
            </Text>
            <Box className={styles.ipad_acc} 
            // border={"1px solid red"}
            ></Box>
          </Box>
        </Box>

        

        <Text
          mt={"110px"}
          mb={"70px"}
          textAlign={"center"}
          fontWeight="700"
          fontSize={45}
        >
          What makes an iPad an iPad?
        </Text>

        <WhyIpadComponent/>

        {/* ipad OS16 box */}
        <Box
          w={"96%"}
          //  border={"1px solid teal"}
          ml={"2%"}
          mt={"30px"}
          mb={"30px"}
          backgroundColor={"white"}
        >
          <Box pt={5}>
            <Text color={"black"} fontSize={40} fontWeight="bold">
              iPadOS 16
            </Text>
            <Text color={"black"} fontSize={21} fontWeight="400">
              Incredibly capable. Unmistakably iPad.
            </Text>

            <Text
              mt={"1%"}
              color={"#175590"}
              fontWeight="bold"
              fontSize={20}
              _hover={{ textDecoration: "underline" }}
            >
              Learn more &gt;
            </Text>
            <Box
              className={styles.ipad_os16}
              //  border={"1px solid red"}
            ></Box>
          </Box>
        </Box>

        <Grid3Ipad />
        <Text
          mt={"110px"}
          mb={"70px"}
          textAlign={"center"}
          fontWeight="700"
          fontSize={45}
        >
          Get more out of your iPad
        </Text>
        <OneComponent />
        <GridBigIpad />
      </Box>
    </>
  );
};

export default Ipad;
