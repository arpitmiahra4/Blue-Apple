import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import React from "react";

import styles from "../../Styles/Ipad.module.css";

const Grid2Ipad = () => {
  return (
    <>
      <Text
        mt={"110px"}
        mb={"70px"}
        textAlign={"center"}
        fontWeight="700"
        fontSize={45}
      >
        iPad essentials
      </Text>
      <SimpleGrid className={styles.ipad_b3Grid}>
        {/* Apple Pencil box */}
        <Box
          //   border={"1px solid teal"}
          pt={"60px"}
          pb={"0px"}
          backgroundColor={"white"}
        >
          <Box pt={10}>
            <Text color={"black"} fontSize={35} fontWeight="bold" mb={"10px"}>
              Apple Pencil
            </Text>
            <Text color={"black"} fontSize={20} fontWeight="400">
              Dream it up. Jot it down.
            </Text>

            <Flex justifyContent={"center"} gap="2%" mt={"10px"}>
              <Text
                color={"#175590"}
                fontWeight="bold"
                fontSize={20}
                _hover={{ textDecoration: "underline" }}
              >
                Shop &gt;
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
              className={styles.ipad_iApplePencil}
              //   border={"1px solid red"}
              mt={"20px"}
            ></Box>
          </Box>
        </Box>

        {/* Keynboards for iPad box */}
        <Box
          //   border={"1px solid teal"}
          pt={"0px"}
          pb={"6s0px"}
          backgroundColor={"white"}
        >
          <Box
            className={styles.ipad_iKeyboards}
            //   border={"1px solid red"}
            mt={"0px"}
          ></Box>
          <Box pt={5}>
            <Text color={"black"} fontSize={35} fontWeight="bold">
              {" "}
              Keyboards for iPad
            </Text>

            <Text color={"black"} fontSize={20} fontWeight="400" mt={"10px"}>
              Keyboards that have you covered.
            </Text>

            <Flex justifyContent={"center"} gap="2%" mt={"10px"}>
              <Text
                color={"#175590"}
                fontWeight="bold"
                fontSize={20}
                _hover={{ textDecoration: "underline" }}
              >
                Shop &gt;
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
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Grid2Ipad;
