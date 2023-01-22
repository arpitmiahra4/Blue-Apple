import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { AiFillApple } from "react-icons/ai";
import styles from "../../Styles/Ipad.module.css";

const Grid3Ipad = () => {
  return (
    <>
      <SimpleGrid className={styles.ipad_b3Grid}>
        {/* iCloud box */}
        <Box
          //   border={"1px solid teal"}
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
              //   border={"1px solid red"}
              mt={"20px"}
            ></Box>
          </Box>
        </Box>

        {/* iPay box */}
        <Box
          //   border={"1px solid teal"}
          pt={"10px"}
          pb={"40px"}
          backgroundColor={"white"}
        >
          <Box pt={5}>
            <Flex alignItems={"center"} justifyContent="center" mb={"10px"}>
              <AiFillApple color="black" fontSize={45} />
              <Text color={"black"} fontSize={35} fontWeight="bold">
                {" "}
                Pay
              </Text>
            </Flex>
            <Text color={"black"} fontSize={21} fontWeight="400">
              The safer way to make secure,
            </Text>
            <Text color={"black"} fontSize={21} fontWeight="400" mt={"-1.5"}>
              contactless purchases in stores and online.
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
              className={styles.ipad_iPay}
              //   border={"1px solid red"}
              mt={"20px"}
            ></Box>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Grid3Ipad;
