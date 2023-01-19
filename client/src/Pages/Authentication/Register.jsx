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
import React, { useState } from "react";
import axios from "axios";
import MetaData from "../../Components/Home/MetaData";
import { Progress } from '@chakra-ui/react'
const Register = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [country, setCountry] = useState("india");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [phoneCountry, setPhoneCountry] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loader, setLoader]=useState(false);

let userData = {
  first_name,
  last_name,
  country,
  dob,
  email,
  password,
  confirm_password,
  phoneCountry,
  phoneNumber
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
setLoader(true)
    try {
      await axios.post("https://mock-server-686g.onrender.com/blueRegister", userData);
      setLoader(false)
    } catch (err) {
      console.error(err);
      setLoader(false)
    }
  };

if(loader===true){
    return <Progress size='xs' isIndeterminate />
}
  return (
    <>
    {/* if(loader===true){
    return <Progress size='xs' isIndeterminate />
} */}

{loader === true ? <Progress size='xs' isIndeterminate /> : console.log("loader false")}
      <MetaData title={"Create Your BlueApple ID - BlueApple(IN)"} />
      <Box w={"100%"} borderBottom="1px solid gray">
        <Flex justifyContent={"space-evenly"} gap={10} alignItems="center">
          <Box>
            <Text fontSize={25} fontWeight="500">
              BlueApple ID
            </Text>
          </Box>
          <Flex gap={5}>
            <Text _hover={{ color: "#177dce" }} fontSize={14} color="gray.500">
              Sign In
            </Text>
            <Text _hover={{ color: "#177dce" }} fontSize={14} color="gray.500">
              Create Your Apple ID
            </Text>
            <Text _hover={{ color: "#177dce" }} fontSize={14} color="gray.500">
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
                onChange={(e)=>setFirst_name(e.target.value)}
              />
              <Input
                placeholder="last name"
                border={"1px solid gray"}
                w={"30%"}
                h={50}
                fontSize="22px"
                onChange={(e)=>setLast_name(e.target.value)}
              />
            </Flex>
            <Box mt={5}>
              <Text>COUNTRY / REGION</Text>
              <Stack spacing={3} m="auto" mb={2}>
                <Select
                  m="auto"
                  w={"65%"}
                  h={50}
                  fontSize="20px"
                  onChange={(e)=>setCountry(e.target.value)}
                >
                  <option value="india">India</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="china">China</option>
                </Select>
              </Stack>
              <Input
                placeholder="date of birth"
                border={"1px solid gray"}
                w={"65%"}
                h={50}
                fontSize="22px"
                onChange={(e)=>setDob(e.target.value)}
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
                type="email"
                fontSize="22px"
                onChange={(e)=>setEmail(e.target.value)}
              />
              <Text ml={"-35%"} color="gray">
                This will be your new Apple ID.
              </Text>
              <Input
                placeholder="password"
                type="password"
                border={"1px solid gray"}
                w={"65%"}
                mt="1%"
                h={50}
                fontSize="22px"
                onChange={(e)=>setPassword(e.target.value)}
              />
              <Input
                placeholder="confirm password"
                type="password"
                border={"1px solid gray"}
                w={"65%"}
                mt="1%"
                h={50}
                fontSize="22px"
                onChange={(e)=>setConfirm_password(e.target.value)}
              />
            </Box>
            <Box w={"100%"} mt={5} mb={5}>
              <Divider />
            </Box>
            <Box>
              <Stack spacing={3} m="auto" mb={2}>
                <Select
                  m="auto"
                  w={"65%"}
                  h={50}
                  fontSize="20px"
                  border={"1px solid gray"}
                  onChange={(e)=>setPhoneCountry(e.target.value)}
                >
                  <option value="+91">+91 India</option>
                  <option value="+86">+86 China</option>
                </Select>
              </Stack>
              <Input
                placeholder="Phone number"
                type="number"
                border={"1px solid gray"}
                w={"65%"}
                mt="1%"
                h={50}
                fontSize="22px"
                onChange={(e)=>setPhoneNumber(e.target.value)}
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
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
      <br />
    </>
  );
};

export default Register;
