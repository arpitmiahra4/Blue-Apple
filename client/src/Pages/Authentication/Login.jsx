import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import styles from "../../Styles/Store.module.css";
import { AiFillLock, AiOutlineUser } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataemail, setDataemail] = useState("");
  const [datapass, setPass] = useState("");

  const toast = useToast();

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://mock-server-686g.onrender.com/blueRegister"
      );
      console.log(res.data);
      res.data.forEach((el) => {
        setDataemail(el.email);
        setPass(el.password);
      });
    } catch (err) {
      console.error(err.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleLogin = () => {
    if (email === dataemail && password === datapass) {
      toast({
        title: "Login Successfull",
        description: "User found in our database",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      window.location.replace("/");
    } else if (email === "admin@blueapple.com" && password === "arpit@123") {
      toast({
        title: "Login as an admin",
        description: "valid admin ",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      window.location.replace("/");
    } else {
      toast({
        title: "Invalid User!",
        description: "User not found in our database",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Box className={styles.log_main} py={5}>
        <Text fontWeight={"bold"} fontSize={40} className={styles.text_log}>
          Welcome To Blue Apple
        </Text>
        <Flex borderRadius="10px" w="70%" m={"auto"}>
          <Box
            w={"50%"}
            minH="600"
            bgImage="https://i.ibb.co/yn0VsY4/apple-app-logo.png"
            bgRepeat="no-repeat"
            bgPosition={"center"}
            zIndex="1"
          ></Box>
          <Box
            w={"55%"}
            minH="600"
            borderRadius="10px"
            className={styles.gyay_teal}
          >
            <Box mt="20%" w={"80%"} ml="10%">
              <Text
                fontSize={40}
                textAlign="left"
                className={styles.text_login}
                fontWeight="bold"
                color={"black"}
              >
                Login Here !
              </Text>
              <Box>
                <Flex alignItems={"center"} gap="2%" pl={5} py={5}>
                  <AiOutlineUser size={40} color="black" />
                  <Input
                    w={"80%"}
                    borderRadius={20}
                    border="2px solid black"
                    textAlign={"center"}
                    fontSize={18}
                    fontWeight="400"
                    type="email"
                    placeholder="Email / BlueApple ID"
                    color={"black"}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Flex>
                <Flex alignItems={"center"} gap="2%" pl={5} py={5}>
                  <AiFillLock size={40} color="black" />
                  <Input
                    w={"80%"}
                    borderRadius={20}
                    border="2px solid black"
                    textAlign={"center"}
                    fontSize={18}
                    fontWeight="400"
                    type="password"
                    placeholder="Password / BlueApple Password"
                    color={"black"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Flex>
                <Button
                  bg={"#313132"}
                  color="white"
                  _hover={{
                    color: "teal",
                    bg: "#313132",
                    border: "2px solid #7ac6eb",
                  }}
                  w={"40%"}
                  h="50px"
                  border="2px solid Black"
                  fontSize={25}
                  fontWeight="semibold"
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <br />
                <Flex alignItems={"center"} mt="1%" gap={2}>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
                    w={"60px"}
                    h="40px"
                  />
                  <Button
                    bg={"#313132"}
                    color="White"
                    _hover={{
                      color: "teal",
                      bg: "#313132",
                      border: "2px solid #7ac6eb",
                    }}
                    w={"80%"}
                    h="50px"
                    border="2px solid Black"
                    fontSize={25}
                    fontWeight="semibold"
                  >
                    continue with Google
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Login;
