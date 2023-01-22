import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import MetaData from "../../Components/Home/MetaData";

const Bag = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const handleCheckout = () => {
    onOpen();
  };
  const handlePay = () => {
    onClose();
    toast({
      title: "Payment Done",
      description: "Redirecting To The Home.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    window.location.replace("/");
  };
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <MetaData title={"BlueApple Bag / Checkout"} />
      <Box w={"70%"} m="auto" textAlign={"left"} pl={5} py={5}>
        <Text fontWeight={"semibold"} fontSize={40}>
          Review your bag.
        </Text>
        <Text fontSize={20}>Free delivery and free returns.</Text>
        <Flex mt={5}>
          <Box>
            <Image src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPPJ3?" />
          </Box>
          <Box>
            <Flex gap={20}>
              <Box pl={2}>
                <Flex gap={5}>
                  <Text fontWeight={"semibold"} fontSize={22}>
                    iPhone 14 Pro Leather Case with
                    <br /> MagSafe - Ink
                  </Text>
                  <Select
                    placeholder="1"
                    w={"60px"}
                    borderRadius={20}
                    colorScheme="blue"
                  >
                    <option value="option1">2</option>
                    <option value="option2">3</option>
                    <option value="option3">4</option>
                    <option value="option1">5</option>
                    <option value="option2">6</option>
                    <option value="option3">7</option>
                  </Select>
                </Flex>
                <Text>Pay 0% APR for 12 months:</Text>
              </Box>
              <Box>
                <Text fontWeight={"semibold"} fontSize={22}>
                  $59.00
                </Text>
                <Text mt={"40%"}>$4.91/mo.</Text>
                <Text
                  mt={5}
                  color="blue"
                  fontWeight={"semibold"}
                  fontSize={20}
                  _hover={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Remove
                </Text>
              </Box>
            </Flex>
            <Image
              src="https://i.ibb.co/71S1Qvg/Screenshot-20230122-181302.png"
              w={"80%"}
            />
          </Box>
        </Flex>
        <Box w={"80%"} ml={"20%"}>
          <Text fontWeight={"semibold"} fontSize={22}>
            How would you like to check out?
          </Text>
          <Flex textAlign={"center"} gap={2} mt={2}>
            <Box w={"45%"} m="auto" bg="#f5f5f7" borderRadius={10}>
              <Text fontSize={20} fontWeight="semibold">
                Pay Monthly
              </Text>
              <Text fontSize={20} mt={2} fontWeight="semibold">
                with Apple Card
              </Text>
              <Text fontSize={20} mt={2} fontWeight="semibold">
                $4.91/mo. at 0% APR◊
              </Text>
              <Button
                colorScheme={"blue"}
                mt={2}
                h={55}
                w="90%"
                fontWeight={"semibold"}
              >
                Check Out With Apple Card
                <br />
                Monthly Installments
              </Button>
              <Text mt={2}>
                $0.00 due today, which includes
                <br />
                applicable full-price items, down
                <br />
                payments, shipping, and taxes.
              </Text>
            </Box>
            <Box w={"45%"} m="auto" h={260} bg="#f5f5f7" borderRadius={10}>
              <Text fontSize={20} fontWeight="semibold" mt={2}>
                Pay in Full
              </Text>
              <Text fontSize={20} fontWeight="semibold" mt={2}>
                $59.00
              </Text>
              <Button
                colorScheme={"blue"}
                mt={"13%"}
                h={55}
                w="90%"
                onClick={handleCheckout}
                fontWeight={"semibold"}
                fontSize={20}
              >
                Check Out
              </Button>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent bg="black" color={"white"}>
                  <ModalHeader>Please Fill Card Details</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Debit Card Credential</FormLabel>
                      <Input ref={initialRef} placeholder="Debit Card" />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>CVV</FormLabel>
                      <Input placeholder="Secret" type={"password"} />
                    </FormControl>
                    <Checkbox mt={"5%"} isInvalid>
                      If Agree Please Mark
                    </Checkbox>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" onClick={handlePay} mr={5}>
                      Pay
                    </Button>
                    <Button onClick={onClose} colorScheme="cyan">
                      Cancel
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Bag;
