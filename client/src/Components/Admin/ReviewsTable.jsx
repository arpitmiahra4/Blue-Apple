import { Box, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
// Custom components
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import { Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import TablesProjectRow from "./TablesProjectRow";
import { tablesProjectData } from "./variables/general";
import { AiFillCheckCircle } from "react-icons/ai";
const ReviewsTable = () => {
  return (
    <Box w={"100%"} py={"1%"} pl="1%" pr="1%" bg={"white"}>
      <Flex gap={"1%"}>
        <Box w={"20%"} h="90vh" bg={"black"} borderRadius={10}>
          <Sidebar />
        </Box>
        <Box w={"80%"} h="90vh" borderRadius={10} bg="black" pl="2%">
          <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
            <CardHeader p="6px 0px 22px 0px">
              <Flex direction="column">
                <Text
                  fontSize="lg"
                  color="#fff"
                  fontWeight="bold"
                  textDecoration={"underline"}
                >
                  Review By Happy Users
                </Text>
                <Flex align="center">
                  <Icon
                    as={AiFillCheckCircle}
                    color="green.500"
                    w="15px"
                    h="15px"
                    me="5px"
                  />
                  <Text fontSize="sm" color="gray.400" fontWeight="normal">
                    <Text fontWeight="bold" as="span" color="gray.400">
                      +30%
                    </Text>{" "}
                    this month
                  </Text>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color="#fff">
                <Thead>
                  <Tr my=".8rem" ps="0px">
                    <Th
                      ps="0px"
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      User Name
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      Comment
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      Status
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      Review
                    </Th>
                    <Th borderBottomColor="#56577A">Ask</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {tablesProjectData.map((row, index, arr) => {
                    return (
                      <TablesProjectRow
                        name={row.name}
                        logo={row.logo}
                        status={row.status}
                        budget={row.budget}
                        progression={row.progression}
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
  );
};

export default ReviewsTable;
