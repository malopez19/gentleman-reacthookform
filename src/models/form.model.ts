import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(1, "Nombre es requerido"),
    email: z.string().email("Correo invalido").min(1, "Correo es requerido"),
    password: z.string().min(6, "Contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z.string().min(6, "Contraseña debe tener al menos 6 caracteres"),
  }).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type FormValues = z.infer<typeof schema>;