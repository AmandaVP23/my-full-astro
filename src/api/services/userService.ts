import { prisma } from '../prisma';

export async function getAllUsers() {
    return prisma.user.findMany({ orderBy: { id: 'desc' } });
}

export async function getUserById(id: number) {
    return prisma.user.findUnique({ where: { id } });
}

export async function createUser(name: string, email: string) {
    return prisma.user.create({
        data: { name, email },
    });
}
