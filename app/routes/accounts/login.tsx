import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
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
          <Heading textAlign={"center"} fontSize={"2xl"}>
            Remixgram
          </Heading>
          <Box as="form" mt={8}>
            <VStack align={"start"} spacing={4}>
              <Input
                placeholder=" Phone number, username or email"
                id="username"
                type="text"
                name="username"
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

            <VStack mt={4} spacing={0}>
              <Button colorScheme={"blue"} variant={"ghost"} leftIcon={<FaFacebook />}>
                Log in with Facebook
              </Button>
              <Button size={"sm"} as={Link} to="/account/forgotten-password" variant={"ghost"}>
                Forgotten  your password ?
              </Button>
            </VStack>
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
              <Text>Don`t have an account ? </Text>
              <Text
                as={Link}
                to="/accounts/signup"
                color={"blue.500"}
                fontWeight="bold"
              >
                Sign up
              </Text>
            </HStack>
          </Center>
        </Box>
      </Box>
    </Box>
  );
}
