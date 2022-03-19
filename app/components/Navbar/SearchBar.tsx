import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
export default function SearchBar() {
  return (
    <InputGroup maxW={"xs"}>
      <InputLeftElement
        pointerEvents="none"
        children={<IoSearchOutline size={18} color="gray" />}
      />
      <Input type="search" placeholder="Search" bg={"gray.100"} />
    </InputGroup>
  );
}
