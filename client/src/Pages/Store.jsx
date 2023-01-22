import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import MetaData from "../Components/Home/MetaData";
import StoreCarouselfive from "../Components/Store/StoreCarouselfive";
import StoreCarouselfour from "../Components/Store/StoreCarouselfour";
import StoreCarouselone from "../Components/Store/StoreCarouselone";
import StoreCarouselsix from "../Components/Store/StoreCarouselsix";
import StoreCarouselthree from "../Components/Store/StoreCarouselthree";
import StoreCarouseltwo from "../Components/Store/StoreCarouseltwo";
import StoreComponent from "../Components/Store/StoreComponent";

const Store = () => {
  return (
    <>
      <MetaData title={"BlueApple Store Online - Apple (IN)"} />
      <Box w={"100%"} bg="#f5f5f7">
        <Box
          w={"100%"}
          display={"flex"}
          bg="white"
          fontSize={13}
          alignItems="center"
          justifyContent={"center"}
          h={"50px"}
        >
          Get up to ₹6000 instant savings on orders over ₹41900 with HDFC Bank
          credit cards.Footnote§§ Plus No Cost EMI from most leading
          banks.Footnote§ Learn more &gt;
        </Box>
        <Box w={"80%"} ml={"20%"} py={10}>
          <Flex justifyContent="flex-start" alignItems={"center"} gap="15%">
            <Box w={"50%"}>
              <Flex>
                <Text color={"black"} fontWeight="bold" fontSize={40}>
                  Store.
                </Text>
                <Text color={"gray"} fontWeight="bold" fontSize={40}>
                  The best way to buy the
                </Text>
              </Flex>
              <Text
                textAlign={"left"}
                color={"gray"}
                mt="-4%"
                fontWeight="bold"
                fontSize={40}
              >
                products you love.
              </Text>
            </Box>
            <Box>
              <Flex>
                <Avatar
                  name="arpit"
                  src="https://avatars.githubusercontent.com/u/106508210?v=4"
                />
                <Box>
                  <Text textAlign="left">Need shopping help?</Text>
                  <Text color={"blue"} textAlign="left">
                    Ask a Specialist
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
          {/* First cARAOUSEL */}
          <Box>
            <StoreCarouselone />
          </Box>
          {/* second cARAOUSEL */}
          <Box mt={"5%"}>
            <Flex>
              <Text color={"black"} fontWeight="bold" fontSize={27}>
                The latest.
              </Text>
              <Text color={"gray"} fontWeight="bold" fontSize={27}>
                Take a look at what’s new right now.
              </Text>
            </Flex>
            <StoreCarouseltwo />
          </Box>
          {/* boxx */}
          <Box mt={"5%"}>
            <Flex>
              <Text color={"black"} fontWeight="bold" fontSize={27}>
                Help is here.
              </Text>
              <Text color={"gray"} fontWeight="bold" fontSize={27}>
                Whenever and however you need it.
              </Text>
            </Flex>
            <StoreComponent />
          </Box>

          {/* small box carousel */}
          <Box mt={"5%"}>
            <Flex>
              <Text color={"black"} fontWeight="bold" fontSize={27}>
                The Apple Store difference.
              </Text>
              <Text color={"gray"} fontWeight="bold" fontSize={27}>
                Even more reasons to shop with us.
              </Text>
            </Flex>
            <StoreCarouselthree />
          </Box>
          {/* carousel four */}
          <Box mt={"5%"}>
            <Flex>
              <Text color={"black"} fontWeight="bold" fontSize={27}>
                Accessories.
              </Text>
              <Text color={"gray"} fontWeight="bold" fontSize={27}>
                Essentials that pair perfectly with your favourite devices.
              </Text>
            </Flex>
            <StoreCarouselfour />
          </Box>
          {/* carousel five */}
          <Box mt={"5%"}>
            <Flex>
              <Text color={"black"} fontWeight="bold" fontSize={27}>
                Loud and clear.
              </Text>
              <Text color={"gray"} fontWeight="bold" fontSize={27}>
                Unparalleled choices for rich, high-quality sound.
              </Text>
            </Flex>
            <StoreCarouselfive />
          </Box>
          {/* carousel six */}
          <Box mt={"5%"}>
            <Flex>
              <Text color={"black"} fontWeight="bold" fontSize={27}>
                The Apple experience.
              </Text>
              <Text color={"gray"} fontWeight="bold" fontSize={27}>
                Do even more with Apple products and services.
              </Text>
            </Flex>
            <StoreCarouselsix />
          </Box>
          {/* seven box*/}
          <Box mt={"5%"}>
            <Flex>
              <Text color={"black"} fontWeight="bold" fontSize={27}>
                Special stores.
              </Text>
              <Text color={"gray"} fontWeight="bold" fontSize={27}>
                {" "}
                Exclusive savings for students and educators.
              </Text>
            </Flex>
            <Box
              mt={5}
              transition="0.5s all ease-in-out"
              _hover={{ transform: "scale(1.02)" }}
            >
              <Image
                src="https://i.ibb.co/B4m33cy/Screenshot-20230117-172939.png"
                h={520}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Store;
