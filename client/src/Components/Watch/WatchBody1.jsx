import React from "react";
import { Box, Button, Image, Text, Flex, Link } from "@chakra-ui/react";
import styles from "../../Styles/Watch.module.css";
const WatchBody1 = () => {
  return (
    <>
      <Box>
        <Box
          display={"grid"}
          alignItems={"end"}
          height={"180vh"}
          backgroundColor={"#f5f5f7"}
          textAlign="center"
          marginTop={"80px"}
          maxWidth="1730px"
          overflow={"hidden"}
        >
          <Box>
            <Image
              position={"relative"}
              left="50%"
              marginLeft={"-71px"}
              width="131px"
              src="https://www.apple.com/v/watch/ba/images/overview/ultra/logo_watch_ultra__bbj9d0ebe7k2_large_2x.png"
              alt="watch_image"
            />
            <Text
              marginTop={4}
              fontSize={48}
              fontWeight={560}
              lineHeight={1.083}
              letterSpacing={"0em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
              fontStyle={"normal"}
            >
              Adventure awaits.
            </Text>
            <Text
              fontWeight={600}
              marginTop={22}
              marginBottom={23}
              fontSize={21}
              lineHeight={1.381}
              letterSpacing={0.0045}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
              fontStyle={"normal"}
            >
              ₹89900.00*
            </Text>
            <Button
              marginLeft={-8}
              color={"white"}
              backgroundColor={"#0071e3d9"}
              position={"absolute"}
              borderRadius={"980px"}
              _hover={{ backgroundColor: "#0071e3" }}
              fontSize={"17px"}
              fontWeight={"400"}
              height={8}
              letterSpacing={"-0.022em"}
              minW={"28px"}
            >
              Buy
            </Button>
            <Flex
              width={400}
              justifyContent={"space-around"}
              margin={"auto"}
              marginTop={20}
              paddingLeft={"-20px"}
            >
              <Link color={"#0071e3"}>
                Learn more <span marginTop={"4px"}>{">"}</span>
              </Link>
              <Link color={"#0071e3"} display={"flex"} gap={2}>
                Watch the film{" "}
                <Image
                  marginTop={1}
                  src="data:image/png;base64,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"
                  alt="play_icon"
                  height={5}
                  weight={5}
                />
              </Link>
            </Flex>
          </Box>
          <Image
            className={styles.BodyImage1}
            src="https://www.apple.com/in/watch/images/overview/ultra/hero_ultra__bjuq9fkxb9ci_large_2x.jpg"
            alt="body_image1"
            marginBottom={"50px"}
          />
        </Box>
        <Box bgColor={"black"} display={"flex"}>
          <Image
            src="https://www.apple.com/in/watch/images/overview/series-8/tile_s8__ck9oce5a22aa_large_2x.jpg"
            alt="body_image2"
            height={"775px"}
            width={"381px"}
            marginLeft={"210px"}
          />
          <Box display={"grid"} margin={"auto"}>
            <Image
              position={"relative"}
              left="50%"
              marginLeft={"-71px"}
              width="131px"
              src="https://www.apple.com/v/watch/ba/images/overview/series-8/logo_watch_s8__brvo8w9pe5ua_large_2x.png"
              alt="watch_image2"
            />
            <Text
              marginTop={2}
              fontSize={48}
              fontWeight={560}
              lineHeight={1.083}
              letterSpacing={"0em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
              fontStyle={"normal"}
              color="white"
            >
              A healthy leap ahead.
            </Text>
            <Text
              fontWeight={600}
              marginTop={4}
              marginBottom={2}
              fontSize={21}
              lineHeight={1.381}
              letterSpacing={0.0045}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
              fontStyle={"normal"}
              color={"white"}
            >
              From ₹45900.00*
            </Text>
            <Button
              margin={"200px 0px 0px 210px"}
              color={"white"}
              backgroundColor={"#0071e3d9"}
              position={"absolute"}
              borderRadius={"980px"}
              _hover={{ backgroundColor: "#0071e3" }}
              fontSize={"17px"}
              fontWeight={"400"}
              height={8}
              letterSpacing={"-0.022em"}
              minW={"28px"}
            >
              Buy
            </Button>
            <Flex
              width={400}
              justifyContent={"space-around"}
              margin={"auto"}
              marginTop={20}
              paddingLeft={"-20px"}
            >
              <Link color={"#0071e3"}>
                Learn more <span marginTop={"4px"}>{">"}</span>
              </Link>
              <Link color={"#0071e3"} display={"flex"} gap={2}>
                Watch the film
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          bgColor={"#f5f5f7"}
          height={"110vh"}
          alignItems={"center"}
        >
          <Box width={"330px"} display={"grid"} justifyContent={"center"}>
            <Image
              src="https://www.apple.com/v/watch/ba/images/overview/se/logo-watch-se__soyna2pegxeq_large_2x.png"
              alt="body_subImage3"
              height={"51px"}
              width={"132px"}
              margin={"auto"}
            />
            <Text
              marginTop={"12px"}
              fontSize={"48px"}
              fontWeight={"600"}
              letterSpacing={"0em"}
              lineHeight={"1.083"}
            >
              A great deal to love.
            </Text>
            <Text
              marginTop={"21px"}
              marginBottom={"14px"}
              fontWeight={"600"}
              fontSize={"21px"}
              lineHeight={"1.381"}
              letterSpacing={"0.0045em"}
            >
              From ₹29900.00*
            </Text>
            <Box display={"flex"} justifyContent={"center"} gap={"40px"}>
              <Button
                marginRight={"120px"}
                color={"white"}
                backgroundColor={"#0071e3d9"}
                position={"absolute"}
                borderRadius={"980px"}
                _hover={{ backgroundColor: "#0071e3" }}
                fontSize={"17px"}
                fontWeight={"400"}
                height={8}
                letterSpacing={"-0.022em"}
                minW={"28px"}
              >
                Buy
              </Button>
              <Link marginLeft={120} color={"#0071e3"}>
                Learn more <span marginTop={"4px"}>{">"}</span>
              </Link>
            </Box>
          </Box>
          <Image
            src="https://www.apple.com/in/watch/home/images/overview/se/tile-watch-se__knji2d25x8qe_large_2x.jpg"
            alt="body_image3"
            height={"505px"}
            width={"564px"}
          />
        </Box>
      </Box>
    </>
  );
};

export default WatchBody1;
