import React, { useState, useEffect } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Alert,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import {
  BiCloudDownload,
  BiBox,
  BiDollarCircle,
  BiGridAlt,
  BiTime,
  BiLogOut,
} from "react-icons/bi";

import Image from "next/image";
import { ImBasecamp } from "react-icons/im";
import helpers from "../../helpers";
import { useRouter } from "next/router";
import Menu from "../common/Menu";

const LinkItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Deposit", href: "/dashboard/payment" },
  { name: "Plans", href: "/dashboard/invest" },
  { name: "Withdraw", href: "/dashboard/withdraw" },
  { name: "History", href: "/dashboard/transactions" },
];

export default function Wrapper({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState(null);

  async function fetchUser() {
    const res = await helpers.getUserDetailsFromLocalStorage();
    setUser(res);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Box minH="100vh" bg={useColorModeValue("rgb(24, 26, 32)", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const Router = useRouter();
  // rgb(24, 26, 32)
  return (
    <Box
      bg={useColorModeValue("#181A20", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("#434651", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <ImBasecamp size={30} color="white" />

        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
          color="white"
          size={30}
        />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}

      <Text
        _hover={{ cursor: "pointer", backgroundColor: "whiteAlpha.100" }}
        color="white"
        style={{ textDecoration: "none" }}
        p="4"
        alignItems="center"
        display="flex"
        mt={30}
        onClick={() => {
          helpers.logout();
          Router.push("/");
        }}
      >
        Log out
      </Text>
    </Box>
  );
};

const NavItem = ({ icon, href, children, ...rest }) => {
  return (
    <Link
      href={href}
      color="white"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      // fontSize={"sm"}
    >
      <Flex
        align="center"
        p="4"
        role="group"
        cursor="pointer"
        _hover={{
          backgroundColor: "whiteAlpha.200",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="25"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("#181A20", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.600", "gray.700")}
      justifyContent="space-between"
      {...rest}
    >
      <ImBasecamp color="white" size={30}/>
      <IconButton
        variant="link"
        onClick={onOpen}
        aria-label="open menu"
        icon={<Menu />}
      />
    </Flex>
  );
};
