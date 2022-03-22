import {
  Box,
  GridItem,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ProfilePosts() {
  return (
    <Box>
      <SimpleGrid columns={[1, 1, 1, 2]} alignItems="center" bg="white">
        <GridItem>
          <Image
            w="full"
            h={"380px"}
            src="https://www.instagram.com/static/images/mediaUpsell.jpg/6efc710a1d5a.jpg"
          />
        </GridItem>
        <GridItem>
          <VStack>
            <Heading fontSize={"lg"}>
              Start capturing and sharing your moments.
            </Heading>
            <Text>Get the app to share your first photo or video.</Text>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
