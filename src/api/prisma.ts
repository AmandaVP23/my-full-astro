// import { PrismaClient } from "@prisma/client"; 
import { PrismaClient } from "../generated/prisma/client";

declare global {
    // allow global prisma to avoid creating new instances in dev
    var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient({ log: ['error', 'warn'] });

// todo - verify what this actually prevents
if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}
