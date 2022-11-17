import React from "react";
import Head from "next/head";
import Image from "next/image";
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
  List,
  ListIcon,
  ListItem,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import CryptoChartTape from "../components/common/CryptoChartTape";
import { mining_place } from "../assets/images/list";

function Affilate() {
  return (
    <Box>
      <Navbar />
      <Box
        w="full"
        h={{ base: "xs", md: "xs" }}
        id="contact"
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
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
                <Text>Affilate</Text>
              </Heading>
            </Box>
          </Center>
        </VStack>
      </Box>

      <Container maxW={"6xl"} my={10}>
        <Box p={4}>
          <Stack
            spacing={4}
            as={Container}
            maxW={"3xl"}
            textAlign={{ base: "left", md: "center" }}
            mt={10}
          >
            <Heading
              lineHeight={"110%"}
              fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
              fontWeight="normal"
              mb={3}
            >
              <Text>Cryptoverse Affiliate Network</Text>
            </Heading>
            <Text mt={10}>
              The Cryptoverse platform welcomes you to become our partner and
              offers you a share of our mining commission for attracting new
              miners to the platform.
            </Text>
          </Stack>

          <Container maxW={"6xl"} mt={0}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }}>
              <Box p={{ base: 2, md: 12 }} borderRadius={"10px"}>
                <Text fontWeight={'normal'} my={{ base: 10, md: 4 }} fontSize="xl">
                  Boost Your Affiliate Commissions by 100%
                </Text>
                <Text mt={2}>
                  Cryptoverse Affiliate Program offers you lifetime commission
                  payouts and allows you to build a full-scale business with no
                  initial investments with a 4 level referral system.
                </Text>

                <Text fontWeight={'normal'} my={"4"} fontSize="xl" mt={10}>
                  How to Grow Your Referral Network Faster?
                </Text>
                <Text mt={2}>
                  Use these simple steps to reach a wider audience and bring in
                  more referrals.
                </Text>

                <List spacing={3} textAlign="start" mt={10}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="yellow.500" />
                    Share your referral link with your friends on Facebook,
                    Twitter, and other Social Media platforms
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="yellow.500" />
                    Participate in trading discussions in relevant forums and
                    Telegram/Facebook groups and promote your referral link
                  </ListItem>

                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="yellow.500" />
                    Post a blog describing the benefits of mining on
                    Cryptoverse
                  </ListItem>

                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="yellow.500" />
                    Make a YouTube video and review Cryptoverse and its benefits
                  </ListItem>
                </List>
              </Box>

              <Box p={12} borderRadius="10px">
                <Image src={mining_place} alt="" />
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
      </Container>

      <CryptoChartTape />
      <Footer />
    </Box>
  );
}

export default Affilate;