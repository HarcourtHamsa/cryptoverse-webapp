import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import {
  BsCreditCard,
  BsDownload,
  BsServer,
  BsPeopleFill,
  BsBank2,
} from "react-icons/bs";

import { IoIosCard } from "react-icons/io";
import { FiUsers, FiCreditCard } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import helpers from "../../helpers";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"10"}
      // borderWidth={1}
      // borderColor="gray.200"
      bg="facebook.500"
      rounded={6}
      color="black"
      shadow="md"
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel isTruncated color="white">{title}</StatLabel>
          <StatNumber fontSize={"4xl"} fontWeight="normal" mt={3} color="white">
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          bg={useColorModeValue("blackAlpha.400", "gray.200")}
          alignContent={"center"}
          w={20}
          h={20}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
          borderRadius={"50%"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Statistics() {
  const [user, setUser] = useState(null);

  async function fetchUser() {
    const res = await helpers.getUserDetailsFromLocalStorage();
    setUser(res);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Box mx={"auto"} pt={5} mt={6}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {/* <StatsCard
          title={"Deposit"}
          stat={`$${user?.amountDeposited}`}
          icon={<BsBank2 size={"30"} color="white" />}
        /> */}
        <StatsCard
          title={"Balance"}
          stat={`$${user?.balance}`}
          icon={<FiCreditCard size={"30"} color="white" />}
        />
        <StatsCard
          title={"Profit"}
          stat={`$${user?.profit}`}
          icon={<BsServer size={"30"} color="white" />}
        />
        <StatsCard
          title={"Ref. Bonus"}
          stat={`$${user?.referalBonus}`}
          icon={<FiUsers size={"30"} color="white" />}
        />
      </SimpleGrid>
    </Box>
  );
}
