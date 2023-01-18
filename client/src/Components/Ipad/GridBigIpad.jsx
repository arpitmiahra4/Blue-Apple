import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { AiFillApple } from "react-icons/ai";
import styles from "../../Styles/Ipad.module.css";

const GridBigIpad = () => {
  return (
    <>
      <SimpleGrid className={styles.ipad_bigGrid}>
        {/* iTV+ box */}

        <Box
          // border={"1px solid teal"}
          pt={"10px"}
          pb={"40px"}
          backgroundColor={"black"}
        >
          <Box pt={5}>
            <Flex alignItems={"center"} justifyContent="center" mb={"10px"}>
              <AiFillApple color="white" fontSize={45} />
              <Text color={"white"} fontSize={35} fontWeight="bold">
                tv+
              </Text>
            </Flex>
            <Text color={"white"} fontSize={21} fontWeight="400">
            Get 3 months of Apple TV+ free
            </Text>
            <Text color={"white"} fontSize={21} fontWeight="400" mt={"-1.5"}>
            when you buy an iPad.
            </Text>

            <Flex justifyContent={"center"} gap="2%" mt={"10px"}>
              <Text
                color={"#175590"}
                fontWeight="bold"
                fontSize={20}
                _hover={{ textDecoration: "underline" }}
              >
                Try it free &#8599;
              </Text>
              <Text
                color={"#175590"}
                fontWeight="bold"
                fontSize={20}
                _hover={{ textDecoration: "underline" }}
              >
                Learn more &gt;
              </Text>
            </Flex>

            {/* NOTE : SCROOL TO BE ADDED BY CHANGING PHOTO */}
            <Box
              className={styles.ipad_iFitness}
              // border={"1px solid red"}
              mt={"20px"}
            ></Box>
          </Box>
        </Box>
        

        {/* iMusic box */}
        <Box
          // border={"1px solid teal"}
          pt={"10px"}
          pb={"40px"}
          backgroundColor={"#dadad8"}
        >
          <Box pt={5}>
            <Flex alignItems={"center"} justifyContent="center" mb={"10px"}>
              <AiFillApple color="black" fontSize={45} />
              <Text color={"black"} fontSize={35} fontWeight="bold">
                Music
              </Text>
            </Flex>
            <Text color={"black"} fontSize={21} fontWeight="400">
            Over 100 million songs.
            </Text>
            <Text color={"black"} fontSize={21} fontWeight="400" mt={"-1.5"}>
            Start listening for free today.
            </Text>

            <Flex justifyContent={"center"} gap="2%" mt={"10px"}>
              <Text
                color={"#175590"}
                fontWeight="bold"
                fontSize={20}
                _hover={{ textDecoration: "underline" }}
              >
                Try it free &#8599;
              </Text>
              <Text
                color={"#175590"}
                fontWeight="bold"
                fontSize={20}
                _hover={{ textDecoration: "underline" }}
              >
                Learn more &gt;
              </Text>
            </Flex>
            <Box
              className={styles.ipad_iArcade}
              // border={"1px solid red"}
              mt={"20px"}
            ></Box>
          </Box>
        </Box>





        {/* iFitness+ box */}
        <Box
          // border={"1px solid teal"}
          pt={"10px"}
          pb={"40px"}
          backgroundColor={"white"}
        >
          <Box pt={5}>
            <Flex alignItems={"center"} justifyContent="center" mb={"10px"}>
              <AiFillApple color="black" fontSize={45} />
              <Text color={"black"} fontSize={35} fontWeight="bold">
                {" "}
                Fitness+
              </Text>
            </Flex>
            <Text color={"black"} fontSize={21} fontWeight="400">
            Get 3 months free
            </Text>
            <Text color={"black"} fontSize={21} fontWeight="400" mt={"-1.5"}>
            when you buy an iPad.7


            </Text>

            <Flex justifyContent={"center"} gap="2%" mt={"10px"}>
              <Text
                color={"#175590"}
                fontWeight="bold"
                fontSize={20}
                _hover={{ textDecoration: "underline" }}
              >
                Learn more &gt;
              </Text>
              <Text
                color={"#175590"}
                fontWeight="bold"
                fontSize={20}
                _hover={{ textDecoration: "underline" }}
              >
                Shop Ipad &gt;
              </Text>
            </Flex>
            <Box
              className={styles.ipad_iFitness}
              // border={"1px solid red"}
              mt={"20px"}
            ></Box>
          </Box>
        </Box>
        

        {/* iArcade box */}
        <Box
          // border={"1px solid teal"}
          pt={"10px"}
          pb={"40px"}
          backgroundColor={"white"}
        >
          <Box pt={5}>
            <Flex alignItems={"center"} justifyContent="center" mb={"10px"}>
              <AiFillApple color="black" fontSize={45} />
              <Text color={"black"} fontSize={35} fontWeight="bold">
                {" "}
                Arcade
              </Text>
            </Flex>
            <Text color={"black"} fontSize={21} fontWeight="400">
            Get 3 months of Apple Arcade free
            </Text>
            <Text color={"black"} fontSize={21} fontWeight="400" mt={"-1.5"}>
            when you buy an iPad.
            </Text>

            <Flex justifyContent={"center"} gap="2%" mt={"10px"}>
              <Text
                color={"#175590"}
                fontWeight="bold"
                fontSize={20}
                _hover={{ textDecoration: "underline" }}
              >
                Try it free &#8599;
              </Text>
              <Text
                color={"#175590"}
                fontWeight="bold"
                fontSize={20}
                _hover={{ textDecoration: "underline" }}
              >
                Learn more &gt;
              </Text>
            </Flex>
            <Box
              className={styles.ipad_iArcade}
              // border={"1px solid red"}
              mt={"20px"}
            ></Box>
          </Box>
        </Box>

         {/* iNews+ box */}
         <Box
          // border={"1px solid teal"}
          pt={"10px"}
          pb={"0px"}
          backgroundColor={"white"}
        >
          <Box pt={5} className={styles.ipad_iNews}>
            <Flex alignItems={"center"} justifyContent="center" mb={"10px"}>
              <AiFillApple color="black" fontSize={45} />
              <Text color={"black"} fontSize={35} fontWeight="bold">
                {" "}
                News+
              </Text>
            </Flex>
            <Text color={"black"} fontSize={21} fontWeight="400">
            Get 3 months of Apple News+ free
            </Text>
            <Text color={"black"} fontSize={21} fontWeight="400" mt={"-1.5"}>
            when you buy an iPad.9
            </Text>

              <Text
                color={"#175590"}
                fontWeight="bold"
                fontSize={20}
                mt={"10px"}
                _hover={{ textDecoration: "underline" }}
              >
                Learn more &gt;
              </Text>
          
          </Box>
        </Box>

        {/* iGiftCard box */}
        <Box
          // border={"1px solid teal"}
          pt={"10px"}
          pb={"40px"}
          backgroundColor={"#fafafa"}
        >
          <Box pt={5}>
            <Flex alignItems={"center"} justifyContent="center" mb={"10px"}>
              <AiFillApple color="black" fontSize={45} />
              <Text color={"black"} fontSize={35} fontWeight="bold">
                {" "}
                Gift Card
              </Text>
            </Flex>
            <Text color={"black"} fontSize={21} fontWeight="400">
            For everything and everyone.
            </Text>
            <Flex justifyContent={"center"} gap="2%" mt={"10px"} >
              <Text
                color={"#175590"}
                fontWeight="bold"
                fontSize={20}
                _hover={{ textDecoration: "underline" }}
              >
                Learn more &gt;
              </Text>
              <Text
                color={"#175590"}
                fontWeight="bold"
                fontSize={20}
                _hover={{ textDecoration: "underline" }}
              >
                Buy &gt;
              </Text>
            </Flex>
            <Box
              className={styles.ipad_iGiftCard}
              // border={"1px solid red"}
              mt={"50px"}
            ></Box>
          </Box>
        </Box>

         {/* Apple and Education box */}
         <Box
          // border={"1px solid teal"}
          pt={"0px"}
          pb={"0px"}
          backgroundColor={"white"}
        >
          <Box pt={5} className={styles.ipad_iAppleEducation}>
            
              <Text color={"white"} fontSize={40} fontWeight="bold" mt={"20px"} mb={"10px"}>
                {" "}
                Apple and Education
              </Text>
            
            <Text color={"white"} fontSize={21} fontWeight="400">
            Empowering educators and students to
            </Text>
            <Text color={"white"} fontSize={21} fontWeight="400" mt={"-1.5"}>
            move the world forward.
            </Text>

              <Text
                color={"white"}
                fontWeight="bold"
                fontSize={20}
                mt={"10px"}
                _hover={{ textDecoration: "underline" }}
              >
                Learn more &gt;
              </Text>
           
          </Box>
        </Box>

         {/* Apple at Work box */}
         <Box
          // border={"1px solid teal"}
          pt={"0px"}
          pb={"0px"}
          backgroundColor={"white"}
        >
          <Box pt={5} className={styles.ipad_iAppleAtWork}>
            
              <Text color={"white"} fontSize={40} fontWeight="bold" mt={"20px"} mb={"10px"}>
                {" "}
                Apple at Work
              </Text>
  
              <Text
                color={"white"}
                fontWeight="bold"
                fontSize={20}
                mt={"10px"}
                _hover={{ textDecoration: "underline" }}
              >
                Learn more &gt;
              </Text>
           
            
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GridBigIpad;
