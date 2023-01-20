import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
// Custom components
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import { Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";

import OrderTableRow from "./OrderTableRow";
const OrderTable = () => {
  return (
    <Box w={"100%"} py={"1%"} pl="1%" pr="1%" bg={"white"}>
      <Flex gap={"1%"}>
        <Box
          w={"20%"}
          h="90vh"
          border={"2px solid black"}
          bg={"black"}
          borderRadius={10}
        >
          <Sidebar />
        </Box>
        <Box
          w={"80%"}
          h="90vh"
          borderRadius={10}
          bg="black"
          pl={"1%"}
          pr={"1%"}
        >
          <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
            <CardHeader p="6px 0px 22px 0px">
              <Text
                fontSize="22px"
                color="#fff"
                fontWeight="bold"
                textDecoration={"underline"}
              >
                ORDER DETAILS
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color="#fff">
                <Thead>
                  <Tr my=".8rem" ps="0px" color="gray.400">
                    <Th
                      ps="0px"
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      ORDERS
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      PAYMENT ID
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      STAUS
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      PRICE
                    </Th>
                    <Th borderBottomColor="#56577A">DONE</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <OrderTableRow
                    name="Null"
                    logo=""
                    email=""
                    subdomain="real payment"
                    domain="Generate on"
                    status="null"
                    date="00"
                  />
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrderTable;
