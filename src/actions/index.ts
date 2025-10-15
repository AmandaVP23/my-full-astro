import { defineAction } from "astro:actions";
import { z } from 'astro:schema';
import { createUser } from "../api/services/userService";

export const server = {
    getGreeting: defineAction({
        input: z.object({
            name: z.string(),
        }),
        handler: async (input) => {
            console.log('hey! I\'m inside the action, inside the action');
            return `Hello, ${input.name}`;
        }
    }),
    createUser: defineAction({
        input: z.object({
            name: z.string(),
            email: z.string(),
        }),
        handler: async (input) => {
            console.log('hey! I\' inside the action, inside the action - createUser', input);
            
            return createUser(input.name, input.email);
        }
    }),
}
