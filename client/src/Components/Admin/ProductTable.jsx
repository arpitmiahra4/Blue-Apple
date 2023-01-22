import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
// Custom components
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import { Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import ProductTableRow from "./ProductTableRow";
import { ORDERTableData } from "./variables/general";
import MetaData from "../Home/MetaData";
const ProductTable = () => {
  return (
    <>
      <MetaData title="Admin ProductTable" />
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
                  color="#f8e68a"
                  fontWeight="bold"
                  textDecoration={"underline"}
                >
                  PRODUCT DETAILS
                </Text>
              </CardHeader>
              <CardBody>
                <Table variant="simple" color="#f8e68a">
                  <Thead>
                    <Tr my=".8rem" ps="0px" color="#f8e68a">
                      <Th
                        ps="0px"
                        color="#f8e68a"
                        fontFamily="Plus Jakarta Display"
                        borderBottomColor="#56577A"
                      >
                        All Products
                      </Th>
                      <Th
                        color="#f8e68a"
                        fontFamily="Plus Jakarta Display"
                        borderBottomColor="#56577A"
                      >
                        CATEGORY
                      </Th>
                      <Th
                        color="#f8e68a"
                        fontFamily="Plus Jakarta Display"
                        borderBottomColor="#56577A"
                      >
                        STOCK
                      </Th>
                      <Th
                        color="#f8e68a"
                        fontFamily="Plus Jakarta Display"
                        borderBottomColor="#56577A"
                      >
                        PRICE
                      </Th>
                      <Th borderBottomColor="#56577A" color="#f8e68a">
                        Check
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody color="#f8e68a">
                    {ORDERTableData.map((row, index, arr) => {
                      return (
                        <ProductTableRow
                          name={row.name}
                          logo={row.logo}
                          email={row.email}
                          subdomain={row.subdomain}
                          domain={row.domain}
                          status={row.status}
                          date={row.date}
                          lastItem={index === arr.length - 1 ? true : false}
                        />
                      );
                    })}
                  </Tbody>
                </Table>
              </CardBody>
            </Card>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ProductTable;
