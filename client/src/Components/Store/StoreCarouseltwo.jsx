import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-14-202209?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1661890731783",
    title: "Big and bigger.",
    head: "IPHONE 14",
    price: "From ₹79900.00‡",
    hcolor:"gray",
    tcolor:"black",
    pcolor:"black"
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-ultra-202209_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661382550267",
    title: "Adventure awaits.",
    head: "APPLE WATCH ULTRA",
    price: "From ₹89900.00‡",
    hcolor:"gray",
    tcolor:"black",
    pcolor:"black"
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-pro-202210_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1667506331714",
    title: "Supercharged by M2.",
    head: "IPAD PRO",
    price: "From ₹81900.00‡",
    hcolor:"white",
    tcolor:"white",
    pcolor:"white"
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-14-pro-202209?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661181419170",
    title: "Pro. Beyond.",
    head: "IPHONE 14 PRO",
    price: " From ₹129900.00‡",
    hcolor:"white",
    tcolor:"white",
    pcolor:"white"
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s8-202209_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661792340440",
    title: "A healthy leap ahead.",
    head: "APPLE WATCH SERIES 8",
    price: "From ₹45900.00‡",
    hcolor:"white",
    tcolor:"white",
    pcolor:"white"
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-appletv-202210?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1664628458702",
    title: "The Apple experience.",
    head: "APPLE TV 4K",
    price: "From ₹14900.00‡",
    hcolor:"gray",
    tcolor:"black",
    pcolor:"black"
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-202210?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1667423432053",
    title: "Loveable. Drawable.",
    head: "IPAD",
    price: "From ₹44900.00‡",
    hcolor:"gray",
    tcolor:"black",
    pcolor:"black"
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-se-202209_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1663863097690",
    title: "A great deal to love.",
    head: "APPLE WATCH SE",
    price: "From ₹29900.00‡",
    hcolor:"gray",
    tcolor:"black",
    pcolor:"black"
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-air-202206?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1652743701977",
    title: "Don’t take it lightly.",
    head: "MACBOOK AIR WITH M2 CHIP",
    price: "From ₹119900.00‡",
    hcolor:"gray",
    tcolor:"black",
    pcolor:"black"
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-airpods-pro-202209?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661016986712",
    title: "Rebuilt from the sound up.",
    head: "AIRPODS PRO (2ND GENERATION)",
    price: "From ₹26900.00‡",
    hcolor:"white",
    tcolor:"white",
    pcolor:"white"
  },
];

const StoreCarouseltwo = () => {
  return (
    <Box w="100%" mt={"2%"}>
      <Carousel responsive={responsive}>
        {content &&
          content.map((el, i) => (
            <Box key={i} borderRadius={10} transition="0.5s all ease-in-out" _hover={{transform: "scale(1.02)"}} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" bgImage={el.src} bgSize="cover" bgPosition={"center"} zIndex="1" bgRepeat={"no-repeat"} mr="1%" h="500px">
            <Box textAlign={"left"} pl="20px" py={5}>
              <Text color={el.hcolor} fontSize={16} fontWeight="bold">{el.head}</Text>
              <Text color={el.tcolor}  fontSize={30} fontWeight="bold">{el.title}</Text>
              <Text fontWeight="normal" color={el.pcolor} fontSize={20}>{el.price}</Text>
            </Box>
            </Box>
          ))}
      </Carousel>
    </Box>
  );
};

export default StoreCarouseltwo;
