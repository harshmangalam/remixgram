import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function ExplorePosts() {
  return (
    <Box>
      <Box>
        <Grid
          h="xl"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem
            backgroundImage={
              "https://images.unsplash.com/photo-1647831591495-2f9ce7dd3d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            }
            rowSpan={2}
          />
          <GridItem
            backgroundImage={
              "https://images.unsplash.com/photo-1647806052557-e799f103fddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <GridItem
            backgroundImage={
              "https://images.unsplash.com/photo-1647808281776-1e5e9c8a48e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            }
          />
        </Grid>
      </Box>

      <Box mt={4}>
        <Grid
          h="md"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
        >
          <GridItem
            backgroundImage={
              "https://images.unsplash.com/photo-1647794821824-2443e34a84b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            }
          />
          <GridItem
            backgroundImage={
              "https://images.unsplash.com/photo-1647794821824-2443e34a84b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            }
          />
          <GridItem
            backgroundImage={
              "https://images.unsplash.com/photo-1647794821824-2443e34a84b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            }
          />
          <GridItem
            backgroundImage={
              "https://images.unsplash.com/photo-1647794821824-2443e34a84b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            }
          />
          <GridItem
            backgroundImage={
              "https://images.unsplash.com/photo-1647794821824-2443e34a84b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            }
          />
          <GridItem
            backgroundImage={
              "https://images.unsplash.com/photo-1647794821824-2443e34a84b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            }
          />
        </Grid>
      </Box>

      <Box mt={4}>
        <Grid
          h="xl"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem
            backgroundImage={
              "https://images.unsplash.com/photo-1647831591495-2f9ce7dd3d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            }
            rowSpan={2}
          />
          <GridItem
            backgroundImage={
              "https://images.unsplash.com/photo-1647806052557-e799f103fddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <GridItem
            backgroundImage={
              "https://images.unsplash.com/photo-1647808281776-1e5e9c8a48e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            }
          />
        </Grid>
      </Box>
    </Box>
  );
}
