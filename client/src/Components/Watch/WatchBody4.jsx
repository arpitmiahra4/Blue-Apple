import React from "react";
import { Box, Grid, Flex, Link, Text, Image } from "@chakra-ui/react";
const WatchBody4 = () => {
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
        marginBottom={"150px"}
      >
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
          Apple Watch essential
        </Text>
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
              marginTop={"10px auto 0 auto"}
              fontSize={"48px"}
              lineHeight={"1.083"}
              fontWeight={"600"}
              letterSpacing={"-0.003em"}
            >
              New Styles.
            </Text>
            <Text
              marginTop={"10px auto 0 auto"}
              fontSize={"48px"}
              lineHeight={"1.083"}
              fontWeight={"600"}
              letterSpacing={"-0.003em"}
            >
              Ready for new adventures.
            </Text>
            <Link fontSize={"21px"} color={"#0071e3"}>
              Shop the latest straps <span marginTop={"4px"}>{">"}</span>
            </Link>
          </Flex>
          <Box>
            <Image
              src={
                "https://www.apple.com/v/watch/ba/images/overview/bands/tile_bands__4x5zbcsqc1ua_large.jpg"
              }
              alt={"watch-body3"}
            />
          </Box>
        </Grid>
        <Grid bg={"#f5f5f7"}>
          <Flex
            gap={"15px"}
            width={"50%"}
            margin={"110px auto -100px auto"}
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
              Magic runs in the family.
            </Text>
            <Text
              fontSize={"21px"}
              lineHeight={"1.166"}
              fontWeight={"400"}
              letterSpacing={"0em"}
            >
              Explore all Airpods Models and find the best ones for you.
            </Text>
            <Link fontSize={"21px"} color={"#0071e3"}>
              Learn more <span marginTop={"4px"}>{">"}</span>
            </Link>
          </Flex>
          <Box marginBottom={"90px"}>
            <Image
              src={
                "https://www.apple.com/v/watch/ba/images/overview/airpods/airpods__cldonwj5wwya_large.jpg"
              }
              alt={"watch-body3"}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default WatchBody4;
