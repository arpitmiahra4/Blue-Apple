import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function ProductTableRow(props) {
  const { logo, name, email, subdomain, domain, status, date, lastItem } =
    props;

  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
        ps="0px"
        border={lastItem ? "none" : null}
        borderBottomColor="#56577A"
      >
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar
            src={logo}
            w="50px"
            borderRadius="12px"
            me="18px"
            border="none"
          />
          <Flex direction="column">
            <Text
              fontSize="sm"
              color="#fff"
              fontWeight="normal"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td
        border={lastItem ? "none" : null}
        borderBottomColor="#56577A"
        minW="150px"
      >
        <Flex direction="column">
          <Text fontSize="sm" color="#fff" fontWeight="normal">
            {domain}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {subdomain}
          </Text>
        </Flex>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor="#56577A">
        <Badge
          bg={status === "IN" ? "green.400" : "transparent"}
          color={status === "IN" ? "white" : colorStatus}
          fontSize="sm"
          p="3px 10px"
          borderRadius="8px"
          border={status === "IN" ? "none" : "1px solid #fff"}
          fontWeight="normal"
        >
          {status}
        </Badge>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor="#56577A">
        <Text fontSize="sm" color="#fff" fontWeight="normal">
          {date}
        </Text>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor="#56577A">
        <Button p="0px" bg={"red"} variant="no-hover">
          <Text fontSize="sm" color="black" fontWeight="bold" cursor="pointer">
            Edit
          </Text>
        </Button>
      </Td>
    </Tr>
  );
}

export default ProductTableRow;
