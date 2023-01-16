import React from 'react'
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'14px'} mb={2}>
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
            <Link href={'#'}>Store</Link>
            <Link href={'#'}>Mac</Link>
            <Link href={'#'}>iPad</Link>
            <Link href={'#'}>iPhone</Link>
            <Link href={'#'}>Watch</Link>
            <Link href={'#'}>AirPods</Link>
            <Link href={'#'}>TV & Home</Link>
            <Link href={'#'}>AirTag</Link>
            <Link href={'#'}>Accessories</Link>
            <Link href={'#'}>Gift Cards</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Services</ListHeader>
            <Link href={'#'}>Apple Music</Link>
            <Link href={'#'}>Apple TV+</Link>
            <Link href={'#'}>Apple Arcade</Link>
            <Link href={'#'}>iCloud</Link>
            <Link href={'#'}>Apple One</Link>
            <Link href={'#'}>Apple Books</Link>
            <Link href={'#'}>Apple Podcasts</Link>
            <Link href={'#'}>App Store</Link>
            <ListHeader>Account</ListHeader>
            <Link href={'#'}>Manage Your Apple ID</Link>
            <Link href={'#'}>Apple Store Account</Link>
            <Link href={'#'}>iCloud.com</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Apple Store</ListHeader>
            <Link href={'#'}>Ways to Buy</Link>
            <Link href={'#'}>Apple Trade In</Link>
            <Link href={'#'}>Recycling Programme</Link>
            <Link href={'#'}>Order Status</Link>
            <Link href={'#'}>Shopping Help</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>For Business</ListHeader>
            <Link href={'#'}>Apple and Business</Link>
            <ListHeader>For Education</ListHeader>
            <Link href={'#'}>Apple and Education</Link>
            <Link href={'#'}>Shop for Education</Link>
            <Link href={'#'}>Shop for University</Link>
            <ListHeader>For Healthcare</ListHeader>
            <Link href={'#'}>Apple in Healthcare</Link>
            <Link href={'#'}>Health on Apple Watch</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Apple Values</ListHeader>
            <Link href={'#'}>Accessibility</Link>
            <Link href={'#'}>Education</Link>
            <Link href={'#'}>Environment</Link>
            <Link href={'#'}>Privacy</Link>
            <Link href={'#'}>Supplier Responsibility</Link>
            <ListHeader>About Apple</ListHeader>
            <Link href={'#'}>Newsroom</Link>
            <Link href={'#'}>Apple Leadership</Link>
            <Link href={'#'}>Career Opportunities</Link>
            <Link href={'#'}>Investors</Link>
            <Link href={'#'}>Ethics & Compliance</Link>
            <Link href={'#'}>Events</Link>
            <Link href={'#'}>Contact Apple</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={5} border="2px solid red" m="auto">
      <></>
      <Text fontSize={14}>More ways to shop: Find a retailer near you. Or call 000800 040 1966.</Text>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
        Copyright © 2023 Apple Inc. All rights reserved.
        </Text>
      </Box>
    </Box>
  )
}

export default Footer