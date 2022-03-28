import { Box, Container } from "@chakra-ui/react";
import Navbar from "~/components/Navbar";
import BottomSheet from "~/components/BottomSheet";
export default function MainLayout(props) {
  return (
    <>
      <Navbar />
      <Box as="main" py={"20"} w="full">
        <Container maxW={"container.lg"}>{props.children}</Container>
      </Box>
      <Box display={["block", "none"]}>
        <BottomSheet />
      </Box>
    </>
  );
}
