import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsBookmark, BsTruck } from "react-icons/bs";
import MetaData from "../../Components/Home/MetaData";
// import { dataUrl } from "../../URL/AllUrl";
const SingleProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://mock-server-686g.onrender.com/products?id=1")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(data);
  const toast = useToast();
  const Buyit = () => {
    toast({
      title: "Added To Bag",
      description: "Successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    window.location.replace("/Bag");
  };

  return (
    <>
      <MetaData title={"BlueApple Single Product Section"} />
      <Box w={"70%"} m="auto" h={"92vh"} textAlign="left">
        {data &&
          data.map((el, i) => (
            <Flex gap={"5%"} pl="2%" pr="2%" py={5}>
              <Box pl="5%" pr="5%" w={"45%"} key={i}>
                <Text color={"#c14e08"} fontWeight="bold" fontSize={20}>
                  {el.head}
                </Text>
                <Text fontWeight={"500"} fontSize={35}>
                  {el.title}
                </Text>
                <Text>From ₹{el.started}/mo. Per Monthwith EMIFootnote§</Text>
                <Text>or</Text>
                <Text>
                  MRP ₹{el.price}
                  <br />
                  (Incl. of all taxes)
                </Text>
                <Text fontWeight={"bold"} fontSize="17px" mt={5}>
                  Colour - Ink
                </Text>
                <Image
                  src="https://i.ibb.co/R7K0V4D/Screenshot-20230121-003821.png"
                  w={"80%"}
                />
                <Flex gap={2}>
                  <Box mt={"2px"}>
                    <BsTruck size={22} />
                  </Box>
                  <Box>
                    <Text fontWeight={"semibold"} fontSize="18px">
                      Delivery:
                    </Text>
                    <Text>
                      In stock
                      <br />
                      Free Delivery
                    </Text>
                    <Text color={"blue"}>Get delivery dates</Text>
                  </Box>
                </Flex>
                <Button
                  color={"white"}
                  bg="#0071e3"
                  fontWeight={"bold"}
                  _hover={{ bg: "black", color: "red" }}
                  mt={2}
                  fontSize={20}
                  borderRadius={10}
                  w="100%"
                  onClick={Buyit}
                >
                  Buy
                </Button>
                <Flex mt={"1%"} gap={10} alignItems="center">
                  <Box>
                    <Text fontWeight={"bold"}>Still deciding?</Text>
                    <Text>
                      Add this item to a list and easily come
                      <br />
                      back to it later.
                    </Text>
                  </Box>
                  <Box color={"#0071e3"}>
                    <BsBookmark size={30} />
                  </Box>
                </Flex>
              </Box>
              <Box w={"50%"}>
                <Image src={el.src} />
                <Flex mt={"5%"} gap={"4%"} pl={"15%"} pr={"5%"}>
                  <Image
                    src={el.images[0].image}
                    w={"60px"}
                    borderBottom={"1px solid #0071e3"}
                  />
                  <Image
                    src={el.images[1].image}
                    w={"60px"}
                    borderBottom={"1px solid #0071e3"}
                  />
                  <Image
                    src={el.images[2].image}
                    w={"60px"}
                    borderBottom={"1px solid #0071e3"}
                  />
                  <Image
                    src={el.images[3].image}
                    w={"60px"}
                    borderBottom={"1px solid #0071e3"}
                  />
                  <Image
                    src={el.images[4].image}
                    w={"60px"}
                    borderBottom={"1px solid #0071e3"}
                  />
                </Flex>
              </Box>
            </Flex>
          ))}
      </Box>
    </>
  );
};

export default SingleProduct;
