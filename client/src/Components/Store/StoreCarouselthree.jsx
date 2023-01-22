import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const content = [
  {
    src: "https://i.ibb.co/26p4rXT/Screenshot-20230117-155247.png",
  },
  {
    src: "https://i.ibb.co/dGk0Yf3/Screenshot-20230117-155300.png",
  },
  {
    src: "https://i.ibb.co/qykMccM/Screenshot-20230117-155309.png",
  },
  {
    src: "https://i.ibb.co/XxrVHHj/Screenshot-20230117-155317.png",
  },
];

const StoreCarouselthree = () => {
  return (
    <Box w="100%" mt={"2%"}>
      <Carousel responsive={responsive}>
        {content &&
          content.map((el, i) => (
            <Box
              key={i}
              borderRadius={10}
              transition="0.5s all ease-in-out"
              _hover={{ transform: "scale(1.02)" }}
              mr="1%"
            >
              <Image src={el.src} />
            </Box>
          ))}
      </Carousel>
    </Box>
  );
};

export default StoreCarouselthree;
