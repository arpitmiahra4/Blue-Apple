import React from 'react'
import {
  Box,
  Container,
  Divider,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'13px'} mb={2}>
      {children}
    </Text>
  );
};
const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'5xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }}>
          <Stack align={'flex-start'}>
            <ListHeader>Shop and Learn</ListHeader>
            <Link href={'#'} fontSize="12px">Store</Link>
            <Link href={'#'} fontSize="12px">Mac</Link>
            <Link href={'#'} fontSize="12px">iPad</Link>
            <Link href={'#'} fontSize="12px">iPhone</Link>
            <Link href={'#'} fontSize="12px">Watch</Link>
            <Link href={'#'} fontSize="12px">AirPods</Link>
            <Link href={'#'} fontSize="12px">TV & Home</Link>
            <Link href={'#'} fontSize="12px">AirTag</Link>
            <Link href={'#'} fontSize="12px">Accessories</Link>
            <Link href={'#'} fontSize="12px">Gift Cards</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Services</ListHeader>
            <Link href={'#'} fontSize="12px">Apple Music</Link>
            <Link href={'#'} fontSize="12px">Apple TV+</Link>
            <Link href={'#'} fontSize="12px">Apple Arcade</Link>
            <Link href={'#'} fontSize="12px">iCloud</Link>
            <Link href={'#'} fontSize="12px">Apple One</Link>
            <Link href={'#'} fontSize="12px">Apple Books</Link>
            <Link href={'#'} fontSize="12px">Apple Podcasts</Link>
            <Link href={'#'} fontSize="12px">App Store</Link>
            <ListHeader>Account</ListHeader>
            <Link href={'#'} fontSize="12px">Manage Your Apple ID</Link>
            <Link href={'#'} fontSize="12px">Apple Store Account</Link>
            <Link href={'#'} fontSize="12px">iCloud.com</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Apple Store</ListHeader>
            <Link href={'#'} fontSize="12px">Ways to Buy</Link>
            <Link href={'#'} fontSize="12px">Apple Trade In</Link>
            <Link href={'#'} fontSize="12px">Recycling Programme</Link>
            <Link href={'#'} fontSize="12px">Order Status</Link>
            <Link href={'#'} fontSize="12px">Shopping Help</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>For Business</ListHeader>
            <Link href={'#'} fontSize="12px">Apple and Business</Link>
            <ListHeader>For Education</ListHeader>
            <Link href={'#'} fontSize="12px">Apple and Education</Link>
            <Link href={'#'} fontSize="12px">Shop for Education</Link>
            <Link href={'#'} fontSize="12px">Shop for University</Link>
            <ListHeader>For Healthcare</ListHeader>
            <Link href={'#'} fontSize="12px">Apple in Healthcare</Link>
            <Link href={'#'} fontSize="12px">Health on Apple Watch</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Apple Values</ListHeader>
            <Link href={'#'} fontSize="12px">Accessibility</Link>
            <Link href={'#'} fontSize="12px">Education</Link>
            <Link href={'#'} fontSize="12px">Environment</Link>
            <Link href={'#'} fontSize="12px">Privacy</Link>
            <Link href={'#'} fontSize="12px">Supplier Responsibility</Link>
            <ListHeader>About Apple</ListHeader>
            <Link href={'#'} fontSize="12px">Newsroom</Link>
            <Link href={'#'} fontSize="12px">Apple Leadership</Link>
            <Link href={'#'} fontSize="12px">Career Opportunities</Link>
            <Link href={'#'} fontSize="12px">Investors</Link>
            <Link href={'#'} fontSize="12px">Ethics & Compliance</Link>
            <Link href={'#'} fontSize="12px">Events</Link>
            <Link href={'#'} fontSize="12px">Contact Apple</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={5} m="auto">
      <Box  w="67%" m={"auto"} textAlign="left">
      <Flex gap={"5px"}>
      <Text fontSize={14} color="gray" >More ways to shop: </Text>
      <Text fontSize={14} color={"blue"}>Find a retailer</Text> 
      <Text fontSize={14} color="gray" >near you. Or call 000800 040 1966.</Text>
      </Flex>
      <Divider mt={"10px"} colorScheme="gray"/>
      <Flex gap={10} alignItems="center">
        <Text color={"gray"} pt={1} fontSize={'sm'}>
        Copyright © 2023 Apple Inc. All rights reserved.
        </Text>
        <Text color={"gray"} fontSize={'sm'} pt={1}>Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map</Text>
        <Text color={"gray"} fontSize={'sm'} ml="22%" pt={1}>India</Text>
        </Flex>
      </Box>
      </Box>
    </Box>
  )
}

export default Footer