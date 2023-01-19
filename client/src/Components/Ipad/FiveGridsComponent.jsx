import React from "react";
import { Box, Text, Flex, Image, Button, Link } from "@chakra-ui/react";
import styles from "../../Styles/Ipad.module.css";

const FiveGridsComponent = () => {
  return (
    <div>
      <Box
        // border={"1px solid pink"}
        w={"96%"}
        backgroundColor={"white"}
        ml={"2%"}
        mt={"-50px"}
        pt={"0px"}
      >
        <Text
          mt={"85px"}
          mb={"65px"}
          
          textAlign={"center"}
          fontWeight="700"
          fontSize={55}
        >
          Which iPad is right for you?
        </Text>

        <Flex
          className={styles.ipad_fiveGrid}
          //   border={"1px solid red"}
        >
          {/* 1st box */}
          <Box
            borderBottom={"1px solid #d2d2d7"}
            height={"fit-content"}
            paddingBottom={"40px"}
            // border={'1px solid red'}
          >
            <Image
              width={"167px"}
              height={"191px"}
              margin={"auto"}
              src={
                "https://www.apple.com/v/ipad/home/cc/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png"
              }
            />
            <Flex
              gap={"6px"}
              alignItems={"center"}
              justifyContent={"center"}
              margin={"30px 0px 12px 0px"}
            >
              <Box
                bgColor={"#e3e4e5"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
              <Box
                bgColor={"#868487"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
            </Flex>
            <Text color={"#bf4800"} fontSize={"12px"}>
              New
            </Text>
            <Text
              fontSize={"25px"}
              fontWeight={"600"}
              lineHeight={"1.1904"}
              letterSpacing={"0.02em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              iPad Pro
            </Text>
            <Text
              marginTop={"38px"}
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"1.4285"}
              letterSpacing={"-0.016em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              The ultimate iPad experience with the most advanced technology.
            </Text>
            <Text
              marginTop={"55px"}
              fontSize={"14px"}
              fontWeight={"400"}
              lineHeight={"1.4285"}
              letterSpacing={"-0.016em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              From ₹81900.00*
            </Text>
            <Box display={"grid"}>
              <Button
                marginLeft={"80px"}
                color={"white"}
                backgroundColor={"#0071e3d9"}
                position={"absolute"}
                borderRadius={"980px"}
                _hover={{ backgroundColor: "#0071e3" }}
                fontSize={"12px"}
                fontWeight={"400"}
                height={7}
                letterSpacing={"-0.022em"}
                minW={"28px"}
                //margin={"auto"}
                marginTop={"10px"}
              >
                Buy
              </Button>
              <Link color={"#0071e3"} marginTop={"60px"}>
                Learn more <span marginTop={"4px"}>{">"}</span>
              </Link>
            </Box>
          </Box>

          {/* 2nd box */}
          <Box
            borderBottom={"1px solid #d2d2d7"}
            height={"fit-content"}
            paddingBottom={"40px"}
            // border={'1px solid red'}
          >
            <Image
              width={"122px"}
              height={"168px"}
              margin={"auto"}
              mt={"24px"}
              src={
                "https://www.apple.com/v/ipad/home/cc/images/overview/compare_ipad_air__bxjv33pk6nte_large.png"
              }
            />
            <Flex
              gap={"6px"}
              alignItems={"center"}
              justifyContent={"center"}
              margin={"30px 0px 12px 0px"}
            >
              <Box
                bgColor={"#e3e4e5"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
              <Box
                bgColor={"#88aebf"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
              <Box
                bgColor={"#e8d2cf"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
              <Box
                bgColor={"#b9b8d1"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
              <Box
                bgColor={"#868487"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
            </Flex>
            <Text color={"#bf4800"} fontSize={"12px"}>
              {" "}
            </Text>
            <Text
              marginTop={"30px"}
              fontSize={"25px"}
              fontWeight={"600"}
              lineHeight={"1.1904"}
              letterSpacing={"0.02em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              iPad Air
            </Text>
            <Text
              marginTop={"38px"}
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"1.4285"}
              letterSpacing={"-0.016em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              Serious performance in a thin and light design.
            </Text>
            <Text
              marginTop={"30px"}
              fontSize={"14px"}
              fontWeight={"400"}
              lineHeight={"1.4285"}
              letterSpacing={"-0.016em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              From ₹59900.00*
            </Text>
            <Box display={"grid"}>
              <Button
                marginLeft={"50px"}
                marginTop={"10px"}
                color={"white"}
                backgroundColor={"#0071e3d9"}
                position={"absolute"}
                borderRadius={"980px"}
                _hover={{ backgroundColor: "#0071e3" }}
                fontSize={"12px"}
                fontWeight={"400"}
                height={7}
                letterSpacing={"-0.022em"}
                minW={"28px"}
              >
                Buy
              </Button>
              <Link color={"#0071e3"} marginTop={"60px"}>
                Learn more <span marginTop={"4px"}>{">"}</span>
              </Link>
            </Box>
          </Box>

          {/* 3rd box */}
          <Box
            borderBottom={"1px solid #d2d2d7"}
            height={"fit-content"}
            paddingBottom={"40px"}
            // border={'1px solid red'}
          >
            <Image
              width={"122px"}
              height={"168px"}
              margin={"auto"}
              mt={"23px"}
              src={
                "https://www.apple.com/v/ipad/home/cc/images/overview/compare_ipad_10_9__f7p2wja0gwuy_large.png"
              }
            />
            <Flex
              gap={"6px"}
              alignItems={"center"}
              justifyContent={"center"}
              margin={"30px 0px 12px 0px"}
            >
              <Box
                bgColor={"#e3e4e5"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
              <Box
                bgColor={"#88aebf"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
              <Box
                bgColor={"#de6274"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
              <Box
                bgColor={"#f0d95b"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
            </Flex>
            <Text color={"#bf4800"} fontSize={"12px"}>
              New
            </Text>
            <Text
              fontSize={"25px"}
              fontWeight={"600"}
              lineHeight={"1.1904"}
              letterSpacing={"0.02em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              iPad
            </Text>
            <Text
              marginTop={"-5px"}
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"1.4285"}
              letterSpacing={"-0.016em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              10th generation
            </Text>
            <Text
              marginTop={"20px"}
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"1.4285"}
              letterSpacing={"-0.016em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              The all‑new colourful iPad for the things you do every day.
            </Text>
            <Text
              marginTop={"55px"}
              fontSize={"14px"}
              fontWeight={"400"}
              lineHeight={"1.4285"}
              letterSpacing={"-0.016em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              From ₹44900.00*
            </Text>
            <Box display={"grid"}>
              <Button
                marginLeft={"68px"}
                marginTop={"10px"}
                color={"white"}
                backgroundColor={"#0071e3d9"}
                position={"absolute"}
                borderRadius={"980px"}
                _hover={{ backgroundColor: "#0071e3" }}
                fontSize={"12px"}
                fontWeight={"400"}
                height={7}
                letterSpacing={"-0.022em"}
                minW={"28px"}
              >
                Buy
              </Button>
              <Link color={"#0071e3"} marginTop={"60px"}>
                Learn more <span marginTop={"4px"}>{">"}</span>
              </Link>
            </Box>
          </Box>

          {/* 4th box */}
          <Box
            borderBottom={"1px solid #d2d2d7"}
            height={"fit-content"}
            paddingBottom={"40px"}
            // border={'1px solid red'}
          >
            <Image
              width={"119px"}
              height={"170px"}
              margin={"auto"}
              mt={"21px"}
              src={
                "https://www.apple.com/v/ipad/home/cc/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png"
              }
            />
            <Flex
              gap={"6px"}
              alignItems={"center"}
              justifyContent={"center"}
              margin={"30px 0px 12px 0px"}
            >
              <Box
                bgColor={"#e3e4e5"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
              <Box
                bgColor={"#868487"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
            </Flex>
            <Text color={"#bf4800"} fontSize={"12px"}>
              {" "}
            </Text>
            <Text
              marginTop={"30px"}
              fontSize={"25px"}
              fontWeight={"600"}
              lineHeight={"1.1904"}
              letterSpacing={"0.02em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              iPad
            </Text>
            <Text
              marginTop={"-5px"}
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"1.4285"}
              letterSpacing={"-0.016em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              9th generation
            </Text>
            <Text
              marginTop={"20px"}
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"1.4285"}
              letterSpacing={"-0.016em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              All the essentials in the most affordable iPad.
            </Text>
            <Text
              marginTop={"55px"}
              fontSize={"14px"}
              fontWeight={"400"}
              lineHeight={"1.4285"}
              letterSpacing={"-0.016em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              From ₹33900.00*
            </Text>
            <Box display={"grid"}>
              <Button
                marginLeft={"45px"}
                marginTop={"10px"}
                color={"white"}
                backgroundColor={"#0071e3d9"}
                position={"absolute"}
                borderRadius={"980px"}
                _hover={{ backgroundColor: "#0071e3" }}
                fontSize={"12px"}
                fontWeight={"400"}
                height={7}
                letterSpacing={"-0.022em"}
                minW={"28px"}
              >
                Buy
              </Button>
              <Link color={"#0071e3"} marginTop={"60px"}>
                Learn more <span marginTop={"4px"}>{">"}</span>
              </Link>
            </Box>
          </Box>

          {/* 5th box */}
          <Box
            borderBottom={"1px solid #d2d2d7"}
            height={"fit-content"}
            paddingBottom={"40px"}
            // border={'1px solid red'}
          >
            <Image
              width={"93px"}
              height={"134px"}
              margin={"auto"}
              mt={"57px"}
              src={
                "https://www.apple.com/v/ipad/home/cc/images/overview/compare_ipad_mini__czcsk9ukpeie_large.png"
              }
            />
            <Flex
              gap={"6px"}
              alignItems={"center"}
              justifyContent={"center"}
              margin={"30px 0px 12px 0px"}
            >
              <Box
                bgColor={"#e3e4e5"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
              <Box
                bgColor={"#e8d2cf"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
              <Box
                bgColor={"#b9b8d1"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
              <Box
                bgColor={"#868487"}
                borderRadius={"50%"}
                width={"11px"}
                height={"11px"}
              ></Box>
            </Flex>
            <Text color={"#bf4800"} fontSize={"12px"}>
              {" "}
            </Text>
            <Text
              marginTop={"30px"}
              fontSize={"25px"}
              fontWeight={"600"}
              lineHeight={"1.1904"}
              letterSpacing={"0.02em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              iPad mini
            </Text>
            <Text
              marginTop={"38px"}
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"1.4285"}
              letterSpacing={"-0.016em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              The full iPad experience designed to fit in one hand.
            </Text>
            <Text
              marginTop={"55px"}
              fontSize={"14px"}
              fontWeight={"400"}
              lineHeight={"1.4285"}
              letterSpacing={"-0.016em"}
              fontFamily={
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
              }
            >
              From ₹49900.00*
            </Text>
            <Box display={"grid"}>
              <Button
                marginLeft={"55px"}
                marginTop={"10px"}
                color={"white"}
                backgroundColor={"#0071e3d9"}
                position={"absolute"}
                borderRadius={"980px"}
                _hover={{ backgroundColor: "#0071e3" }}
                fontSize={"12px"}
                fontWeight={"400"}
                height={7}
                letterSpacing={"-0.022em"}
                minW={"28px"}
              >
                Buy
              </Button>
              <Link color={"#0071e3"} marginTop={"60px"}>
                Learn more <span marginTop={"4px"}>{">"}</span>
              </Link>
            </Box>
          </Box>
        </Flex>
        <Box>
          <Flex justifyContent={"center"} gap="4%" mt={"70px"} mb={"30px"} pb={"70px"}>
            <Text
              color={"#175590"}
              fontWeight="bold"
              fontSize={20}
              _hover={{ textDecoration: "underline" }}
            >
              Compare all iPad models &gt;
            </Text>
            <Text
              color={"#175590"}
              fontWeight="bold"
              fontSize={20}
              _hover={{ textDecoration: "underline" }}
            >
              Shop iPad &gt;
            </Text>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default FiveGridsComponent;
