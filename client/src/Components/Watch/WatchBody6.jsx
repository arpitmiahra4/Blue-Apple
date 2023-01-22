import { Box, Grid, Flex, Text, Link, Image } from "@chakra-ui/react";
import React from "react";

const WatchBody6 = () => {
  return (
    <>
      <Box>
        <Text
          paddingTop={"130px"}
          paddingBottom={"49px"}
          textAlign={"center"}
          gridColumn={"span 2"}
          fontSize={"56px"}
          lineHeight={"1.07"}
          fontWeight={"600"}
          letterSpacing={"-0.005em"}
        >
          Get more out of Apple Watch
        </Text>
        <Flex
          bgColor={"#f5f5f7"}
          width={"100%"}
          justifyContent={"center"}
          gap={"150px"}
          height={"80vh"}
          alignItems={"center"}
        >
          <Image
            width={"409px"}
            height={"363px"}
            src={
              "https://www.apple.com/in/watch/home/images/overview/one/tile_apple_one__dv857y6v8dyu_large_2x.jpg"
            }
            alt={"djf"}
          />
          <Grid gap={"10px"} width={"350px"}>
            <Image
              width={"317px"}
              height={"100px"}
              marginBottom={"10px"}
              src="https://www.apple.com/v/watch/ba/images/overview/one/logo-apple-one__cwtz6e3tcscy_large_2x.png"
              alt={"alt"}
            />
            <Text
              marginTop={"10px auto 0 auto"}
              fontSize={"24px"}
              lineHeight={"1.166"}
              fontWeight={"600"}
              letterSpacing={"0.009em"}
            >
              Bundle four Apple Services.
            </Text>
            <Text
              marginTop={"10px auto 0 auto"}
              fontSize={"24px"}
              lineHeight={"1.166"}
              fontWeight={"600"}
              letterSpacing={"0.009em"}
            >
              And enjoy more for less.
            </Text>
            <Flex justifyContent={"center"} gap={"30px"}>
              <Link fontSize={"21px"} color={"#0071e3"}>
                Try it free <span marginTop={"4px"}>{""}</span>
              </Link>
              <Link fontSize={"21px"} color={"#0071e3"}>
                Learn more <span marginTop={"4px"}>{">"}</span>
              </Link>
            </Flex>
          </Grid>
        </Flex>
        <Box
          display={"grid"}
          alignItems={"end"}
          height={"110vh"}
          backgroundColor={"#f5f5f7"}
          textAlign="center"
          marginTop={"80px"}
          maxWidth="1730px"
          overflow={"hidden"}
        >
          <Box marginBottom={"50px"}>
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
              Health app.
            </Text>
            <Text
              fontWeight={600}
              marginTop={15}
              marginBottom={15}
              fontSize={21}
              lineHeight={1.381}
              letterSpacing={0.0045}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
              fontStyle={"normal"}
            >
              Now with a healthy dose of updates.
            </Text>
            <Link color={"#0071e3"}>
              Learn more <span marginTop={"4px"}>{">"}</span>
            </Link>
          </Box>
          <Image
            src="https://www.apple.com/in/watch/home/images/overview/health-app/tile_health__exde7a2pwjau_large_2x.jpg"
            alt="body_image1"
          />
        </Box>
      </Box>
    </>
  );
};

export default WatchBody6;
