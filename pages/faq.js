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
  VStack,
  HStack,
  ListIcon,
  ListItem,
  List,
  SimpleGrid,
  Button,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { TickerTape } from "react-ts-tradingview-widgets";
import CryptoChartTape from "../components/common/CryptoChartTape";

function Faq() {
  return (
    <Box bg="rgb(30, 35, 41)">
      <Navbar />
      <Box
        w="full"
        h={{ base: "xs", md: "xs" }}
        // bg="blue.400"
        id="faq"
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
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
                <Text>FAQs</Text>
              </Heading>
            </Box>
          </Center>
        </VStack>
      </Box>
      <Container maxW={"6xl"} mb={20} color="white">
        <Heading
          lineHeight={"110%"}
          fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
          fontWeight="nor,al"
          mb={3}
          textAlign={{ base: "left", md: "center" }}
          mt={10}
          color="white"
        >
          <Text>Frequently Asked Questions</Text>
        </Heading>
        <Text textAlign={{ base: "left", md: "center" }} color="white">
          We answer some of your Frequently Asked Questions regarding bitcoin
          and bitcoin cloud mining via email and contact us page. If you have a
          query regarding bitcoin mining do not hesitate to kindly contact us.
        </Text>

        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={"20"}
          mt={16}
          mx={"auto"}
        >
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Why is Bitcoin Trusted? ?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Bitcoin is trusted widely because it’s open-source and
                decentralized. This means that the global public has access to
                the entire Bitcoin source code at any time. All payments can be
                made without reliance on a third-party and the whole system is
                protected by heavily peer-reviewed cryptographic algorithms and
                most important thing is no institution or organization can
                control Bitcoin.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    How much I can earn maximum here?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                You can earn total 300% of your investment. After completion of
                300%, your package will get expired. To continue to earn, you
                need to invest again..
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    How do I withdraw my earnings?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Request a withdrawal from your dashboard after login; make sure
                you have a valid Bitcoin Address.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    How secure is my Wallet and Bitcoins?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We always care about our miners. We are using SHA-256 algorithm
                for Bitcoin mining as well as protection from DDoS attacks.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Status of my withdrawal?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                You can check the status of you withdrawal in your back office
                by going to relevant Wallet section. It will be showing Pending,
                Approved (along with transaction hash) or Rejected.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Is there any affiliate program?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes, there are different kinds of the affiliate program with us.
                Please go to our affiliate page to know more about our affiliate
                program
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </SimpleGrid>
      </Container>

      <CryptoChartTape />
      <Footer />
    </Box>
  );
}

export default Faq;
