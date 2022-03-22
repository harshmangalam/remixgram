import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function Saved() {
  return (
    <Box>
      <VStack spacing={3} my={8}>
        <Box
          backgroundImage="https://www.instagram.com/static/bundles/es6/sprite_core_32f0a4f27407.png/32f0a4f27407.png"
          backgroundPosition={"-192px -269px"}
          height="62px"
          width="62px"
        />

        <Heading fontWeight={"medium"} fontSize={"3xl"}>
          Save
        </Heading>
        <Text maxW={"md"} fontSize="sm">
          Save photos and videos that you want to see again. No one is notified,
          and only you can see what you've saved.
        </Text>
      </VStack>
    </Box>
  );
}
