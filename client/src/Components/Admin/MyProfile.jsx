import { Box, Flex, Image, Icon, chakra } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import {
  BsFillBriefcaseFill,
  BsFillGeoAltFill,
  BsFillEnvelopeFill,
  BsApple,
} from "react-icons/bs";
const MyProfile = () => {
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
        <Box w={"80%"} h="90vh" borderRadius={10}>
          <Flex
            bg="black"
            borderRadius={10}
            _dark={{
              bg: "white",
            }}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              w="sm"
              mx="auto"
              bg="black"
              _dark={{
                bg: "gray.800",
              }}
              shadow="lg"
              rounded="lg"
              overflow="hidden"
            >
              <Image
                w={"full"}
                h={"245px"}
                src="https://avatars.githubusercontent.com/u/106508210?v=4"
                alt="avatar"
              />

              <Flex alignItems="center" px={6} py={3} bg="gray.900">
                <Icon as={BsApple} h={6} w={6} color="white" />

                <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                  BlueApple
                </chakra.h1>
              </Flex>

              <Box py={3}>
                <chakra.h1
                  fontSize="xl"
                  fontWeight="bold"
                  color="white"
                  _dark={{
                    color: "white",
                  }}
                >
                  Arpit Mishra
                </chakra.h1>
                <chakra.p
                  color="white"
                  _dark={{
                    color: "white",
                  }}
                >
                  Full Stack Developer | MERN | ⚛️ReactJS | TailwindCSS❣️
                  ChakraUI ⚡MaterialUI 👨‍💻Now It's Show Time.🔥
                </chakra.p>

                <Flex
                  alignItems="center"
                  mt={4}
                  color="white"
                  _dark={{
                    color: "gray.200",
                  }}
                >
                  <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                    Masai
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color="white"
                  _dark={{
                    color: "gray.200",
                  }}
                >
                  <Icon as={BsFillGeoAltFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                    Indore
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color="white"
                  _dark={{
                    color: "gray.200",
                  }}
                >
                  <Icon as={BsFillEnvelopeFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                    Arpit@BlueApple.com
                  </chakra.h1>
                </Flex>
              </Box>
            </Box>
          </Flex>
          ;
        </Box>
      </Flex>
    </Box>
  );
};

export default MyProfile;
