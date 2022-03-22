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
import { Link, NavLink } from "remix";
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
          <Heading as={Link} to="/" size={"lg"} fontWeight="medium">
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
              {links.map((link) => (
                <IconButton
                  as={NavLink}
                  key={link.name}
                  icon={link.icon}
                  variant={"ghost"}
                  isRound={true}
                  aria-label={link.name}
                  to={link.to}
                  _activeLink={{
                    fontWeight:"800"
                  }}
                />
              ))}
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

const links = [
  {
    name: "Home",
    icon: <HomeIcon boxSize={6} />,
    variant: "ghost",
    to: "/",
  },
  {
    name: "Messenger",
    icon: <RiMessengerLine size={24} />,
    variant: "ghost",
    to: "/messenger",
  },
  {
    name: "Explore Posts",
    icon: <FaRegCompass size={24} />,
    variant: "ghost",
    to: "/explore",
  },
];
