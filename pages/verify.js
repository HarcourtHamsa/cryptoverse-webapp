import React from "react";
import { Flex, Box, Text, Stack } from "@chakra-ui/react";
import CryptoChartTape from "../components/common/CryptoChartTape";
import Navbar from "../components/common/Navbar";

function Verify() {
  return (
    <div style={{ backgroundColor: "#181A20" }}>
      <Navbar />
      <Flex w="full" h="80vh" justifyContent="center" alignItems="center">
        <Box
          w={{ base: "90%", md: "400px" }}
          h="300px"
          p={"12px 25px"}
          bg="whiteAlpha.200"
          rounded={10}
        >
          <Stack align={"center"}>{/* <Image src={logo} alt="" /> */}</Stack>

          <Text
            my={10}
            textAlign="center"
            letterSpacing="3px"
            color="yellow.400"
          >
            RESET PASSWORD
          </Text>

          <Box textAlign="center" color="white">
            <Text>
              We sent an email to you. Just click on the link in that email to
              reset your password. If you don&apos;t see it, you may need to
              check your spam folder
            </Text>
          </Box>
        </Box>
      </Flex>
      <CryptoChartTape />
    </div>
  );
}

export default Verify;
