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
import SettingIcon from "../Icons/Setting";
import SwitchIcon from "../Icons/Switch";

export default function Account() {
  return (
    <Menu isLazy={true}>
      <MenuButton
        as={IconButton}
        variant={"outline"}
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
