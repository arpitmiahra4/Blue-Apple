import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useMedia } from "../../MediaQuery/UseMedia";

const TopDrawer = ({ data }) => {
  const { mediumScreen } = useMedia();
  const hstyle = {
    display: "flex",
    overflowX: "auto",
    scrollBehavior: "smooth",
    borderRadius: "15px",
    height: "auto",
    margin: "auto",
    position: "relative",
    gap: "15px",
  };

  return (
    <Box bgColor={"#f9f9fa"}>
      <Box
        id="arpit"
        style={hstyle}
        m="auto"
        p="15px"
        justifyContent={
          !mediumScreen &&
          document?.getElementById("arpit")?.scrollWidth >
            document?.getElementById("arpit")?.clientWidth
            ? "left"
            : "center"
        }
      >
        {data &&
          data.map((el, i) => (
            <Link to={el.link} key={i}>
              <Box
                minW={"80px"}
                _hover={{ color: "blue" }}
                cursor="pointer"
                margin={"auto"}
                textAlign="center"
                h="80px"
              >
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  margin={"auto"}
                  h="80%"
                  bgImage={el.img}
                  bgSize="contain"
                  bgPosition={"center"}
                  bgRepeat={"no-repeat"}
                ></Box>
                <Text _hover={{ color: "blue" }} mt="-5px" fontSize={"13px"}>
                  {el.title}
                </Text>
              </Box>
            </Link>
          ))}
      </Box>
    </Box>
  );
};

export default TopDrawer;
