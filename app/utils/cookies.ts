import { createCookie } from "remix";

export const accessToken = createCookie("access_token", {
  secure: process.env.NODE_ENV === "production",
});
