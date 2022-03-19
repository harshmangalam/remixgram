import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { HomeIcon } from "../Icons";
import { RiMessengerLine } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { FaRegCompass, FaCompass } from "react-icons/fa";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";

import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <Box
      as={"nav"}
      background={"white"}
      position="fixed"
      top={0}
      zIndex={"popover"}
      w="full"
    >
      <Container maxW={"container.lg"}>
        <Flex py={2} gap={4}>
          {/* logo  */}
          <Heading size={"lg"} fontFamily="cursive">
            Remixgram
          </Heading>
          <Spacer />
          {/* search bar */}
          <SearchBar />
          <Spacer />
          {/* navbar links */}
          <HStack>
            <IconButton
              icon={<HomeIcon boxSize={6} />}
              variant={"outline"}
              isRound={true}
              aria-label="Home"
            />

            <IconButton
              icon={<RiMessengerLine size={24} />}
              variant={"outline"}
              isRound={true}
              aria-label="Messenger"
            />

            <IconButton
              icon={<CgAddR size={24} />}
              variant={"outline"}
              isRound={true}
              aria-label="Create Post"
            />
            <IconButton
              variant={"outline"}
              isRound={true}
              aria-label="Find People"
              icon={<FaRegCompass size={24} />}
            />

            <IconButton
              variant={"outline"}
              isRound={true}
              icon={<HiOutlineHeart size={24} />}
              aria-label="Activity Feed"
            />

            <IconButton
              icon={
                <Avatar
                  src="https://avatars.githubusercontent.com/u/57381638?v=4"
                  width={6}
                  height={6}
                />
              }
              variant={"outline"}
              isRound={true}
              aria-label="Profile"
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
