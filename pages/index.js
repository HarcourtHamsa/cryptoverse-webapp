import {
  Box,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Flex,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Container, Button } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import CryptoChartTape from "../components/common/CryptoChartTape";
import { MarketOverview } from "react-ts-tradingview-widgets";
import {
  secure,
  options,
  research,
  devices,
  mining_place,
} from "../assets/images/list";

import Footer from "../components/common/Footer";
import Hero from "../components/common/Hero";
import Navbar from "../components/common/Navbar";
import { InvestmentPlanCard } from "./dashboard/invest";

function index() {
  return (
    <div style={{ backgroundColor: "#181A20" }}>
      <Navbar />
      <Hero />
      <Container
        maxW={{ md: "90%", base: "100%" }}
        bg="#181A20"
        overflow="hidden"
      >
        <MarketOverview
          colorTheme="dark"
          width="100%"
          height={800}
        ></MarketOverview>
      </Container>

      <Box p={4} mt={"36"} color="white">
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mt={10}
        >
          <Heading
            lineHeight={"110%"}
            fontSize={{ base: "2xl", sm: "3xl", md: "3xl" }}
            fontWeight="bold"
            mb={3}
          >
            <Text fontWeight={"normal"}>Build your crypto portfolio</Text>
          </Heading>
          <Text mt={10}>
            Thousands of people from around the world are investing in online
            cloud mining. Some of them mine once a week, others every day, but
            they are all a part of the online Mining community.
          </Text>
        </Stack>

        <Container maxW={"6xl"} mt={10} textAlign="center">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box p={12} borderRadius={"10px"}>
              <Image src={secure} alt="" />
              <Text fontWeight={"normal"} my={"4"}>
                Secure Storage
              </Text>
              <Text mt={2}>
                We store the vast majority of the digital assets in secure
                offline storage.
              </Text>
            </Box>

            <Box p={12} borderRadius={"10px"}>
              <Image src={research} alt="" />
              <Text fontWeight={"normal"} my={"4"}>
                Research & Development
              </Text>
              <Text mt={2}>
                We want to transform the technology to innovation products.
              </Text>
            </Box>

            <Box p={12} borderRadius="10px">
              <Image src={options} alt="" />
              <Text fontWeight={"normal"} my={"4"}>
                Various Options
              </Text>
              <Text mt={2}>
                A wide range of models for both experienced and beginner miners.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Box my={"20"}>
        <Stack spacing={4} as={Container} maxW={"6xl"} mt={10}>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2 }}
            spacing={6}
            color="white"
          >
            <Image src={devices} alt="" />
            <Box p={12} borderRadius={"10px"}>
              <Heading
                lineHeight={"110%"}
                fontSize={{ base: "2xl", sm: "3xl", md: "3xl" }}
                fontWeight="normal"
                mb={3}
              >
                <Text>Your trusted crypto exchange</Text>
              </Heading>
              <Text mt={10}>
                Miningplace is an experienced bitcoin mining community dedicated
                to providing the best cloud mining experience and top-notch
                customer service. With our professionalism, sincerity, and
                efforts, we have gained trust and support from worldwide
                customers.
              </Text>

              <Text mt={10}>
                We’re building miningplace that will bring anyone who believes
                in bitcoin to join the digital cryptocurrency revolution. The
                world is moving on to this revolution at an unprecedented pace.
              </Text>

              <Text mt={10}>
                Now is your time. With bit-cloudminer.co you can start mining
                bitcoin with ease, confidence and trust. Whether you’re a first
                time miner or a professional has got you both covered!
              </Text>

              {/* HERE !!! */}
              <Button
                mt={10}
                colorScheme={"yellow"}
                as="a"
                href="/about"
                size="lg"
                fontSize="sm"
                fontWeight="normal"
                rounded={4}
              >
                Learn More
              </Button>
            </Box>
          </SimpleGrid>
        </Stack>
      </Box>

      <Flex alignItems="center" justifyContent="center" h={"sm"}>
        <Container maxW={{ md: "80%", base: "90%" }}>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={10}
            color="white"
            // alignItems={'center'}
          >
            <Box>
              <Text
                my={"2"}
                fontSize={{ base: "3xl" }}
                fontWeight="normal"
                lineHeight={"110%"}
              >
                $76 billion
              </Text>
              <Text>24h trading volume on Binance exchange</Text>
            </Box>
            <Box>
              <Text
                my={"2"}
                fontSize={{ base: "3xl" }}
                fontWeight="normal"
                lineHeight={"110%"}
              >
                6000
              </Text>
              <Text>Profitable trades</Text>
            </Box>

            <Box>
              <Text
                my={"2"}
                fontSize={{ base: "3xl" }}
                fontWeight="normal"
                lineHeight={"110%"}
              >
                120 million
              </Text>
              <Text>Registered users</Text>
            </Box>

            <Box>
              <Text
                my={"2"}
                fontSize={{ base: "3xl" }}
                fontWeight="normal"
                lineHeight={"110%"}
              >
                0.10%
              </Text>
              <Text>Lowest transaction fees</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Flex>

      <Box h={{ md: "2xl", base: "fit-content" }} id="features">
        {/* <div id="overlay"></div> */}
        <Flex alignItems="center" justifyContent="center" h="inherit">
          <Container maxW={{ md: "80%", base: "90%" }}>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 2 }}
              spacing={10}
              color="black"
              zIndex={-1}
            >
              <Box color={"white"}>
                <Heading
                  lineHeight={"110%"}
                  fontSize={{ base: "2xl", sm: "3xl", md: "3xl" }}
                  fontWeight="normal"
                  mb={3}
                >
                  <Text color="white">
                    Explore Quality{" "}
                    <span style={{ color: "goldenrod" }}>
                      Mining Technology
                    </span>
                  </Text>
                </Heading>
                <Text mt={10}>
                  We at internotchtrade offer you the fastest and the most legit
                  way to successfully accumulate your BTC. Our sophisticated
                  technology does all the hard work, making sure that every
                  customer is 100% satisfied and that every mining goes through
                  smoothly.
                </Text>

                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 2 }}
                  spacing={10}
                  color="white"
                  zIndex={-1}
                  mt={10}
                >
                  <List spacing={3} textAlign="start">
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="yellow.500" />
                      Own Data Centers
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="yellow.500" />
                      24/7 Technical Support
                    </ListItem>

                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="yellow.500" />
                      99.9% Uptime Guarantee
                    </ListItem>

                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="yellow.500" />
                      Instant Setup
                    </ListItem>
                  </List>
                </SimpleGrid>
              </Box>

              <Box>
                <Image src={mining_place} alt="" />
              </Box>
            </SimpleGrid>
          </Container>
        </Flex>
      </Box>

      {/* <Container maxW={"6xl"} mb={20}>
        <Heading
          lineHeight={"110%"}
          fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
          fontWeight="bold"
          mb={3}
          textAlign="center"
        >
          <Text>Investment Plans</Text>
        </Heading>
        <Text fontSize="1rem" textAlign="center">
          Choose a plan that suites you
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 5, lg: 8 }}
          mt={30}
        >
          <InvestmentPlanCard
            title={"Basic Plan"}
            priceRange={"$1,000 - $5.000"}
            minimumAmount={"1,000"}
            dailyProfit={"5.00"}
            duration={"2 days"}
            minimumReturn={"2,010"}
          />
          <InvestmentPlanCard
            title={"Silver Plan"}
            priceRange={"$5,000 - $10,000"}
            minimumAmount={"5,000"}
            dailyProfit={"7.00"}
            duration={"2 days"}
            minimumReturn={"5,560"}
          />
          <InvestmentPlanCard
            title={"Gold Plan"}
            priceRange={"$10,000 - $15,000"}
            minimumAmount={"10,000"}
            dailyProfit={"9.00"}
            duration={"2 days"}
            minimumReturn={"9,200"}
          />
        </SimpleGrid>
      </Container> */}

      <CryptoChartTape />
      <Footer />
    </div>
  );
}

export default index;
