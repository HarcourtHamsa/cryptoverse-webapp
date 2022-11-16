import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Select,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import CryptoChartTape from "../components/common/CryptoChartTape";
import { useFormik } from "formik";
import helpers from "../helpers";
import { countries } from "../countries";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

import Head from "next/head";

import logo from "../assets/images/logo.svg";
import Link from "next/link";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();

  const notify = (msg, type) =>
    toast(msg, {
      type,
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
    });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      country: "",
    },

    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const res = await helpers
          .register(values)
          .then((data) => {
            console.log(data);

            if (data.name === "AxiosError") {
              notify("Email already taken", "error");
            } else {
              notify("Account created successfully!", "success");
              Router.push("login");
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      } catch (error) {
        console.log(error);
        notify("Oops! an error occured");
      } finally {
        setIsLoading(false);
      }
    },
  });
  return (
    <div style={{ backgroundColor: "rgb(24, 26, 32)" }}>
      <Head>
        <title>Cryptoverse | Create Account</title>
      </Head>

      <Navbar />
      <ToastContainer />

      <Flex
        w="full"
        h={{ md: "fit-content" }}
        justifyContent="center"
        alignItems="center"
        py={20}
      >
        <div>
          <Heading fontSize="2xl" textAlign="center">
            {/* <Image src={logo} alt="" /> */}
          </Heading>

          <Box w={{ base: "90%", md: "500px" }} m="auto" h="inherit">
            <form onSubmit={formik.handleSubmit}>
              <Text
                textTransform="uppercase"
                letterSpacing="3px"
                textAlign="center"
                color="yellow.500"
                mt={5}
              >
                Create a free account
              </Text>
              <Stack mt={10} spacing={8}>
                <Flex gap={4}>
                  <Box>
                    <FormLabel color={"white"}>First Name</FormLabel>
                    <InputGroup>
                      <Input
                        type={"text"}
                        p={"6"}
                        // rounded={0}
                        id="first-name"
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        color="white"
                        placeholder="Enter first name"
                        borderColor={"gray.700"}
                      />
                    </InputGroup>
                  </Box>

                  <Box>
                    <FormLabel color={"white"}>Last Name</FormLabel>
                    <InputGroup>
                      <Input
                        type={"text"}
                        p={"6"}
                        id="last-name"
                        name="lastName"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        color="white"
                        placeholder="Enter first name"
                        borderColor={"gray.700"}
                      />
                    </InputGroup>
                  </Box>
                </Flex>

                <Box>
                  <FormLabel color={"white"}>Country of Residence</FormLabel>
                  <Select
                    placeholder=""
                    id="country"
                    name="country"
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    color="white"
                    borderColor={"gray.700"}
                  >
                    {countries.map((country) => {
                      return (
                        <option
                          value={country.name}
                          key={country.code}
                          style={{ color: "black" }}
                        >
                          {country.name}
                        </option>
                      );
                    })}
                  </Select>
                </Box>

                <Box>
                  <FormLabel color={"white"}>Email Address</FormLabel>
                  <InputGroup>
                    <Input
                      type={"email"}
                      p={"6"}
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      color="white"
                      placeholder="Enter email address"
                      borderColor={"gray.700"}
                    />
                  </InputGroup>
                </Box>

                <Box>
                  <FormLabel color={"white"}>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      p={6}
                      id="password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      color="white"
                      placeholder="Enter password"
                      borderColor={"gray.700"}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? (
                          <ViewIcon color={"white"} />
                        ) : (
                          <ViewOffIcon color={"white"} />
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>

                <Box>
                  <FormLabel color="white">Referal Code (optional)</FormLabel>
                  <InputGroup>
                    <Input
                      type={"text"}
                      p={"6"}
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      color="white"
                      placeholder="Enter referal code"
                      borderColor={"gray.700"}
                    />
                  </InputGroup>
                </Box>

                <Button
                  p={6}
                  rounded={0}
                  colorScheme={"yellow"}
                  fontWeight="normal"
                  type="submit"
                  isLoading={isLoading}
                >
                  Create Free Account
                </Button>
              </Stack>

              <Text mt={3} color={"white"}>
                Have a Cryptoverse account? <Link href="/login">Log in</Link>
              </Text>
            </form>
          </Box>
        </div>
      </Flex>

      <CryptoChartTape />
      {/* <Footer /> */}
    </div>
  );
}

export default Register;
