import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { AiFillApple } from "react-icons/ai";
import styles from "../../Styles/Ipad.module.css";

const GridBigIpad = () => {
  return (
    <>
      <SimpleGrid className={styles.ipad_bigGrid}>
        {/* iFitness+ box */}

        <Box
          border={"1px solid teal"}
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

            <Flex justifyContent={"center"} gap="1%">
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
              border={"1px solid red"}
              mt={"20px"}
            ></Box>
          </Box>
        </Box>
        {/* <Box
          border={"1px solid teal"}
          pt={"10px"}
          pb={"40px"}
          backgroundColor={"white"}
        >
          <Box pt={5}>
            <Text color={"black"} fontSize={35} fontWeight="bold" mb={"10px"}>
              iCloud
            </Text>
            <Text color={"black"} fontSize={21} fontWeight="400">
              The best place for all your
            </Text>
            <Text color={"black"} fontSize={21} fontWeight="400" mt={"-1.5"}>
              photos, files, and more.
            </Text>

            <Text
              mt={"1.5%"}
              color={"#175590"}
              fontWeight="bold"
              fontSize={20}
              _hover={{ textDecoration: "underline" }}
            >
              Learn more &gt;
            </Text>
            <Box
              className={styles.ipad_iCloud}
              border={"1px solid red"}
              mt={"20px"}
            ></Box>
          </Box>
        </Box> */}

        {/* iArcade box */}
        <Box
          border={"1px solid teal"}
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

            <Flex justifyContent={"center"} gap="1%">
              <Text
                color={"#175590"}
                fontWeight="bold"
                fontSize={20}
                _hover={{ textDecoration: "underline" }}
              >
                Try it free &gt;
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
              border={"1px solid red"}
              mt={"20px"}
            ></Box>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GridBigIpad;
