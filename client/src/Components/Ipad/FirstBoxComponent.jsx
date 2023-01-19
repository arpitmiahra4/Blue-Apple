import { Box, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";

import styles from "../../Styles/Ipad.module.css";

const FirstBoxComponent = () => {
  return (
    <>
      {/* iOne box */}
      <Box
        // border={"1px solid teal"}
        w={"100%"}
        ml={"0"}
        p={"30px 260px 30px 260px"}
        backgroundColor={"white"}
      >
        <Flex justifyContent={"space-evenly"}>
          <Box w={"520px"} h={"731px"}
            className={styles.ipad_iFirstBox}
            // border={"1px solid red"}
            // mt={"20px"}
          ></Box>
          <Box pt={250}
          pl={-500}
        //    border={"1px solid teal"} 
           >
             <Text color={"red"} fontSize={15} fontWeight="bold">
                  New
                </Text>
                <Text color={"black"} fontSize={50} fontWeight="bold">
                  iPad
                </Text>
                <Text color={"black"} fontSize={28} fontWeight="bold">
                  Lovable. Drawable. 
                </Text>
                <Text color={"black"} fontSize={28} fontWeight="bold" mt={-1}>
                  Magical.
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
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default FirstBoxComponent;
