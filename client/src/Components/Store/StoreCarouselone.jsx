import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const content = [
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1664664053235",
    text: "Mac",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_EMEA?wid=200&hei=130&fmt=png-alpha&.v=1661027786072",
    text: "iPhone",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437",
    text: "iPad",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202209_GEO_IN?wid=200&hei=130&fmt=png-alpha&.v=1661796454107",
    text: "Apple Watch",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885",
    text: "Air Pods",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000",
    text: "AirTag",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664628458484",
    text: "Apple Tv 4k",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202110?wid=200&hei=130&fmt=png-alpha&.v=1633355783000",
    text: "HomePod mini",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660677092974",
    text: "Accessories",
  },
];

const StoreCarouselone = () => {
  return (
    <Box w="100%" mt={"5%"}>
      <Carousel responsive={responsive}>
        {content &&
          content.map((el, i) => (
            <Box key={i} h="150px" w={"100%"}>
              <Image src={el.src} alt="error" h={"110px"} />
              <Text fontWeight="650" fontSize={18} color="black" mt={"6%"}>
                {el.text}
              </Text>
            </Box>
          ))}
      </Carousel>
    </Box>
  );
};

export default StoreCarouselone;
