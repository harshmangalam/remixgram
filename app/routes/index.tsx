import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import PostCard from "~/components/Posts/PostCard";
import { Link } from "remix";
import Footer from "~/components/Footer";
import MainLayout from "~/layouts/MainLayout";
export default function Home() {
  return (
    <MainLayout>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={8}
      >
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
            maxW={{ sm: "xl", lg: "full" }}
            mx="auto"
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
          <Grid py={6} gap={6} maxW={{ sm: "xl", lg: "full" }} mx="auto">
            {[...Array(1).keys()].map((post) => (
              <GridItem>
                <PostCard />
              </GridItem>
            ))}
          </Grid>
        </GridItem>

        {/* right section  */}
        <GridItem display={["none", "none", "none", "block"]}>
          <Box position={"sticky"} top={20}>
            {/* profile section  */}
            <Flex align={"center"} gap={4}>
              <Avatar
                src="https://avatars.githubusercontent.com/u/57381638?v=4"
                size={"lg"}
              />
              <Box flexGrow={1}>
                <Heading size={"xs"}>harshmangalam2022</Heading>
                <Text fontSize={"sm"} color="gray.500">
                  Harsh Mangalam
                </Text>
              </Box>
              <Button size={"xs"} colorScheme="twitter" variant={"ghost"}>
                Switch
              </Button>
            </Flex>
            {/* user suggestions */}
            <Box my={4}>
              <Flex align={"center"}>
                <Heading size={"sm"} color="gray.500">
                  Suggestions for you
                </Heading>
                <Spacer />
                <Heading
                  as={Link}
                  to="/explore/people"
                  color={"blue.500"}
                  size="xs"
                >
                  See All
                </Heading>
              </Flex>

              <VStack my={4} spacing={2} align="start">
                {[...Array(5).keys()].map((user) => (
                  <Flex align={"center"} w="full">
                    <HStack>
                      <Avatar
                        src="https://avatars.githubusercontent.com/u/57381638?v=4"
                        size={"sm"}
                      />

                      <Box>
                        <Heading size={"xs"}>harshmangalam2022</Heading>
                        <Text fontSize={"sm"} color="gray.500">
                          Follows you
                        </Text>
                      </Box>
                    </HStack>
                    <Spacer />

                    <Button size={"xs"} colorScheme="twitter" variant={"ghost"}>
                      Follow
                    </Button>
                  </Flex>
                ))}
              </VStack>
            </Box>
            <Footer />
          </Box>
        </GridItem>
      </Grid>
    </MainLayout>
  );
}
