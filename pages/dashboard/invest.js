import {
  Heading,
  Text,
  ListItem,
  StatLabel,
  StatNumber,
  Stat,
  Divider,
  VStack,
  List,
  ListIcon,
  Box,
  Button,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import CryptoChartTape from "../../components/common/CryptoChartTape";
import Wrapper from "../../components/dashboard/Wrapper";

export const InvestmentPlanCard = ({
  title,
  priceRange,
  dailyProfit,
  minimumAmount,
  duration,
  minimumReturn,
}) => {
  const Router = useRouter();

  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      //   border={"1px solid"}

      rounded={"6"}
      bg="whiteAlpha.200"
      color="white"
      borderTop="2px solid rgb(252, 213, 53)"
    >
      <StatLabel fontWeight={"medium"} istruncated="true">
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {priceRange}
      </StatNumber>
      <Divider my={6} />

      <VStack textAlign="start" pt={2} w="100%" mt={4}>
        <List spacing={3} textAlign="start" w="inherit">
          <ListItem>Daily Profit: %{dailyProfit}</ListItem>
          <ListItem>Minimum Possible Deposit: ${minimumAmount}</ListItem>
          <ListItem>Minimum Return: ${minimumReturn}</ListItem>
          <ListItem>Duration: {duration}</ListItem>
        </List>
        <Box mt={20} ml="auto" w="inherit">
          <Button
            colorScheme="yellow"
            w="full"
            // rounded={0}
            variant="solid"
            fontWeight="normal"
            onClick={() =>
              Router.push(
                {
                  pathname: "/dashboard/deposit",
                  query: {
                    amount: minimumAmount,
                  },
                },
                "/dashboard/deposit"
              )
            }
          >
            Choose Plan
          </Button>
        </Box>
      </VStack>
    </Stat>
  );
};

function Invest() {
  return (
    <>
      <Wrapper>
        <Heading fontSize="2xl" fontWeight="normal" mt={10} color="white">
          <Text>Investment Plans</Text>
          <Text fontSize="1rem">Choose a plan that suites you</Text>
        </Heading>

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
      </Wrapper>

      <CryptoChartTape />
    </>
  );
}

export default Invest;
