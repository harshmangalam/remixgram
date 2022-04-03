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
  Form,
  json,
  Link,
  redirect,
  useActionData,
} from "remix";
import { signup } from "~/utils/auth.server";

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    email: string | undefined;
    phone: string | undefined;
  };
  fields?: {
    username: string;
    password: string;
    email: string;
    name: string;
    phone: string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  const username = form.get("username") as string;
  const phone = form.get("phone") as string;
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const name = form.get("name") as string;

  if (!email && !phone) {
    return json(
      { formError: "Provide your phone or email for verification" },
      400
    );
  }

  const fields = {
    name,
    username,
    email,
    phone,
    password,
  };

  const [isError, data] = await signup(fields);

  if (isError) {
    return json({ formError: data }, 400);
  }

  return redirect("/accounts/login");
};
export default function AuthLogin() {
  const [show, setShow] = useState(false);
  const actionData = useActionData<ActionData>();
  return (
    <Box py={10}>
      <Box maxW={"md"} mx="auto" bg={"white"} p={4} rounded="md" shadow={"md"}>
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

        {actionData?.formError && (
          <Alert mt={4} status="error" variant={"left-accent"}>
            <AlertIcon />
            <AlertDescription>{actionData.formError}</AlertDescription>
          </Alert>
        )}
        <Box as={Form} method="post" mt={8}>
          <VStack align={"start"} spacing={4}>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                placeholder="Username"
                id="username"
                type="text"
                name="username"
                defaultValue={actionData?.fields?.name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="phone">Mobile Number</FormLabel>
              <Input
                placeholder="Mobile number"
                id="phone"
                type="text"
                name="phone"
                defaultValue={actionData?.fields?.phone}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                placeholder="Email address"
                id="email"
                type="email"
                name="email"
                defaultValue={actionData?.fields?.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <Input
                placeholder="Full name"
                id="name"
                type="text"
                name="name"
                defaultValue={actionData?.fields?.name}
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
                  defaultValue={actionData?.fields?.password}
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
            <Text>Have an account ? </Text>
            <Text
              as={Link}
              to="/accounts/login"
              color={"blue.500"}
              fontWeight="bold"
            >
              Log in
            </Text>
          </HStack>
        </Center>
      </Box>
    </Box>
  );
}
