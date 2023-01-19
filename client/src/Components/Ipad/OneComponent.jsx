import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { AiFillApple } from "react-icons/ai";
import styles from "../../Styles/Ipad.module.css";

const OneComponent = () => {
  return (
    <>
      {/* iOne box */}
      <Box
        // border={"1px solid teal"}
        w={"96%"}
        ml={"2%"}
        p={"110px"}
        backgroundColor={"white"}
      >
        <Flex justifyContent={"space-evenly"}>
          <Box w={"542px"} h={"329px"}
            className={styles.ipad_iOne}
            // border={"1px solid red"}
            // mt={"20px"}
          ></Box>
          <Box pt={1}
        //    border={"1px solid teal"} 
           >
            <Flex alignItems={"center"} justifyContent="center" mb={"10px"}>
              <AiFillApple color="black" fontSize={100} />
              <Text color={"black"} fontSize={100} fontWeight="bold">
                {" "}
                One
              </Text>
            </Flex>
            <Text color={"black"} fontSize={25} fontWeight="600">
              Bundle up to six Apple services.
            </Text>
            <Text color={"black"} fontSize={25} fontWeight="600" mt={"-2"}>
              And enjoy more for less.
            </Text>

            <Flex justifyContent={"center"} gap="4%" mt={"20px"}>
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
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default OneComponent;
