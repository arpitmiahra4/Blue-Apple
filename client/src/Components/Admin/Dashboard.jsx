import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MainData from "./MainData";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
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
        <Box w={"80%"} h="90vh" borderRadius={10}>
          <MainData />
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
