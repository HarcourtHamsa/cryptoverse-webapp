import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { MdQuestionAnswer } from "react-icons/md";
import { MdChat } from "react-icons/md";

function SupportBtn() {
  return (
    <Link
      pos="fixed"
      bottom={{ base: "6rem", md: "55px" }}
      right={{ base: "22", md: "10" }}
      bg="#FCD535"
      color="black"
      rounded={"50%"}
      display="flex"
      alignItems="center"
      justifyContent={'center'}
      gap="10px"
      // padding="12px 25px"
      shadow="md"
      width={50}
      height={50}
      _hover={{ cursor: "pointer" }}
      href="mailto:support@zenithpay.network"
    >
      <MdChat size={24} />
    </Link>
  );
}

export default SupportBtn;
