import {
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { RiBookmarkLine } from "react-icons/ri";

import { SwitchIcon, SettingIcon } from "../Icons/";

export default function AccountMenu() {
  return (
    <Menu isLazy={true}>
      <MenuButton
        as={IconButton}
        variant={"ghost"}
        isRound={true}
        aria-label="Profile"
        icon={
          <Avatar
            src="https://avatars.githubusercontent.com/u/57381638?v=4"
            width={6}
            height={6}
          />
        }
      />
      <MenuList>
        <MenuItem icon={<CgProfile size={16} />}>Profile</MenuItem>
        <MenuItem icon={<RiBookmarkLine size={16} />}>Saved</MenuItem>
        <MenuItem icon={<SettingIcon boxSize={4} />}>Settings</MenuItem>
        <MenuItem icon={<SwitchIcon boxSize={4} />}>Switch Account</MenuItem>
        <MenuDivider p={0} />
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
