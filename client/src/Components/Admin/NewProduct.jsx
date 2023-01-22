import { Box, Button, Flex, Text, useToast, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar/Sidebar";
import { Input } from "@chakra-ui/react";
const NewProduct = () => {
  const [loader, setLoader] = useState(false);
  const toast = useToast();
  const [head, setHead] = useState("");
  const [title, setTitle] = useState("");
  const [src, setSrc] = useState("");
  const [started, setStarted] = useState("");
  const [price, setprice] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [img6, setImg6] = useState("");

  let newProduct = {
    head,
    title,
    src,
    started,
    price,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newProduct);
    setLoader(true);
    try {
      await axios.post(
        "https://mock-server-686g.onrender.com/products",
        newProduct
      );
      setLoader(false);
      toast({
        title: title + " added",
        description: title + " product added to your databse",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
      setLoader(false);
    }
  };

  if (loader === true) {
    return (
      <Image
        src="https://thumbs.gfycat.com/RipeLastIcefish-size_restricted.gif"
        m={"auto"}
        w="30%"
      />
    );
  }
  return (
    <>
      {loader === true ? (
        <Image src="https://thumbs.gfycat.com/RipeLastIcefish-size_restricted.gif" />
      ) : (
        console.log("error")
      )}
      <Box w={"100%"} py={"1%"} pl="1%" pr="1%" bg={"white"}>
        <Flex gap={"1%"}>
          <Box w={"20%"} h="90vh" bg={"black"} borderRadius={10}>
            <Sidebar />
          </Box>
          <Box w={"80%"} h="90vh" borderRadius={10} bg="black">
            <Text
              color={"#f8e68a"}
              fontWeight="bold"
              fontSize={22}
              textDecoration="underline"
            >
              Add New Products In BueApple DataBase
            </Text>
            <Box mt="1%">
              <Flex gap={5} pl={4} pr={4}>
                <Box
                  m="auto"
                  w="40%"
                  h={"82vh"}
                  textAlign="left"
                  pl={5}
                  pr={5}
                  color="#f8e68a"
                  border={"2px solid #f8e68a"}
                  borderRadius={20}
                  fontWeight={"bold"}
                  py={5}
                >
                  <Text fontSize={22} mb={2}>
                    Main Product Image
                  </Text>
                  <Input
                    border={"2px solid #f8e68a"}
                    fontSize={25}
                    placeholder="Big Image Url"
                    h={100}
                    onChange={(e) => setSrc(e.target.value)}
                  />
                  <Box mt={10}>
                    <Text fontSize={22} mb={5}>
                      Carousel Product Image
                    </Text>
                    <Box
                      display={"grid"}
                      style={{ gridTemplateColumns: "repeat(2,190px)" }}
                      gap={5}
                    >
                      <Input
                        border={"2px solid #f8e68a"}
                        fontSize={22}
                        h={20}
                        placeholder="Image Url 1"
                        onChange={(e) => setImg1(e.target.value)}
                      />
                      <Input
                        border={"2px solid #f8e68a"}
                        fontSize={22}
                        h={20}
                        placeholder="Image Url 2"
                        onChange={(e) => setImg2(e.target.value)}
                      />
                      <Input
                        border={"2px solid #f8e68a"}
                        fontSize={22}
                        h={20}
                        placeholder="Image Url 3"
                        onChange={(e) => setImg3(e.target.value)}
                      />
                      <Input
                        border={"2px solid #f8e68a"}
                        fontSize={22}
                        h={20}
                        placeholder="Image Url 4"
                        onChange={(e) => setImg4(e.target.value)}
                      />
                      <Input
                        border={"2px solid #f8e68a"}
                        fontSize={22}
                        h={20}
                        placeholder="Image Url 5"
                        onChange={(e) => setImg5(e.target.value)}
                      />
                      <Input
                        border={"2px solid #f8e68a"}
                        fontSize={22}
                        h={20}
                        placeholder="Image Url 6"
                        onChange={(e) => setImg6(e.target.value)}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box
                  border={"2px solid #f8e68a"}
                  borderRadius={20}
                  pl={5}
                  pr={5}
                  m="auto"
                  w="60%"
                  py={5}
                  h={"82vh"}
                  textAlign="left"
                >
                  <Text
                    fontSize={22}
                    fontWeight="semibold"
                    mt={5}
                    color="#f8e68a"
                  >
                    Product Head
                  </Text>
                  <Input
                    color="#f8e68a"
                    fontSize={20}
                    placeholder="Plese Add It's Mandatory"
                    mt={2}
                    h={50}
                    onChange={(e) => setHead(e.target.value)}
                  />
                  <Text
                    fontSize={22}
                    fontWeight="semibold"
                    mt={5}
                    color="#f8e68a"
                  >
                    Product Title
                  </Text>
                  <Input
                    color="#f8e68a"
                    fontSize={20}
                    placeholder="Plese Add It's Mandatory"
                    mt={2}
                    h={50}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Text
                    fontSize={22}
                    fontWeight="semibold"
                    mt={5}
                    color="#f8e68a"
                  >
                    Product Price
                  </Text>
                  <Input
                    color="#f8e68a"
                    fontSize={20}
                    placeholder="Plese Add It's Mandatory"
                    mt={2}
                    h={50}
                    onChange={(e) => setprice(e.target.value)}
                  />
                  <Text
                    fontSize={22}
                    fontWeight="semibold"
                    mt={5}
                    color="#f8e68a"
                  >
                    Product Started Price
                  </Text>
                  <Input
                    color="#f8e68a"
                    fontSize={20}
                    placeholder="Plese Add It's Mandatory"
                    mt={2}
                    h={50}
                    onChange={(e) => setStarted(e.target.value)}
                  />
                  <Flex w={"100%"} justifyContent={"center"} mt={10}>
                    <Button
                      border={"2px solid #f8e68a"}
                      fontSize={22}
                      fontWeight="bold"
                      h={50}
                      color="#f8e68a"
                      _hover={{ bg: "gray" }}
                      bg="black"
                      onClick={handleSubmit}
                    >
                      Add Product
                    </Button>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default NewProduct;
