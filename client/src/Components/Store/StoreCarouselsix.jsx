import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const content = [
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-subscriptions-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626375547000",
    title: "Four Apple services. One easy subscription.",
    head: "New",
    dis: "",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-applecare-202209?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1669753330903",
    title: "We’ve got you covered",
    head: "New",
    dis: "AppleCare+ now comes with unlimited repairs for accidental damage protection.",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-homekit-202210_GEO_IN?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1665514049919",
    title: "See how one app can control your entire home.",
    head: "HOME",
    dis: "",
  },
];

const StoreCarouselsix = () => {
  return (
    <Box w="100%" mt={"2%"}>
      <Carousel responsive={responsive}>
        {content &&
          content.map((el, i) => (
            <Box key={i} borderRadius={10} w="95%" transition="0.5s all ease-in-out" _hover={{transform: "scale(1.02)"}} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" bgImage={el.src} bgSize="cover" bgPosition={"center"} zIndex="1" bgRepeat={"no-repeat"}  mr="1%" h="500px">
            <Box textAlign={"left"} pl="20px" py={5}>
              <Text color={"gray"} fontSize={16} fontWeight="500">{el.head}</Text>
              <Text color={"black"}  fontSize={42} fontWeight="500">{el.title}</Text>
              <Text fontWeight="normal" color={"black"} fontSize={20}>{el.dis}</Text>
            </Box>
            </Box>
          ))}
      </Carousel>
    </Box>
  );
};

export default StoreCarouselsix;
