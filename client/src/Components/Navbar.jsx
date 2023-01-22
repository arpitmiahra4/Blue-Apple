import {
  Box,
  useColorModeValue,
  useDisclosure,
  chakra,
  Flex,
  HStack,
  IconButton,
  VStack,
  CloseButton,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuGroup,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";
const Navbar = () => {
  const bg = useColorModeValue("#313132");
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        color="white"
        w="100%"
        px={{
          base: 2,
          sm: 4,
        }}
        py={1}
        shadow="md"
      >
        <Flex
          alignItems="center"
          w="100%"
          justifyContent="space-between"
          mx="auto"
        >
          <HStack display="flex" margin={"auto"} w="100%" alignItems="center">
            <Box
              w="100%"
              margin={"auto"}
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<FcMenu size={50} />}
                onClick={mobileNav.onOpen}
              />

              <Flex
                margin={"auto"}
                justifyContent="center"
                w={"100%"}
                alignItems="center"
              >
                <Link to="/">
                  <Image
                    src="https://www.freeiconspng.com/thumbs/apple-logo-icon/blue-apple-logo-icon-0.png"
                    w={"40px"}
                    m="auto"
                  />
                </Link>
              </Flex>
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Link to="/store">
                  <Button
                    fontWeight="normal"
                    fontSize={18}
                    _hover={{ bg: "#313132", color: "white" }}
                    w="full"
                    variant="ghost"
                  >
                    Store
                  </Button>
                </Link>
                <Link to="/mac">
                  <Button
                    fontWeight="normal"
                    fontSize={18}
                    _hover={{ bg: "#313132", color: "white" }}
                    w="full"
                    variant="ghost"
                  >
                    Mac
                  </Button>
                </Link>
                <Link to="/ipad">
                  <Button
                    fontWeight="normal"
                    fontSize={18}
                    _hover={{ bg: "#313132", color: "white" }}
                    w="full"
                    variant="ghost"
                  >
                    iPad
                  </Button>
                </Link>
                <Link to="/iphone">
                  <Button
                    fontWeight="normal"
                    fontSize={18}
                    w="full"
                    _hover={{ bg: "#313132", color: "white" }}
                    variant="ghost"
                  >
                    iPhone
                  </Button>
                </Link>
                <Link to="/watch">
                  <Button
                    fontWeight="normal"
                    fontSize={18}
                    w="full"
                    _hover={{ bg: "#313132", color: "white" }}
                    variant="ghost"
                  >
                    Watch
                  </Button>
                </Link>
                <Link to="/">
                  <Button
                    fontWeight="normal"
                    fontSize={18}
                    w="full"
                    variant="ghost"
                    _hover={{ bg: "#313132", color: "white" }}
                  >
                    AirPods
                  </Button>
                </Link>
                <Link to="/">
                  <Button
                    fontWeight="normal"
                    fontSize={18}
                    w="full"
                    variant="ghost"
                    _hover={{ bg: "#313132", color: "white" }}
                  >
                    Tv & Home
                  </Button>
                </Link>
                <Link to="/">
                  <Button
                    fontWeight="normal"
                    fontSize={18}
                    w="full"
                    variant="ghost"
                    _hover={{ bg: "#313132", color: "white" }}
                  >
                    Only On Apple
                  </Button>
                </Link>
                <Button
                  fontWeight="normal"
                  fontSize={18}
                  w="full"
                  _hover={{ bg: "#313132", color: "white" }}
                  variant="ghost"
                >
                  Accessories
                </Button>
                <Link to="/support">
                  <Button
                    _hover={{ bg: "#313132", color: "white" }}
                    fontWeight="normal"
                    fontSize={18}
                    w="full"
                    variant="ghost"
                  >
                    Support
                  </Button>
                </Link>
              </VStack>
            </Box>

            <HStack
              w="100%"
              justifyContent={"center"}
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Link to="/">
                <Image
                  src="https://www.freeiconspng.com/thumbs/apple-logo-icon/blue-apple-logo-icon-0.png"
                  mr="2%"
                  w={"20px"}
                />
              </Link>
              <Link to="/store">
                <Button
                  _hover={{ bg: "#313132", color: "white" }}
                  fontWeight="normal"
                  fontSize={13}
                  variant="ghost"
                  size="sm"
                >
                  Store
                </Button>
              </Link>
              <Link to="/mac">
                <Button
                  _hover={{ bg: "#313132", color: "white" }}
                  fontWeight="normal"
                  fontSize={13}
                  variant="ghost"
                  size="sm"
                >
                  Mac
                </Button>
              </Link>
              <Link to="/ipad">
                <Button
                  _hover={{ bg: "#313132", color: "white" }}
                  fontWeight="normal"
                  fontSize={13}
                  variant="ghost"
                  size="sm"
                >
                  iPad
                </Button>
              </Link>
              <Link to="/iphone">
                <Button
                  _hover={{ bg: "#313132", color: "white" }}
                  fontWeight="normal"
                  fontSize={13}
                  variant="ghost"
                  size="sm"
                >
                  iPhone
                </Button>
              </Link>
              <Link to="/watch">
                <Button
                  _hover={{ bg: "#313132", color: "white" }}
                  fontWeight="normal"
                  fontSize={13}
                  variant="ghost"
                  size="sm"
                >
                  Watch
                </Button>
              </Link>
              <Link to="/">
                <Button
                  _hover={{ bg: "#313132", color: "white" }}
                  fontWeight="normal"
                  fontSize={13}
                  variant="ghost"
                  size="sm"
                >
                  AirPods
                </Button>
              </Link>
              <Link to="/">
                <Button
                  _hover={{ bg: "#313132", color: "white" }}
                  fontWeight="normal"
                  fontSize={13}
                  variant="ghost"
                  size="sm"
                >
                  Tv & Home
                </Button>
              </Link>
              <Link to="/">
                <Button
                  _hover={{ bg: "#313132", color: "white" }}
                  fontWeight="normal"
                  fontSize={13}
                  variant="ghost"
                  size="sm"
                >
                  Only On Apple
                </Button>
              </Link>
              <Link to="/">
                <Button
                  _hover={{ bg: "#313132", color: "white" }}
                  fontWeight="normal"
                  fontSize={13}
                  variant="ghost"
                  size="sm"
                >
                  Accessories
                </Button>
              </Link>
              <Link to="/support">
                <Button
                  _hover={{ bg: "#313132", color: "white" }}
                  fontWeight="normal"
                  fontSize={13}
                  variant="ghost"
                  size="sm"
                >
                  Support
                </Button>
              </Link>
              <Menu closeOnSelect={true}>
                <MenuButton as={Box} size={22} color="white" bg={"#313132"}>
                  <BsPersonFill size={20} />
                </MenuButton>
                <MenuList bg={"#313132"}>
                  <MenuGroup fontSize={20} title="Profile" bg={"#313132"}>
                  <Link to="/login"><MenuItem bg={"#313132"}>Login</MenuItem></Link>
                  <Link to="/register"><MenuItem bg={"#313132"}>Register</MenuItem></Link>
                  <Link to="/admin"><MenuItem bg={"#313132"}>BlueApple DashBoard</MenuItem></Link>
                  </MenuGroup>
                </MenuList>
              </Menu>
              <Button
                _hover={{ bg: "#313132", color: "white" }}
                color="white"
                variant="ghost"
                size="sm"
              >
                <BsFillBagFill size={18} />
              </Button>
            </HStack>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;
