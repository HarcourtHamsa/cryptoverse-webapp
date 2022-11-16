import React, { useContext, useState } from "react";
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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import CryptoChartTape from "../components/common/CryptoChartTape";

import { useRouter } from "next/router";
import { useFormik } from "formik";
import helpers from "../helpers";
import { AuthContext } from "../context/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

import logo from "../assets/images/logo.svg";
import Link from "next/link";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const authContext = useContext(AuthContext);
  const Router = useRouter();

  const notify = (type, msg) =>
    toast(msg, { type: type, position: "top-center" });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      setIsLoading(true);

      try {
        const res = await helpers.login(values).then((data) => {
          if (data.response?.status == 401) {
            notify("error", "Your account has been disabled");
            return;
          }

          if (data.name === "AxiosError") {
            notify("error", "Wrong email or password");
          } else {
            notify("success", "Authentication successful");

            console.log(authContext);
            authContext.setUserAuthInfo(data.data.token);
            console.log("saving credentials...", data.data.data);
            authContext.setUserDetails(data.data.data);

            // redirects to dashboard
            Router.push("/dashboard");
          }
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
  });
  return (
    <div style={{ backgroundColor: "rgb(24, 26, 32)" }}>
      <Head>
        <title>Cryptoverse | Login </title>
      </Head>

      <ToastContainer />
      <Navbar />
      <Flex
        w="100vw"
        h={{ md: "80vh", base: "80vh" }}
        justifyContent="center"
        alignItems="center"
        // bg="gray.50"
      >
        <div>
          <Heading fontSize="2xl" textAlign="center">
            {/* <Image src={logo} alt="" /> */}
          </Heading>
          <Box
            w={{ base: "90vw", md: "500px" }}
            h="fit-content"
            p={{ base: 0, md: 8 }}
          >
            <form onSubmit={formik.handleSubmit}>
              <Text
                textTransform="uppercase"
                letterSpacing="3px"
                textAlign="center"
                color="yellow.500"
              >
                Cryptoverse Login
              </Text>
              <Stack mt={10} spacing={8}>
                <Box>
                  <FormLabel color="white">Email Address</FormLabel>
                  <InputGroup>
                    <Input
                      type={"email"}
                      p={"6"}
                      // rounded={6}
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
                  <FormLabel color="white">Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      p={6}
                      // rounded={0}
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

                <Button
                  p={6}
                  // rounded={0}
                  colorScheme="yellow"
                  fontWeight="normal"
                  isLoading={isLoading}
                  type="submit"
                >
                  Log In
                </Button>
              </Stack>

              <Text mt={3} color="yellow.500">
                <Link href="/forgot-password">Forgot password?</Link>
              </Text>

              <Text mt={3} color="white">
                New to Cryptoverse? <Link href="/register">Sign up</Link>
              </Text>
            </form>
          </Box>
        </div>
      </Flex>
      {/* <Footer /> */}

      <CryptoChartTape />
    </div>
  );
}

export default Login;
