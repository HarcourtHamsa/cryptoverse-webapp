import React from "react";
import Head from "next/head";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import {
  Stack,
  Heading,
  Container,
  Box,
  Text,
  SimpleGrid,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useBreakpointValue,
  Link,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import { MdMail } from "react-icons/md";
import { TickerTape } from "react-ts-tradingview-widgets";
import CryptoChartTape from "../components/common/CryptoChartTape";

function Contact() {
  return (
    <Box>
      <Navbar />
      <Box w="full" h={{ base: "xs", md: "xs" }} id="contact">
        <VStack
          w={"full"}
          h="full"
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, blackAlpha.600)"}
        >
          <Center w="inherit" h="inherit">
            <Box maxW="3xl" textAlign="left" px={{ base: 12, md: 0 }}>
              <Heading
                // fontWeight={600}
                fontSize={{ base: "2xl", sm: "3xl", md: "3xl" }}
                lineHeight={"110%"}
                color="white"
                fontWeight={'normal'}
              >
                <Text>Contact Us</Text>
              </Heading>
            </Box>
          </Center>
        </VStack>
      </Box>

      <Container maxW={"6xl"} mb={20}>
        <SimpleGrid
          columns={{ base: 1, xl: 1 }}
          spacing={"20"}
          mt={1}
          w="inherit"
          mx={"auto"}
        >
          <Stack
            spacing={4}
            mx={"auto"}
            w={{ base: "full", md: "80%" }}
            py={12}
          >
            <Box
              rounded={"md"}
              // boxShadow={"lg"}
              w={{ base: "100%", md: "100%" }}
              p={8}
            >
              <form>
                <Stack spacing={4}>
                  <Box textAlign="center">
                    <Heading
                      // fontWeight={600}
                      fontSize={{ base: "3xl" }}
                      lineHeight={"110%"}
                      fontWeight="normal"
                    >
                      <Text>Leave a message</Text>
                    </Heading>
                    <Flex
                      gap={2}
                      mt={6}
                      bg="black"
                      w="fit-content"
                      mx="auto"
                      mb={10}
                      p={3}
                      rounded="full"
                      justifyContent="center"
                      color="white"
                    >
                      <MdMail size={25} />
                      <Link>support@cryptoverse.com</Link>
                    </Flex>
                  </Box>
                  <FormControl id="email">
                    <FormLabel fontWeight="normal">Full Name</FormLabel>
                    <Input type="text" p={"6"} id="name" name="name" />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel fontWeight="normal">Email address</FormLabel>
                    <Input type="email" p={"6"} id="email" name="email" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel fontWeight="normal">Message</FormLabel>
                    <Textarea type="text" p={6} id="message" name="message" />
                  </FormControl>
                  <Stack spacing={10}>
                    <Button
                      colorScheme="yellow"
                      fontWeight="normal"
                      type="submit"
                      mt={6}
                      p={6}
                      size="xl"
                      // h={10}
                      rounded={0}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Stack>
              </form>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <CryptoChartTape />
      <Footer />
    </Box>
  );
}

export default Contact;