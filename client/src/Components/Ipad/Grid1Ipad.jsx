import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import styles from "../../Styles/Ipad.module.css";

const Grid1Ipad = () => {
  return (
    <>
      <SimpleGrid className={styles.ipad_bgrid} w={"96%"} ml={"2%"}>

        {/* 3% Daily Cash box */}
        <Box
          // border={"1px solid teal"}
          pt={"10px"}
          pb={"0px"}
          backgroundColor={"white"}
        >
          <Box pt={5}>
            <Text color={"black"} fontSize={40} fontWeight="bold">
              Get 3% Daily Cash
            </Text>
            <Text color={"black"} fontSize={40} fontWeight="bold" mt={"-3"}>
            back with Apple Card.
            </Text>

            <Text color={"black"} fontSize={21} fontWeight="400" mt={"15px"}>
            And pay over time, interest‑free
            </Text>
            <Text color={"black"} fontSize={21} fontWeight="400" mt={"-1"}>
            when you choose to check out with
            </Text>
            <Text color={"black"} fontSize={21} fontWeight="400" mt={"-1"} mb={"15px"}>
              Apple Card Monthly Installments.*
            </Text>

            <Text
              color={"#175590"}
              fontWeight="bold"
              fontSize={20}
              _hover={{ textDecoration: "underline" }}
            >
              Learn more &gt;
            </Text>

            <Box
              className={styles.ipad_gthree}
              // border={"1px solid red"}
              mt={"105px"}
            ></Box>
          </Box>
        </Box>



         {/* 3% Daily Cash box */}
         <Box
          // border={"1px solid teal"}
          pt={"10px"}
          pb={"0px"}
          backgroundColor={"white"}
        >
          <Box pt={5}>
            <Text color={"black"} fontSize={40} fontWeight="bold">
            Trade in your current
            </Text>
            <Text color={"black"} fontSize={40} fontWeight="bold" mt={"-3"}>
            iPad and get credit
            </Text>
            <Text color={"black"} fontSize={40} fontWeight="bold" mt={"-3"}>
            toward a new one.
            </Text>

            <Text color={"black"} fontSize={21} fontWeight="400" mt={"15px"}>
            With Apple Trade In, just give us your
            </Text>
            <Text color={"black"} fontSize={21} fontWeight="400" mt={"-1"}>
            eligible iPad and get credit for a new one.
            </Text>
            <Text color={"black"} fontSize={21} fontWeight="400" mt={"-1"} mb={"15px"}>
            It’s good for you and the planet.**

            </Text>

            <Text
              color={"#175590"}
              fontWeight="bold"
              fontSize={20}
              _hover={{ textDecoration: "underline" }}
            >
              Learn more &gt;
            </Text>

            <Box
              className={styles.ipad_gfour}
              // border={"1px solid red"}
              mt={"50px"}
            ></Box>
          </Box>
        </Box>

       
      </SimpleGrid>
    </>
  );
};

export default Grid1Ipad;
