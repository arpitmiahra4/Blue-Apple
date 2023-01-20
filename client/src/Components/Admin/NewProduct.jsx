import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Avatar,
  Center,
} from "@chakra-ui/react";
const NewProduct = () => {
  return (
    <Box w={"100%"} py={"1%"} pl="1%" pr="1%" bg={"white"}>
      <Flex gap={"1%"}>
        <Box
          w={"20%"}
          h="90vh"
          border={"2px solid black"}
          bg={"black"}
          borderRadius={10}
        >
          <Sidebar />
        </Box>
        <Box w={"80%"} h="90vh" borderRadius={10} bg="black">
          <Text
            color={"white"}
            fontWeight="bold"
            fontSize={22}
            textDecoration="underline"
          >
            Add New Products In BueApple DataBase
          </Text>
          <Box mt="1%">
            <Flex align={"center"} justify={"center"}>
              <Stack
                spacing={4}
                w={"full"}
                maxW={"md"}
                rounded={"xl"}
                boxShadow={"lg"}
                p={6}
                my={12}
              >
                <FormControl id="userName">
                  <Stack direction={["column", "row"]} spacing={6}>
                    <Center>
                      <Avatar size="md" src=""></Avatar>
                    </Center>
                    <Center w="full">
                      <Button w="50%">Add Product Image</Button>
                    </Center>
                  </Stack>
                </FormControl>
                <FormControl id="ProductName" isRequired>
                  <FormLabel color={"gray"}>Product name</FormLabel>
                  <Input
                    placeholder="Product name"
                    _placeholder={{ color: "gray.500" }}
                    type="text"
                  />
                </FormControl>
                <FormControl id="Discription" isRequired>
                  <FormLabel color={"gray"}>Discription</FormLabel>
                  <Input
                    placeholder="Discription"
                    _placeholder={{ color: "gray.500" }}
                    h={20}
                    type="text"
                  />
                </FormControl>
                <FormControl id="Price" isRequired>
                  <FormLabel color={"gray"}>Price</FormLabel>
                  <Input
                    placeholder="Price"
                    _placeholder={{ color: "gray.500" }}
                    type="number"
                  />
                </FormControl>
                <FormControl id="Category" isRequired>
                  <FormLabel color={"gray"}>Category</FormLabel>
                  <Input
                    placeholder="Category"
                    _placeholder={{ color: "gray.500" }}
                    type="text"
                  />
                </FormControl>
                <Stack spacing={6} direction={["column", "row"]}>
                  <Button
                    bg={"red.400"}
                    color={"white"}
                    w="full"
                    _hover={{
                      bg: "red.500",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    w="full"
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default NewProduct;
