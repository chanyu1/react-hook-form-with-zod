import { z } from 'zod';

export const validationSchema = z.object({
  name: z
    .string()
    .nonempty('Name is required')
    .min(4, 'Enter at least 4 characters'),
  email: z.string().nonempty('Email is required').email('Invalid email format'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(6, 'Enter at least 6 characters'),
});

export type ValidationSchemaType = z.infer<typeof validationSchema>;
