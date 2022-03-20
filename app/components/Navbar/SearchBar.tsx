import {
  Avatar,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link } from "remix";
import { IoSearchOutline } from "react-icons/io5";
export default function SearchBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} isLazy>
        <PopoverAnchor>
          <InputGroup maxW={"xs"}>
            <InputLeftElement
              pointerEvents="none"
              children={<IoSearchOutline size={18} color="gray" />}
            />
            <Input
              onFocus={onOpen}
              type="search"
              placeholder="Search"
              bg={"gray.100"}
            />
          </InputGroup>
        </PopoverAnchor>

        <PopoverContent>
          <PopoverArrow />

          <PopoverBody px={0}>
            <VStack align={"start"} spacing={2}>
              {[...Array(6).keys()].map((user) => (
                <HStack
                  as={Link}
                  to="/harsh.mangalam"
                  spacing={2}
                  _hover={{ bg: "gray.50" }}
                  w="full"
                  p={2}
                >
                  <Avatar
                    src="https://avatars.githubusercontent.com/u/57381638?v=4"
                    size="md"
                  />
                  <VStack align="start" spacing={0}>
                    <Heading fontSize={"sm"}>harsh.mangalam2022</Heading>
                    <Text color="gray.500" fontSize={"sm"}>
                      Harsh Mangalam
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
