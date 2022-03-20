import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

export default function PostAction() {
  return (
    <Menu isLazy placement="bottom-end">
      <MenuButton
        as={IconButton}
        isRound={true}
        aria-label="Post Action"
        icon={<BsThreeDots />}
    
      />

      <MenuList>
        <MenuItem>Report</MenuItem>
        <MenuItem>Unfollow</MenuItem>
        <MenuItem>Go to post</MenuItem>
        <MenuItem>Share to...</MenuItem>
        <MenuItem>Copy link</MenuItem>
        <MenuItem>Embed</MenuItem>
        <MenuItem>Cancel</MenuItem>
      </MenuList>
    </Menu>
  );
}
