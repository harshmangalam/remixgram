import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { HomeIcon } from "../Icons";
import { RiMessengerLine } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { FaRegCompass, FaCompass } from "react-icons/fa";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";

import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";
import CreatePostModal from "./CreatePostModal";
import ActivityFeedPopup from "./ActivityFeedPopup";

export default function Navbar() {
  return (
    <Box
      as={"nav"}
      background={"white"}
      position="fixed"
      top={0}
      zIndex={"overlay"}
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
            <HStack display={["none", "flex"]}>
              <IconButton
                icon={<HomeIcon boxSize={6} />}
                variant={"ghost"}
                isRound={true}
                aria-label="Home"
              />

              <IconButton
                icon={<RiMessengerLine size={24} />}
                variant={"ghost"}
                isRound={true}
                aria-label="Messenger"
              />

              <IconButton
                variant={"ghost"}
                isRound={true}
                aria-label="Find People"
                icon={<FaRegCompass size={24} />}
              />
            </HStack>
            <CreatePostModal />
            <ActivityFeedPopup />
            <AccountMenu />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
