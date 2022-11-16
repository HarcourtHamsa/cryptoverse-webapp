import React from "react";
import { Box, Stack } from "@chakra-ui/react";

const Menu = () => {
  return (
    <Stack>
      <Box w={8} h={"2px"} bg="white" mb={-1}></Box>
      <Box w={5} h={"2px"} bg="white" mb={-1}></Box>
      <Box w={8} h={"2px"} bg="white" mt={-1}></Box>
    </Stack>
  );
};

export default Menu;
