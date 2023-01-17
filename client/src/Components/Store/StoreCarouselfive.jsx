import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
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

// UmberForest GreenInkMidnightOrange

const content = [
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1660803972361",
    head: "New",
    cl: "orange",
    title: "AirPods Pro (2nd generation)",
    price: "MRP ₹5900.00 (Incl. of all taxes)",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632861342000",
    head: "Free Engraving",
    cl: "orange",
    title: "AirPods (3rd generation) with case",
    price: "MRP ₹4900.00 (Incl. of all taxes)",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-orange-202110?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632925511000",
    head: "Free",
    cl: "orange",
    title: "HomePod mini - Orange with case",
    price: "MRP ₹9500.00 (Incl. of all taxes)",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632861342000",
    head: "Free Engraving",
    cl: "orange",
    title: "AirPods (3rd generation) with case",
    price: "MRP ₹5900.00 (Incl. of all taxes)",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-silver-202011?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1604021221000",
    head: "Free",
    cl: "orange",
    title: "AirPods Max - Silver",
    price: "MRP ₹5900.00 (Incl. of all taxes)",
  },
];
const StoreCarouselfive = () => {
  return (
    <Box w="100%" mt={"2%"}>
      <Carousel responsive={responsive}>
        {content &&
          content.map((el, i) => (
            <Box key={i} w="95%" h={450} borderRadius={20} transition="0.5s all ease-in-out" _hover={{transform: "scale(1.02)"}} bg="white" textAlign="left">
              <Image src={el.src} borderRadius={20} alt="error" w={"100%"}/>
              <Box pl={5}>
                <Text  fontSize={15} color={el.cl}>
                  {el.head}
                </Text>
                <Text  fontSize={22} color="black">
                  {el.title}
                </Text>
                <Text f fontSize={18} mt="5%" color="gray">
                  {el.price}
                </Text>
              </Box>
            </Box>
          ))}
      </Carousel>
    </Box>
  );
};

export default StoreCarouselfive;
