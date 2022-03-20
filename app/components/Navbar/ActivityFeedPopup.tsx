import {
  Avatar,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HiOutlineHeart } from "react-icons/hi";

export default function ActivityFeedPopup() {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          variant={"ghost"}
          isRound={true}
          icon={<HiOutlineHeart size={24} />}
          aria-label="Activity Feed"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />

        <PopoverBody>
          <VStack align="start" spacing={4}>
            {[...Array(4).keys()].map((activity) => (
              <>
                <VStack spacing={4} align="start">
                  <Heading fontSize={"sm"}>This month</Heading>
                  <Flex align={"center"} gap={2}>
                    <Avatar
                      src="https://avatars.githubusercontent.com/u/57381638?v=4"
                     size={"md"}
                    />
                    <Text fontSize={"sm"}>abhishek,kumar.450 started following you</Text>
                    <Button colorScheme={"blue"} size="sm">
                      Follow
                    </Button>
                  </Flex>
                </VStack>
                <Divider />
              </>
            ))}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
