import { db } from "./db.server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

  const user = await db.user.findFirst({
    where: {
      OR: [{ username }, { email: username }, { phone: username }],
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
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "12h",
    }
  );

  return [false, token];
}

export async function signup({
  name,
  username,
  password,
  phone,
  email,
}: SignupForm) {
  // check one by one if uniques fields already exists
  let user = await db.user.findUnique({
    where: {
      username,
    },
  });

  if (user) {
    return [true, "Username already exists"];
  }

  user = await db.user.findUnique({
    where: {
      phone,
    },
  });

  if (user) {
    return [true, "Phone number already registered"];
  }
  user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return [true, "Email address already registered"];
  }

  //   create hash of plain password
  const hashPassword = await bcrypt.hash(password, 10);

  await db.user.create({
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
