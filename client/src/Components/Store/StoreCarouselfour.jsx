import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

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
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPPJ3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1662046154499",
    head: "New",
    cl: "orange",
    title: "iPhone 14 Pro Leather Case with MagSafe - Ink",
    price: "MRP ₹5900.00 (Incl. of all taxes)",
    ref: "/SingleProduct",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPRY3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1666123999266",
    head: "New",
    cl: "orange",
    title: "iPhone 14 Silicone Case with MagSafe - Lilac",
    price: "MRP ₹4900.00 (Incl. of all taxes)",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQGX3ref?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1660858506731",
    head: "New",
    cl: "orange",
    title: "45mm Beige Braided Solo Loop - Size 6",
    price: "MRP ₹9500.00 (Incl. of all taxes)",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDU3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1664481896530",
    head: "New",
    cl: "orange",
    title: "iPhone 14 Pro Leather Case with MagSafe - Ink",
    price: "MRP ₹5900.00 (Incl. of all taxes)",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDP3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1664481446939",
    head: "New",
    cl: "orange",
    title: "iPhone 14 Pro Leather Case with MagSafe - Ink",
    price: "MRP ₹5900.00 (Incl. of all taxes)",
  },
  {
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPPY3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1661458144361",
    head: "New",
    cl: "orange",
    title: "iPhone 14 Pro Leather Case with MagSafe - Ink",
    price: "MRP ₹5900.00 (Incl. of all taxes)",
  },
];
const StoreCarouselfour = () => {
  return (
    <Box w="100%" mt={"2%"}>
      <Carousel responsive={responsive}>
        {content &&
          content.map((el, i) => (
            <Link to={el.ref}>
              <Box
                key={i}
                w="95%"
                h={450}
                borderRadius={20}
                transition="0.5s all ease-in-out"
                _hover={{ transform: "scale(1.02)" }}
                bg="white"
                textAlign="left"
              >
                <Image src={el.src} borderRadius={20} alt="error" w={"100%"} />
                <Box pl={5}>
                  <Text fontSize={15} color={el.cl}>
                    {el.head}
                  </Text>
                  <Text fontSize={22} color="black">
                    {el.title}
                  </Text>
                  <Text f fontSize={18} mt="5%" color="gray">
                    {el.price}
                  </Text>
                </Box>
              </Box>
            </Link>
          ))}
      </Carousel>
    </Box>
  );
};

export default StoreCarouselfour;
