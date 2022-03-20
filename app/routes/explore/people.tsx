import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ExplorePeople() {
  return (
    <Box maxW={"xl"} mx="auto">
      <Heading fontSize={"md"}>Suggested</Heading>
      <VStack my={4} spacing={4} align="start" bg="white" p={4} rounded="md">
        {[...Array(5).keys()].map((user) => (
          <Flex align={"center"} w="full">
            <HStack>
              <Avatar
                src="https://avatars.githubusercontent.com/u/57381638?v=4"
                size={"md"}
              />

              <Box>
                <Heading size={"xs"}>harshmangalam2022</Heading>
                <Text fontSize={"sm"} color="gray.500">
                  Harsh Mangalam
                </Text>
                <Text fontSize={"xs"} color="gray.500">
                  Follows you
                </Text>
              </Box>
            </HStack>
            <Spacer />

            <Button size={"sm"} colorScheme="twitter" variant={"solid"}>
              Follow
            </Button>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}
