import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import {
  Input,
} from "@chakra-ui/react";
const NewProduct = () => {
  return (
    <Box w={"100%"} py={"1%"} pl="1%" pr="1%" bg={"white"}>
      <Flex gap={"1%"}>
        <Box
          w={"20%"}
          h="90vh"
          bg={"black"}
          borderRadius={10}
        >
          <Sidebar />
        </Box>
        <Box w={"80%"} h="90vh" borderRadius={10} bg="black">
          <Text
            color={"#f8e68a"}
            fontWeight="bold"
            fontSize={22}
            textDecoration="underline"
          >
            Add New Products In BueApple DataBase
          </Text>
          <Box mt="1%">
          <Flex gap={5} pl={4} pr={4}>
            <Box m="auto" w="40%" h={"82vh"} textAlign="left" pl={5} pr={5} color="#f8e68a" border={"2px solid #f8e68a"} borderRadius={20} fontWeight={"bold"} py={5}>
            <Text fontSize={22} mb={2}>Main Product Image</Text>
            <Input border={"2px solid #f8e68a"} fontSize={25} placeholder="Big Image Url" h={100}/>
            <Box mt={10}>
            <Text fontSize={22} mb={5}>Carousel Product Image</Text>
            <Box display={"grid"} style={{gridTemplateColumns:"repeat(2,190px)"}} gap={5}>
            <Input border={"2px solid #f8e68a"} fontSize={22} h={20} placeholder="Image Url"/>
            <Input border={"2px solid #f8e68a"} fontSize={22} h={20} placeholder="Image Url"/>
            <Input border={"2px solid #f8e68a"} fontSize={22} h={20} placeholder="Image Url"/>
            <Input border={"2px solid #f8e68a"} fontSize={22} h={20} placeholder="Image Url"/>
            <Input border={"2px solid #f8e68a"} fontSize={22} h={20} placeholder="Image Url"/>
            <Input border={"2px solid #f8e68a"} fontSize={22} h={20} placeholder="Image Url"/>
            </Box>
            </Box>
            </Box>
            <Box border={"2px solid #f8e68a"} borderRadius={20} pl={5} pr={5} m="auto" w="60%" py={5} h={"82vh"} textAlign="left">
              <Text fontSize={22} fontWeight="semibold" mt={5} color="#f8e68a">Product Head</Text>
              <Input fontSize={20} placeholder="Plese Add It's Mandatory" mt={2} h={50}/>
              <Text fontSize={22} fontWeight="semibold" mt={5} color="#f8e68a">Product Title</Text>
              <Input fontSize={20} placeholder="Plese Add It's Mandatory" mt={2} h={50}/>
              <Text fontSize={22} fontWeight="semibold" mt={5} color="#f8e68a">Product Price</Text>
              <Input fontSize={20} placeholder="Plese Add It's Mandatory" mt={2} h={50}/>
              <Text fontSize={22} fontWeight="semibold" mt={5} color="#f8e68a">Product Started Price</Text>
              <Input fontSize={20} placeholder="Plese Add It's Mandatory" mt={2} h={50}/>
              <Flex w={"100%"} justifyContent={"center"} mt={10}>
              <Button  border={"2px solid #f8e68a"} fontSize={22} fontWeight="bold" h={50} color="#f8e68a" _hover={{bg:"gray"}} bg="black">Add Product</Button>
              </Flex>
            </Box>
          </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default NewProduct;
