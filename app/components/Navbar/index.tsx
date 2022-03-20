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
import Account from "./Account";

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
        <Flex py={2} gap={2} align="center">
          {/* logo  */}
          <Heading size={"lg"} fontFamily="cursive">
            Remixgram
          </Heading>
          <Spacer />
          {/* search bar */}
          <Box display={["none", "none", "block"]}>
            <SearchBar />
          </Box>
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

            <Account />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
