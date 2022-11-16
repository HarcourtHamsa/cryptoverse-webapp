import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";
import { CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Menu from "./Menu";
import { ImBasecamp } from "react-icons/im";
import Logo from "../../assets/images/logo.svg";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box>
        <Flex
          bg={useColorModeValue("rgb(60, 38, 1)", "gray.800")}
          color={useColorModeValue("white", "white")}
          opacity={0.9}
          minH={"30px"}
          py={{ base: 2 }}
          px={{ base: 2, md: 24 }}
          align={"center"}
        >
          <Center m={"auto"}>
            <Text fontSize={"small"}>Register now - Get up to 100 USDT </Text>
            <Link
              p={1}
              href={"#"}
              fontSize={".9rem"}
              fontWeight={500}
              color={"black"}
              bg="rgb(252, 213, 53)"
              borderRadius={"3"}
              ml={3}
              _hover={{
                textDecoration: "none",
              }}
            >
              Register
            </Link>
          </Center>
        </Flex>
      </Box>
      <Box>
        <Flex
          bg={useColorModeValue("#181A20", "gray.800")}
          color={useColorModeValue("white", "white")}
          opacity={0.9}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 8, md: 24 }}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <Menu w={5} h={5} />}
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <ImBasecamp size={25} />

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              color="white"
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"/login"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Log In
            </Button>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              as={"a"}
              fontWeight={"normal"}
              rounded="4"
              color={"black"}
              bg={"rgb(252, 213, 53)"}
              href={"/register"}
              _hover={{
                opacity: 0.8,
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const linkHoverColor = useColorModeValue("rgb(252, 213, 53)", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <>
      <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={".9rem"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Affilate",
    href: "/affilate",
  },
  {
    label: "Plans",
    href: "/plan",
  },
  {
    label: "FAQs",
    href: "/faq",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];
