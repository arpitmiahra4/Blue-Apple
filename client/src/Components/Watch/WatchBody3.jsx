import React from "react";
import { Box, Grid, Text, Link, Flex, Image } from "@chakra-ui/react";
const WatchBody3 = () => {
  return (
    <>
      <Grid
        fontFamily={
          "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
        }
        gridTemplateColumns={"1fr 1fr"}
        gridColumnGap={"30px"}
        gridRowGap={"30px"}
        padding={"30px 30px 0px"}
        maxW={"1340px"}
        margin={"0 auto"}
      >
        <Grid bg={"#f5f5f7"}>
          <Flex
            gap={"15px"}
            width={"90%"}
            margin={"70px auto 90px auto"}
            flexDirection={"column"}
            gridColumn={"span 1"}
            alignItems={"center"}
            textAlign={"center"}
            bg={"#f5f5f7"}
            overflow={"hidden"}
            position={"relative"}
          >
            <Text
              fontSize={"24px"}
              lineHeight={"1.166"}
              fontWeight={"600"}
              letterSpacing={"0em"}
            >
              Why Apple Watch
            </Text>
            <Text
              marginTop={"10px auto 0 auto"}
              fontSize={"48px"}
              lineHeight={"1.083"}
              fontWeight={"600"}
              letterSpacing={"-0.003em"}
            >
              It's the Ultimate device for a healthy life.
            </Text>
            <Link fontSize={"21px"} color={"#0071e3"}>
              Learn more <span marginTop={"4px"}>{">"}</span>
            </Link>
          </Flex>
          <Box border={"1px solid blakk"}>
            <Image
              src={
                "https://www.apple.com/in/watch/home/images/overview/why-watch/tile_why_watch__bzxlfokkvj36_large_2x.jpg"
              }
              alt={"watch-body3"}
            />
          </Box>
        </Grid>
        <Grid bg={"#f5f5f7"}>
          <Flex
            gap={"15px"}
            width={"90%"}
            margin={"110px auto 70px auto"}
            flexDirection={"column"}
            gridColumn={"span 1"}
            alignItems={"center"}
            textAlign={"center"}
            bg={"#f5f5f7"}
            overflow={"hidden"}
            position={"relative"}
          >
            <Text
              marginTop={"10px auto 0 auto"}
              fontSize={"48px"}
              lineHeight={"1.083"}
              fontWeight={"600"}
              letterSpacing={"-0.003em"}
            >
              watchOS 9
            </Text>
            <Text
              fontSize={"24px"}
              lineHeight={"1.166"}
              fontWeight={"600"}
              letterSpacing={"0em"}
            >
              Extremely insightful. Exceptionally personal.
            </Text>
            <Link fontSize={"21px"} color={"#0071e3"}>
              See what's new <span marginTop={"4px"}>{">"}</span>
            </Link>
          </Flex>
          <Box border={"1px solid blakk"} marginBottom={"90px"}>
            <Image
              src={
                "https://www.apple.com/in/watch/images/overview/watchos9/tile_watchos__fo0tafi6nn6u_large_2x.jpg"
              }
              alt={"watch-body3"}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default WatchBody3;
