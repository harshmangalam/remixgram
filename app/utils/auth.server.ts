import { db } from "./db.server";
import bcrypt from "bcryptjs";

type LoginForm = {
  username: string;
  password: string;
};

type SignupForm = {
  username: string;
  password: string;
  email?: string | undefined;
  phone?: string | undefined;
  name: string;
};

export async function login({ username, password }: LoginForm) {
  // username can be username , email or phone
  // check one by one if it match any fields in database

  const user = await db.user.findUnique({
    where: {
      username,
      email: username,
      phone: username,
    },
    select: {
      id: true,
      password: true,
    },
  });

  if (!user) {
    return [true, "Username does not exist"];
  }

  //   compare plain password with hash password
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return [true, "Password is incorrect"];
  }

  return [false, user.id];
}

export async function signup({
  name,
  username,
  password,
  phone,
  email,
}: SignupForm) {
  // check one by one if uniques fields already exists
  const user = await db.user.findFirst({
    where: {
      OR: [
        {
          username,
        },
        {
          phone,
        },
        { email },
      ],
    },
  });

  if (user) {
    return [true, "User already exists"];
  }

//   create hash of plain password 
  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await db.user.create({
    data: {
      name,
      email,
      username,
      phone,
      password: hashPassword,
    },
  });

  return [false, null];
}
