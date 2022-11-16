import React, { useContext, useEffect, useState } from "react";
import Wrapper from "../../components/dashboard/Wrapper";
import { Heading, Text, Container, Alert } from "@chakra-ui/react";
import Link from "next/link";
import Statistics from "../../components/dashboard/Statistics";
import CryptoChartTape from "../../components/common/CryptoChartTape";

import {
  AdvancedRealTimeChart,
  EconomicCalendar,
  ForexCrossRates,
  Ticker,
  MarketData,
  CryptoCurrencyMarket
} from "react-ts-tradingview-widgets";
import helpers from "../../helpers";
import { AiFillWarning } from "react-icons/ai";

function Dashboard() {
  const [user, setUser] = useState({});

  async function fetchUser() {
    const res = await helpers.getUserDetailsFromLocalStorage();
    setUser(res);
  }

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <Wrapper>
        <div>
          {user?.verified && (
            <Alert mb={10} w="fit-content" rounded={10} display="flex" gap="2">
              <AiFillWarning color="#ECC94B" />
              <Text>
                Please verify your identity. Click{" "}
                <Text textDecoration="underline" display="inline-flex" mr={1}>
                  <Link
                    href="/dashboard/verify"
                    style={{ textDecoration: "underline !important" }}
                  >
                    here
                  </Link>{" "}
                </Text>
                to get started
              </Text>
            </Alert>
          )}

          <Text fontSize="4xl" mt={5} color="white">
            Welcome {user?.firstName}
          </Text>
          <Text color={"gray.400"} fontSize="sm">
            Access to your dashboard
          </Text>
          <Statistics />

          <Container maxW="7xl" mx={"auto"} p={0} my={6}>
            <Ticker height={400} width="100%" colorTheme="dark"/>
          </Container>
        </div>
        <Container maxW="7xl" mx={"auto"} p={0} my={6}>
          <Heading fontWeight={'normal'} fontSize="3xl" color={'white'} fontFamily="inherit">Crypto</Heading>
          <Text mb={5} mt={2} fontSize="sm" color={'gray.400'}>Market cap ranking</Text>
          <CryptoCurrencyMarket height={400} width="100%" colorTheme="dark"/>
        </Container>
      </Wrapper>

      <CryptoChartTape />
    </>
  );
}

export default Dashboard;
