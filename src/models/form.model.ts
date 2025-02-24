import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(1, "Nombre es requerido"),
    email: z.string().email("Correo invalido").min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
  }).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type FormValues = z.infer<typeof schema>;