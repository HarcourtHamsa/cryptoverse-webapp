import React from "react";
import Image from "next/image";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import {
  Box,
  SimpleGrid,
  Container,
  Heading,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import {
  secure,
  options,
  research,
  bitcoin_network,
  mining_place,
} from "../assets/images/list";

function About() {
  return (
    <div>
      <Navbar />
      <Box h={{ base: "xs", md: "xs" }} id="about">
        <div id="overlay"></div>

        <Container maxW={{ md: "80%", base: "90%" }}>
          <Heading
            pt={20}
            lineHeight={"110%"}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            fontWeight="bold"
            color="white"
            textAlign="center"
            mb={3}
            zIndex={'popover'}

          >
            <Text>About Us </Text>
          </Heading>
        </Container>
      </Box>

      <Box my={"20"}>
        <Stack spacing={4} as={Container} maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={6}>
            <Image src={bitcoin_network} alt="" />
            <Box p={12} borderRadius={"10px"}>
              <Heading
                // lineHeight={"110%"}
                fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
                fontWeight="bold"
                mb={3}
              >
                <Text>Miningplace Awesome Service that Works for You!</Text>
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
            </Box>
          </SimpleGrid>
        </Stack>
      </Box>

      <Box p={4} mt={"36"} bg="gray.50">
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mt={10}
        >
          <Heading
            lineHeight={"110%"}
            fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
            fontWeight="bold"
            mb={3}
          >
            <Text>
              Invest in Cryptocurrency Bitcoin Mining & Easy Way to Mine Bitcoin
            </Text>
          </Heading>
          <Text mt={10}>
            Thousands of people from around the world are investing in online
            cloud mining. Some of them mine once a week, others every day, but
            they are all a part of the online Mining community.
          </Text>
        </Stack>

        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box p={12} borderRadius={"10px"}>
              <Image src={secure} alt="" />
              <Text fontWeight={600} my={"4"}>
                Secure Storage
              </Text>
              <Text mt={2}>
                We store the vast majority of the digital assets in secure
                offline storage.
              </Text>
            </Box>

            <Box p={12} borderRadius={"10px"}>
              <Image src={research} alt="" />
              <Text fontWeight={600} my={"4"}>
                Research & Development
              </Text>
              <Text mt={2}>
                We want to transform the technology to innovation products.
              </Text>
            </Box>

            <Box p={12} borderRadius="10px">
              <Image src={options} alt="" />
              <Text fontWeight={600} my={"4"}>
                Various Options
              </Text>
              <Text mt={2}>
                A wide range of models for both experienced and beginner miners.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Footer />
    </div>
  );
}

export default About;
