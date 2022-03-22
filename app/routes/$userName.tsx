import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { LoaderFunction, NavLink, Outlet, useLoaderData } from "remix";
import Footer from "~/components/Footer";
import { SettingIcon, TagProfile } from "~/components/Icons";
import { BsGrid3X3 } from "react-icons/bs";
import { RiBookmarkLine } from "react-icons/ri";
export const loader: LoaderFunction = ({ params }) => {
  const userName = params.userName;
  return {
    userName,
  };
};
export default function UserProfile() {
  const user = useLoaderData();
  return (
    <Box>
      <HStack justify={"center"} spacing={24}>
        {/* profile avatar */}
        <Avatar
          w={150}
          h={150}
          src="https://avatars.githubusercontent.com/u/57381638?v=4"
        />

        <VStack spacing={6} align="start">
          <Flex gap={4} align="center">
            <Heading fontSize={"3xl"} fontWeight={"medium"}>
              harshmangalam2022
            </Heading>
            <Button size={"sm"} variant={"outline"}>
              Edit Profile
            </Button>
            <IconButton
              variant={"unstyled"}
              icon={<SettingIcon boxSize={6} />}
              aria-label="Settings"
            />
          </Flex>
          <Flex w="full" gap={8}>
            <HStack>
              <Text fontWeight={"bold"}>5</Text>
              <Text>posts</Text>
            </HStack>

            <HStack>
              <Text fontWeight={"bold"}>5</Text>
              <Text>followers</Text>
            </HStack>

            <HStack>
              <Text fontWeight={"bold"}>5</Text>
              <Text>followings</Text>
            </HStack>
          </Flex>
          <Heading fontSize={"lg"}>Harsh Mangalam</Heading>
        </VStack>
      </HStack>

      <Divider borderColor="gray.300" py={6} />

      <Flex justify={"center"} gap={8}>
        {tabs.map((tab) => (
          <Link
            fontSize={"sm"}
            fontWeight="semibold"
            textTransform={"uppercase"}
            color="gray.500"
            key={tab.name}
            as={NavLink}
            to={tab.to}
            borderTopWidth="1px"
            borderTopColor={"transparent"}
            pt={3}
            end={tab.end}
            _activeLink={{
              borderTopColor: "gray.800",
              borderTopWidth: "1px",
              color: "gray.800",
            }}
          >
            <HStack spacing={2}>
              <Text>{tab.icon}</Text>
              <Text>{tab.name}</Text>
            </HStack>
          </Link>
        ))}
      </Flex>

      <Box my={6}>
        <Outlet />
      </Box>

      <Flex my={6} justify="center">
        <Footer />
      </Flex>
    </Box>
  );
}

const tabs = [
  {
    name: "Posts",
    to: "",
    icon: <BsGrid3X3 size={10} />,
    end: true,
  },
  {
    name: "Saved",
    to: "saved",
    icon: <RiBookmarkLine size={12} />,
    end: false,
  },
  {
    name: "Tagged",
    to: "tagged",
    icon: <TagProfile boxSize={3} />,
    end: false,
  },
];
