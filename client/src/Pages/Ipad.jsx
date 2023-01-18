import { Box, Flex, Text, Image, Stack, Button } from "@chakra-ui/react";
import React from "react";
import MetaData from "../Components/Home/MetaData";
import styles from "../Styles/Ipad.module.css";
import Grid1Ipad from "../Components/Ipad/Grid1Ipad";
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
      <MetaData title={"iPad-Apple"} />
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
        <Box w={"100%"} className={styles.ipad_one} border={"1px solid red"}>
          <Box pt={5} border={"1px solid pink"}>
            <Flex margin={"auto"}>
              <Image
                src="https://www.apple.com/v/ipad-10.9/b/images/overview/hero/hero__ecv967jz1y82_large.jpg"
                alt="image"
                height={"600px"}
              />
              <Stack
                w={"25%"}
                alignItems={"center"}
                border={"1px solid teal"}
                marginTop={"100px"}
              >
                <Text color={"red"} fontSize={15} fontWeight="bold">
                  New
                </Text>
                <Text color={"black"} fontSize={50} fontWeight="bold">
                  iPad
                </Text>
                <Text color={"black"} fontSize={28} fontWeight="bold">
                  Lovable. Drawable. Magical.
                </Text>
                <Text color={"black"} fontSize={20} fontWeight="400">
                  From $499
                </Text>
                <Button colorScheme="blue">Buy</Button>

                <Text
                  color={"#175590"}
                  fontWeight="bold"
                  fontSize={15}
                  _hover={{ textDecoration: "underline" }}
                >
                  Learn more &gt;
                </Text>
              </Stack>
            </Flex>
          </Box>
        </Box>

        {/* two box */}
        <Box w={"100%"}>
          <Box pt={5}>
            <Flex>
              <Stack w={"25%"} alignItems={"center"}>
                <Text color={"red"} fontSize={15} fontWeight="bold">
                  New
                </Text>
                <Text color={"black"} fontSize={50} fontWeight="bold">
                  iPad Pro
                </Text>
                <Text color={"black"} fontSize={28} fontWeight="bold">
                  Supercharged
                </Text>
                <Text color={"black"} fontSize={20} fontWeight="400">
                  From $499
                </Text>
                <Button colorScheme="blue">Buy</Button>

                <Text
                  color={"#175590"}
                  fontWeight="bold"
                  fontSize={15}
                  _hover={{ textDecoration: "underline" }}
                >
                  Learn more &gt;
                </Text>
              </Stack>

              <Image
                src="https://www.apple.com/v/ipad/home/cd/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_large.jpg"
                alt="image"
                height={"600px"}
              />
            </Flex>
          </Box>
        </Box>

        <Grid1Ipad />
        
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
