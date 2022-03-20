import { Box, IconButton, SimpleGrid } from "@chakra-ui/react";
import { FaRegCompass } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { HomeIcon } from "../Icons";

export default function BottomSheet() {
  return (
    <Box position={"fixed"} bottom={0} width={"full"} bg="white" py={2} px={2}>
      <SimpleGrid autoFlow={"column"} spacing={4}>
        <IconButton
          icon={<HomeIcon boxSize={6} />}
          variant={"solid"}
          aria-label="Home"
        />

        <IconButton
          icon={<RiMessengerLine size={24} />}
          variant={"solid"}
          aria-label="Messenger"
        />

        <IconButton
          variant={"solid"}
          aria-label="Find People"
          icon={<FaRegCompass size={24} />}
        />
      </SimpleGrid>
    </Box>
  );
}
