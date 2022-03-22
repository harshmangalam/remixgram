import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function Tagged() {
  return (
    <Box>
      <VStack spacing={3} my={8}>
        <Box
          backgroundImage="https://www.instagram.com/static/bundles/es6/sprite_core_32f0a4f27407.png/32f0a4f27407.png"
          backgroundPosition={"-256px -269px"}
          height="62px"
          width="62px"
        />

        <Heading fontWeight={"medium"} fontSize={"3xl"}>
          Photos of you
        </Heading>
        <Text>When people tag you in photos, they'll appear here.</Text>
      </VStack>
    </Box>
  );
}
