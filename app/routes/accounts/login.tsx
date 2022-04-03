import {
  Alert,
  AlertDescription,
  AlertIcon,
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
import {
  ActionFunction,
  Link,
  redirect,
  json,
  useActionData,
  Form,
} from "remix";
import { login } from "~/utils/auth.server";
import { accessToken } from "~/utils/cookies";

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    username: string;
    password: string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  const username = form.get("username") as string;
  const password = form.get("password") as string;

  const fields = {
    username,
    password,
  };

  const [isError, data] = await login(fields);
  if (isError) {
    return json({ formError: data }, 400);
  }

  return redirect("/", {
    headers: {
      "Set-Cookie": await accessToken.serialize(data),
    },
  });
};
export default function AuthLogin() {
  const [show, setShow] = useState(false);
  const actionData = useActionData<ActionData>();
  return (
    <Box py={10}>
      <Box>
        <Box
          maxW={"md"}
          mx="auto"
          bg={"white"}
          p={4}
          rounded="md"
          shadow={"md"}
        >
          <Heading textAlign={"center"} fontSize={"2xl"}>
            Remixgram
          </Heading>

          {actionData?.formError && (
            <Alert mt={4} status="error" variant={"left-accent"}>
              <AlertIcon />
              <AlertDescription>{actionData.formError}</AlertDescription>
            </Alert>
          )}

          <Box as={Form} method="post" mt={8}>
            <VStack align={"start"} spacing={4}>
              <FormControl>
                <FormLabel htmlFor="username">
                  Phone number, username or email
                </FormLabel>
                <Input
                  placeholder=" Phone number, username or email"
                  id="username"
                  type="text"
                  name="username"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
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
              </FormControl>

              <Button type="submit" isFullWidth colorScheme={"blue"}>
                Login
              </Button>
            </VStack>

            <VStack mt={4} spacing={0}>
              <Button
                colorScheme={"blue"}
                variant={"ghost"}
                leftIcon={<FaFacebook />}
              >
                Log in with Facebook
              </Button>
              <Button
                size={"sm"}
                as={Link}
                to="/account/forgotten-password"
                variant={"ghost"}
              >
                Forgotten your password ?
              </Button>
            </VStack>
          </Box>
        </Box>

        <Box
          mt={4}
          maxW={"md"}
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
