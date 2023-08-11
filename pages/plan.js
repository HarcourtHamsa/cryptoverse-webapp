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
  VStack,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import {
  secure,
  options,
  research,
  bitcoin_network,
  mining_place,
} from "../assets/images/list";
import { InvestmentPlanCard } from "./dashboard/invest";

function Plan() {
  return (
    <div style={{ backgroundColor: "rgb(30, 35, 41)" }}>
      <Navbar />
      <Box
        w="full"
        h={{ base: "xs", md: "xs" }}
        // bg="blue.400"
        id="contact"
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
                fontWeight={"normal"}
              >
                <Text>Price Plans</Text>
              </Heading>
            </Box>
          </Center>
        </VStack>
      </Box>

      <Container maxW={"6xl"} mb={20} color="white">
        <Heading
          pt={20}
          lineHeight={"110%"}
          fontSize={{ base: "2xl", sm: "2xl", md: "3xl" }}
          fontWeight="normal"
          textAlign="center"
          mb={3}
          zIndex={"popover"}
        >
          <Text>Our Best Mining Plans</Text>
        </Heading>
        <Text fontSize="1rem" textAlign="center">
          Choose a plan that suites you
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 5, lg: 8 }}
          my={30}
        >
          <InvestmentPlanCard
            title={"Basic Plan"}
            priceRange={"$550 - $1500"}
            minimumAmount={"550"}
            dailyProfit={" 5.23"}
            duration={"2 days"}
            minimumReturn={"2,750"}
          />
               <InvestmentPlanCard
            title={"Regular Plan"}
            priceRange={"$1,500 - 5,000"}
            minimumAmount={"1,500"}
            dailyProfit={"7.44"}
            duration={"2 days"}
            minimumReturn={"7,500"}
          />
          <InvestmentPlanCard
            title={"Silver Plan"}
            priceRange={"$5,000 - $10,000"}
            minimumAmount={"5,000"}
            dailyProfit={"8.00"}
            duration={"2 days"}
            minimumReturn={"14,800"}
          />
          <InvestmentPlanCard
            title={"Gold Plan"}
            priceRange={"$10,000 - $12,500"}
            minimumAmount={"10,000"}
            dailyProfit={"9.02"}
            duration={"2 days"}
            minimumReturn={"23,250"}
          />
          <InvestmentPlanCard
            title={"Platinum Plan"}
            priceRange={"15,000 - $45,000"}
            minimumAmount={"15,000"}
            dailyProfit={"9.50"}
            duration={"2 days"}
            minimumReturn={"75,000"}
          />
              <InvestmentPlanCard
            title={"Platinum Classic Plan"}
            priceRange={"45,000 - $150,000"}
            minimumAmount={"45,000"}
            dailyProfit={"15.75"}
            duration={"2 days"}
            minimumReturn={"225,000"}
          />
        </SimpleGrid>
      </Container>

      <Footer />
    </div>
  );
}

export default Plan;
