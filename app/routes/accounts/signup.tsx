import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "remix";

export default function AuthLogin() {
  const [show, setShow] = useState(false);
  return (
    <Box py={10}>
      <Box>
        <Box
          maxW={"lg"}
          mx="auto"
          bg={"white"}
          p={4}
          rounded="md"
          shadow={"md"}
        >
          <VStack maxW={"sm"} mx="auto" spacing={6}>
            <Heading textAlign={"center"} fontSize={"2xl"}>
              Remixgram
            </Heading>
            <Text
              textAlign="center"
              color="gray.400"
              fontSize={"lg"}
              fontWeight="bold"
            >
              Sign up to see photos and videos from your friends.
            </Text>
          </VStack>
          <Button
            colorScheme={"blue"}
            isFullWidth
            mt={4}
            leftIcon={<FaFacebook />}
          >
            Log in with Facebook
          </Button>
          <Box as="form" mt={8}>
            <VStack align={"start"} spacing={4}>
              <Input
                placeholder="Username"
                id="username"
                type="text"
                name="username"
              />
              <Input
                placeholder="Mobile number"
                id="phone"
                type="text"
                name="phone"
              />
              <Input
                placeholder="Email address"
                id="email"
                type="email"
                name="email"
              />
              <Input
                placeholder="Full name"
                id="name"
                type="text"
                name="name"
              />

              <InputGroup size="md">
                <Input
                  id="password"
                  type={show ? "text" : "password"}
                  name="password"
                  pr="4.5rem"
                  placeholder="Password"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    variant={"unstyled"}
                    size="sm"
                    onClick={() => setShow(!show)}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Button isFullWidth colorScheme={"blue"}>
                Login
              </Button>
            </VStack>

            <Center mt={4}>
              <Button variant={"ghost"} leftIcon={<FaFacebook />}>
                Log in with Facebook
              </Button>
            </Center>
          </Box>
        </Box>

        <Box
          mt={4}
          maxW={"lg"}
          mx="auto"
          bg={"white"}
          p={4}
          rounded="md"
          shadow={"md"}
        >
          <Center>
            <HStack>
              <Text>Have an account ? </Text>
              <Text as={Link} to="/accounts/login" color={"blue.500"} fontWeight="bold">
                Log in
              </Text>
            </HStack>
          </Center>
        </Box>
      </Box>
    </Box>
  );
}
