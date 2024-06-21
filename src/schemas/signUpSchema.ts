import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username must have min of 2 characters")
  .max(15, "characters should not be more than 15 char long")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be 6 characters long" }),
});
