import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Link } from "remix";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { EmojiIcon } from "~/components/Icons";
import { FiSend } from "react-icons/fi";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";
import PostAction from "./PostAction";
export default function PostCard() {
  return (
    <Box rounded={"sm"} borderColor="gray.300" borderWidth={1} bg="white">
      {/* post header  */}
      <Flex align={"center"} py={2} px={4}>
        {/* author avatar  */}
        <HStack spacing={4}>
          <Avatar size={"sm"} />
          <Text fontWeight={"bold"} fontSize="sm">
            Google
          </Text>
        </HStack>
        <Spacer />
        {/* post action  */}
        <PostAction />
      </Flex>

      {/* post media  */}

      <Box>
        <Image
          src="https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          objectFit={"cover"}
          w="full"
        />
      </Box>

      {/* post body  */}
      <Box px={4}>
        {/* post reaction  */}
        <Flex py={4}>
          <HStack>
            <IconButton
              variant={"outline"}
              isRound={true}
              icon={<HiOutlineHeart size={24} />}
              aria-label="Heart"
            />
            <IconButton
              variant={"outline"}
              isRound={true}
              icon={<IoChatbubbleOutline size={24} />}
              aria-label="Comment"
            />
            <IconButton
              variant={"outline"}
              isRound={true}
              icon={<FiSend size={24} />}
              aria-label="Share"
            />
          </HStack>
          <Spacer />
          <IconButton
            variant={"outline"}
            isRound={true}
            icon={<RiBookmarkLine size={24} />}
            aria-label="Bookmark"
          />
        </Flex>

        {/* post hearts  */}
        <Heading fontSize={"sm"}>14,346 likes</Heading>

        {/* post content  */}

        <Text py={2} fontSize="md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et
          nobis, dignissimos exercitationem quo in quibusdam temporibus vero
          animi ducimus, tempora optio! Pariatur tempore magnam aspernatur illum
          incidunt totam beatae iure nisi eos perspiciatis, nesciunt,
          consequatur debitis veniam rem laboriosam sint repudiandae adipisci.
          Aut obcaecati fugit quam cumque expedita vitae!
        </Text>

        {/* post comments  */}
        <Text
          display={"block"}
          fontSize={"sm"}
          color="gray.500"
          as={Link}
          to="/p/123"
        >
          View all 120 comments
        </Text>

        {/* post created date */}
        <Text
          display={"block"}
          fontSize={"xs"}
          color="gray.500"
          as={Link}
          to="/p/123"
        >
          1 day ago
        </Text>
      </Box>

      <Divider py={2} />
      {/* write comment section  */}

      <Flex py={2} px={4} align="center" gap={4}>
        <EmojiIcon boxSize={6} />
        <Input variant="unstyled" placeholder="Add a comment..." />
        <Button disabled variant={"ghost"} size="sm" colorScheme="blue">
          Post
        </Button>
      </Flex>
    </Box>
  );
}
