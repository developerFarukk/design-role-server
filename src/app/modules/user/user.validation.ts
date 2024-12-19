

import { z } from 'zod';



// Create user validation
const userValidationSchema = z.object({
    body: z.object({
        // password: z
        //     .string()
        //     .min(6, { message: 'Password must be at least 6 characters' })
        //     .max(20, { message: 'Password must be less than 20 characters' }),
        user: z.object({
            password: z
                .string()
                .min(6, { message: 'Password must be at least 6 characters' })
                .max(20, { message: 'Password must be less than 20 characters' }),
            name: z
                .string().max(20, { message: 'Name  must be less than 20 characters' }),
            email: z.string().email({ message: 'Invalid email address' }),
        })
    }),

});

export const UserValidation = {
    userValidationSchema,
};