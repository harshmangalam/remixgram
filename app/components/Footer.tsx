import { Box, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <Box>
      <Text fontSize={"sm"} textTransform="lowercase" color="gray.400">
       &copy; {new Date().getFullYear()} REMIXGRAM MADE OPEN SOURCE BY HARSH MANGALAM
      </Text>
    </Box>
  );
}
