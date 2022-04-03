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
export default function PostCard({ post }) {
  return (
    <Box rounded={"sm"} borderColor="gray.300" borderWidth={1} bg="white">
      {/* post header  */}
      <Flex align={"center"} py={2} px={4}>
        {/* author avatar  */}
        <HStack spacing={4}>
          <Avatar
            name={post.user.name}
            size={"sm"}
            src={post.user.profilePic}
          />
          <Text fontWeight={"bold"} fontSize="sm">
            {post.user.username}
          </Text>
        </HStack>
        <Spacer />
        {/* post action  */}
        <PostAction />
      </Flex>

      {/* post media  */}

      <Box>
        {post.media?.imageUrl && (
          <Image src={post.media.imageUrl} objectFit={"cover"} w="full" />
        )}
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
        <Heading fontSize={"sm"}>{post._count.likes} likes</Heading>

        {/* post content  */}

        {post.content && (
          <Text py={2} fontSize="md">
            {post.content}
          </Text>
        )}

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
         {post.createdAt}
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
