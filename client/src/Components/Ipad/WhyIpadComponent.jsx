import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";

import styles from "../../Styles/Ipad.module.css";

const WhyIpadComponent = () => {
  return (
    <>
      <Box
        // border={"1px solid teal"}
        w={"96%"}
        ml={"2%"}
        pt={"30px"}
        pl={"240px"}
        pr={"20px"}
        backgroundColor={"white"}
      >
        <Flex justifyContent={"space-between"}>
          <Box
            pt={1}
            //    border={"1px solid teal"}
          >
            <Text color={"black"} fontSize={40} fontWeight="bold" mt={"100px"}>
              Why iPad
            </Text>

            <Text color={"black"} fontSize={21} fontWeight="400" mt={"10px"}>
              Yes, it does that.
            </Text>
            <Text color={"black"} fontSize={21} fontWeight="400" mt={"-2"}>
              And then some.
            </Text>

            <Text
              color={"#175590"}
              fontWeight="bold"
              fontSize={20}
              mt={"20px"}
              _hover={{ textDecoration: "underline" }}
            >
              {" "}
              Learn more &gt;
            </Text>
          </Box>
          <Box
            w={"692px"}
            h={"468px"}
            className={styles.ipad_WhyIpad}
            // border={"1px solid red"}
            // mt={"20px"}
          ></Box>
        </Flex>
      </Box>
    </>
  );
};

export default WhyIpadComponent;
