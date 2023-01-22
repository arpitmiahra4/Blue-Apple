import {
  Box,
  Button,
  Flex,
  Progress,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import {
  barChartDataDashboard,
  barChartOptionsDashboard,
  lineChartDataDashboard,
  lineChartOptionsDashboard,
} from "../chartjs/charts";
import LineChart from "../chartjs/LineChart";
import MetaData from "../Home/MetaData";
import { CartIcon, RocketIcon, StatsIcon, WalletIcon } from "../Icons/Icons.js";
import CardHeader from "../Card/CardHeader";
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import IconBox from "../Icons/IconBox";
import BarChart from "../chartjs/BarChart";
import axios from "axios";
const MainData = () => {
  const [orders, setOrders] = useState(0);
  const [sales, setSales] = useState(0);
  const [product, setProduct] = useState(0);
  const [user, setUser] = useState(0);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://mock-server-686g.onrender.com/blueRegister"
      );
      console.log(res.data);
        setUser(res.data.length)
    } catch (err) {
      console.error(err.response);
    }
  };
  const pp = async () => {
    try {
      const res = await axios.get(
        "https://mock-server-686g.onrender.com/products"
      );
      console.log(res.data);
        setProduct(res.data.length)
    } catch (err) {
      console.error(err.response);
    }
  };

  useEffect(() => {
    fetchData();
    pp();
  }, []);
  return (
    <>
      <MetaData title="Admin Dashboard" />

      <Box w={"100%"}>
        <Box w={"100%"} borderRadius={10}>
          <Flex gap={"2%"}>
            <Box bg={"#7c3aed"} w="25%" h={"80px"} borderRadius={20} pt={2}>
              <Text fontWeight={"bold"} fontSize={20}>
                Total Sales Amount
              </Text>
              <Text fontWeight={"bold"} fontSize={25} color="white">
                ₹ {sales}
              </Text>
            </Box>
            <Box bg={"#ef4444"} w="25%" h={"80px"} borderRadius={20} pt={2}>
              <Text fontWeight={"bold"} fontSize={20}>
                Total Orders
              </Text>
              <Text fontWeight={"bold"} fontSize={25} color="white">
                {orders}
              </Text>
            </Box>
            <Box bg={"#f59e0b"} w="25%" h={"80px"} borderRadius={20} pt={2}>
              <Text fontWeight={"bold"} fontSize={20}>
                Total Products
              </Text>
              <Text fontWeight={"bold"} fontSize={25} color="white">
                {product}
              </Text>
            </Box>
            <Box bg={"#10b981"} w="25%" h={"80px"} borderRadius={20} pt={2}>
              <Text fontWeight={"bold"} fontSize={20}>
                Total Users
              </Text>
              <Text fontWeight={"bold"} fontSize={25} color="white">
                {user}
              </Text>
            </Box>
          </Flex>
        </Box>
        {/* Welcome Card */}
        <Card bg={"black"} h={90} m="auto" mt="1%">
          <CardBody h={"full"}>
            <Flex alignItems={"center"} justifyContent="center" gap={"20%"}>
              <Box>
                <Text fontSize="sm" color="#f8e68a" fontWeight="bold">
                  Welcome back,
                </Text>
                <Text fontSize="28px" color="#f8e68a" fontWeight="bold" mb="18px">
                  Arpit Mishra
                </Text>
              </Box>
              <Text fontSize="md" color="#f8e68a" fontWeight="Bold">
                "Glad to see you again! <br />
                Ask me anything."
              </Text>
              <Button
                bg="black"
                color="#f8e68a"
                _hover={{ bg: "teal", color: "#f8e68a" }}
              >
                Tap To Record Login &gt;
              </Button>
            </Flex>
          </CardBody>
        </Card>
        {/* sales chart */}
        <Box w={"100%"} borderRadius={10} mt="1%" bg={"black"}>
          <SimpleGrid columns={2} spacing={5}>
            <Box borderRadius={10}>
              <Card p="28px 0px 0px 0px" bg={"black"}>
                <CardHeader mb="20px" ps="22px">
                  <Flex direction="column" alignSelf="flex-start">
                    <Text fontSize="lg" color="#f8e68a" fontWeight="bold" mb="6px">
                      Sales Overview
                    </Text>
                    <Text fontSize="md" fontWeight="medium" color="gray.400">
                      <Text as="span" color="green.400" fontWeight="bold">
                        (+2%) more
                      </Text>{" "}
                      in 2023
                    </Text>
                  </Flex>
                </CardHeader>
                <Box w="100%" minH={{ sm: "300px" }}>
                  <LineChart
                    lineChartData={lineChartDataDashboard}
                    lineChartOptions={lineChartOptionsDashboard}
                  />
                </Box>
              </Card>
            </Box>
            {/* active */}
            <Box border="2px solid blue" borderRadius={10}>
              <Card p="16px" bg={"black"}>
                <CardBody>
                  <Flex direction="column" w="100%">
                    <Box
                      bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                      borderRadius="20px"
                      display={{ sm: "flex", md: "block" }}
                      justify={{ sm: "center", md: "flex-start" }}
                      align={{ sm: "center", md: "flex-start" }}
                      minH={{ sm: "180px", md: "220px" }}
                      p={{ sm: "0px", md: "22px" }}
                    >
                      <BarChart
                        barChartOptions={barChartOptionsDashboard}
                        barChartData={barChartDataDashboard}
                      />
                    </Box>
                    <Flex
                      direction="column"
                      mt="24px"
                      mb="36px"
                      alignSelf="flex-start"
                    >
                      <Text
                        fontSize="lg"
                        color="#f8e68a"
                        fontWeight="bold"
                        mb="6px"
                      >
                        Active Users
                      </Text>
                      <Text fontSize="md" fontWeight="medium" color="gray.400">
                        <Text as="span" color="green.400" fontWeight="bold">
                          (+0%)
                        </Text>{" "}
                        Because it's an startup of BlueApple
                      </Text>
                    </Flex>
                    <SimpleGrid gap={{ sm: "12px" }} columns={4}>
                      <Flex direction="column">
                        <Flex alignItems="center">
                          <IconBox
                            as="box"
                            h={"30px"}
                            w={"30px"}
                            bg="brand.200"
                            me="6px"
                          >
                            <WalletIcon h={"15px"} w={"15px"} color="#fff" />
                          </IconBox>
                          <Text fontSize="sm" color="#f8e68a">
                            Users
                          </Text>
                        </Flex>
                        <Text
                          fontSize={{ sm: "md", lg: "lg" }}
                          color="#f8e68a"
                          fontWeight="bold"
                          mb="6px"
                          my="6px"
                        >
                          {user}
                        </Text>
                        <Progress
                          colorScheme="brand"
                          bg="#2D2E5F"
                          borderRadius="30px"
                          h="5px"
                          value={20}
                        />
                      </Flex>
                      <Flex direction="column">
                        <Flex alignItems="center">
                          <IconBox
                            as="box"
                            h={"30px"}
                            w={"30px"}
                            bg="brand.200"
                            me="6px"
                          >
                            <RocketIcon h={"15px"} w={"15px"} color="#fff" />
                          </IconBox>
                          <Text fontSize="sm" color="#f8e68a">
                            views
                          </Text>
                        </Flex>
                        <Text
                          fontSize={{ sm: "md", lg: "lg" }}
                          color="#f8e68a"
                          fontWeight="bold"
                          mb="6px"
                          my="6px"
                        >
                          5k
                        </Text>
                        <Progress
                          colorScheme="brand"
                          bg="#2D2E5F"
                          borderRadius="30px"
                          h="5px"
                          value={90}
                        />
                      </Flex>
                      <Flex direction="column">
                        <Flex alignItems="center">
                          <IconBox
                            as="box"
                            h={"30px"}
                            w={"30px"}
                            bg="brand.200"
                            me="6px"
                          >
                            <CartIcon h={"15px"} w={"15px"} color="#fff" />
                          </IconBox>
                          <Text fontSize="sm" color="#f8e68a">
                            Sales
                          </Text>
                        </Flex>
                        <Text
                          fontSize={{ sm: "md", lg: "lg" }}
                          color="#f8e68a"
                          fontWeight="bold"
                          mb="6px"
                          my="6px"
                        >
                          {sales}$
                        </Text>
                        <Progress
                          colorScheme="brand"
                          bg="#2D2E5F"
                          borderRadius="30px"
                          h="5px"
                          value={30}
                        />
                      </Flex>
                      <Flex direction="column">
                        <Flex alignItems="center">
                          <IconBox
                            as="box"
                            h={"30px"}
                            w={"30px"}
                            bg="brand.200"
                            me="6px"
                          >
                            <StatsIcon h={"15px"} w={"15px"} color="#fff" />
                          </IconBox>
                          <Text fontSize="sm" color="#f8e68a">
                            Product
                          </Text>
                        </Flex>
                        <Text
                          fontSize={{ sm: "md", lg: "lg" }}
                          color="#f8e68a"
                          fontWeight="bold"
                          mb="6px"
                          my="6px"
                        >
                          {product}
                        </Text>
                        <Progress
                          colorScheme="brand"
                          bg="#2D2E5F"
                          borderRadius="30px"
                          h="5px"
                          value={50}
                        />
                      </Flex>
                    </SimpleGrid>
                  </Flex>
                </CardBody>
              </Card>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default MainData;
