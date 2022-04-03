import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getUsers().map(async ({ name, email, password, username, posts }) => {
      const hashPassword = await bcrypt.hash(password, 12);
      return db.user.create({
        data: {
          name,
          email,
          password: hashPassword,
          username,
          posts: {
            createMany: {
              data: posts,
            },
          },
        },
      });
    })
  );
}

seed();

function getUsers() {
  return [...Array(10).keys()].map((i) => ({
    username: `user${i}`,
    name: `User ${i}`,
    email: `user${i}@gmail.com`,
    password: "123456",
    posts: [
      {
        content:
          " su ysg yg s gy g ya gxygyxg asyxgysg xy sus x hysghxysg ysghsw",
        media: {
          imageUrl:
            "https://images.unsplash.com/photo-1647937534872-941667736d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
      },
    ],
  }));
}
