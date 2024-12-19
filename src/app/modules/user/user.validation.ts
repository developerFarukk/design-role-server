

import { z } from 'zod';

// Creat User name validation schema
const createUserNameValidationNameSchema = z.object({
    firstName: z
        .string()
        .min(1, { message: 'First Name is required' })
        .max(20, { message: 'First Name must be less than 20 characters' })
        .refine((value) => /^[A-Z]/.test(value), {
            message: 'First Name must start with a capital letter',
        }),
    middleName: z.string().optional(),
    lastName: z.string().min(1, { message: 'Last Name is required' }),
});


// Create user validation
const userValidationSchema = z.object({
    body: z.object({
        user: z.object({
            password: z
            .string()
            .min(6, { message: 'Password must be at least 6 characters' })
            .max(20, { message: 'Password must be less than 20 characters' })
            .optional(),
        name: createUserNameValidationNameSchema,
        email: z.string().email({ message: 'Invalid email address' }),
        isDeleted: z.boolean(),
        })
    }),

});

export const UserValidation = {
    userValidationSchema,
};