import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import MetaData from "../../Components/Home/MetaData";

const Register = () => {
  return (
    <>
      <MetaData title={"Create Your BlueApple ID - BlueApple(IN)"} />
      <Box w={"100%"} borderBottom="1px solid gray">
        <Flex justifyContent={"space-evenly"} gap={10} alignItems="center">
          <Box>
            <Text fontSize={25} fontWeight="500">
              BlueApple ID
            </Text>
          </Box>
          <Flex gap={5}>
            <Text _hover={{color:"#177dce"}} fontSize={14} color="gray.500">
              Sign In
            </Text>
            <Text _hover={{color:"#177dce"}} fontSize={14} color="gray.500">
              Create Your Apple ID
            </Text>
            <Text _hover={{color:"#177dce"}} fontSize={14} color="gray.500">
              FAQ
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box w={"100%"}>
        <Box w="50%" m={"auto"}>
          <Text fontSize={30} fontWeight="bold">
            Create Your Apple ID
          </Text>
          <Text fontSize={16} fontWeight="500">
            One Apple ID is all you need to access all Apple services.
          </Text>
          <Flex alignItems={"center"} justifyContent="center" mt={"-5px"}>
            <Text fontSize={16} fontWeight="500">
              You already have an Apple ID?
            </Text>
            <Box
              fontSize={16}
              fontWeight="500"
              h="25px"
              color={"#177dce"}
              ml="5px"
            >
              {" "}
              Find it here &gt;
            </Box>
          </Flex>
          <Box mt={5}>
            <Flex justifyContent={"center"} alignItems="center" gap={5}>
              <Input
                placeholder="first name"
                border={"1px solid gray"}
                w={"30%"}
                h={50}
                fontSize="22px"
              />
              <Input
                placeholder="last name"
                border={"1px solid gray"}
                w={"30%"}
                h={50}
                fontSize="22px"
              />
            </Flex>
            <Box mt={5}>
              <Text>COUNTRY / REGION</Text>
              <Stack spacing={3} m="auto" mb={2}>
                <Select
                  placeholder="India"
                  m="auto"
                  w={"65%"}
                  h={50}
                  fontSize="20px"
                >
                  <option value="option1">Pakistan</option>
                  <option value="option2">China</option>
                  <option value="option3">indore</option>
                </Select>
              </Stack>
              <Input
                placeholder="date of birth"
                border={"1px solid gray"}
                w={"65%"}
                h={50}
                fontSize="22px"
              />
              <br />
            </Box>
            <Box w={"100%"} mt={5} mb={5}>
              <Divider />
            </Box>
            <Box m={"auto"}>
              <Input
                placeholder="name@example.com"
                border={"1px solid gray"}
                w={"65%"}
                h={50}
                fontSize="22px"
              />
              <Text ml={"-35%"} color="gray">
                This will be your new Apple ID.
              </Text>
              <Input
                placeholder="password"
                border={"1px solid gray"}
                w={"65%"}
                mt="1%"
                h={50}
                fontSize="22px"
              />
              <Input
                placeholder="confirm password"
                border={"1px solid gray"}
                w={"65%"}
                mt="1%"
                h={50}
                fontSize="22px"
              />
            </Box>
            <Box w={"100%"} mt={5} mb={5}>
              <Divider />
            </Box>
            <Box>
              <Stack spacing={3} m="auto" mb={2}>
                <Select
                  placeholder="+91 (India)"
                  m="auto"
                  w={"65%"}
                  h={50}
                  fontSize="20px"
                  border={"1px solid gray"}
                >
                  <option value="91">+91 (India)</option>
                  <option value="option2">China</option>
                  <option value="option3">indore</option>
                </Select>
              </Stack>
              <Input
                placeholder="Phone number"
                border={"1px solid gray"}
                w={"65%"}
                mt="1%"
                h={50}
                fontSize="22px"
              />
            </Box>
            <Box m={"auto"} mt="2%">
              <Text ml="18%" textAlign={"left"}>
                Make sure you enter a phone number you can always access. It
                <br />
                will be used to verify your identity any time you sign in on a
                new
                <br />
                device or web browser. Messaging or data rates may apply.
              </Text>
              <Flex justifyContent={"center"} gap={8} ml="-10" mt={5}>
                <Text fontSize={20}>Verify with a:</Text>
                <Stack spacing={5} direction="row">
                  <Checkbox colorScheme="blue" defaultChecked>
                    Text message
                  </Checkbox>
                  <Checkbox colorScheme="blue">Phone call</Checkbox>
                </Stack>
              </Flex>
            </Box>
            <Button
              mt={10}
              colorScheme={"blue"}
              w="30%"
              h={50}
              fontWeight={"bold"}
              color={"black"}
              fontSize={30}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Register;
