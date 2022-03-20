import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { CgAddR } from "react-icons/cg";
import { ImageIcon } from "../Icons";

export default function CreatePostModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        icon={<CgAddR size={24} />}
        variant={"ghost"}
        isRound={true}
        aria-label="Create Post"
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={2}>
              <ImageIcon boxSize={"24"} />
              <VStack spacing={4}>
                <Text fontSize={"xl"}>Drag photos and videos here</Text>
                <Button size={"sm"} colorScheme={"blue"}>
                  Select From Computer
                </Button>
              </VStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
