import {
  Avatar,
  Box,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import PostCard from "~/components/Posts/PostCard";

export default function Home() {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      {/* left section   */}
      <GridItem colSpan={2}>
        {/* stories section  */}

        <HStack
          overflowX={"auto"}
          bg="white"
          p={"4"}
          borderColor="gray.300"
          borderWidth={1}
          rounded="sm"
        >
          {[...Array(10).keys()].map((story) => (
            <VStack>
              <Avatar
                size="lg"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
              <Text color={"gray.300"} fontSize="sm">
                Google
              </Text>
            </VStack>
          ))}
        </HStack>
        {/* posts section  */}
        <Grid py={6} gap={6}>
          {[...Array(1).keys()].map((post) => (
            <GridItem>
              <PostCard />
            </GridItem>
          ))}
        </Grid>
      </GridItem>

      {/* right section  */}
      <GridItem>
        {/* profile section  */}
        {/* user suggestions */}
      </GridItem>
    </Grid>
  );
}
