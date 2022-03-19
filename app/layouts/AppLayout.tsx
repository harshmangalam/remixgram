import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "~/components/Navbar";

interface IAppLayout {
  children: ReactNode;
}
export default function AppLayout({ children }: IAppLayout) {
  return (
    <Box>
      <Navbar />
      <Box bg={"gray.50"}>{children}</Box>
    </Box>
  );
}
