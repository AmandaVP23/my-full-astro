import type { APIRoute } from 'astro';
import { getAllUsers, createUser } from '../../api/services/userService';

export const GET: APIRoute = async () => {
    try {
        const users = await getAllUsers();
        return new Response(JSON.stringify(users), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'Failed to load users' }), { status: 500 })
    }
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        // put validation in database level
        if (!body?.name || !body?.email) {
            return new Response(JSON.stringify({ error: "name and email are required" }), { status: 400 });
        }

        const user = await createUser(body.name, body.email);
        return new Response(JSON.stringify(user), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error(err);
        // todo - see type of this
        if ((err as any)?.code === "P2002") {
            return new Response(JSON.stringify({ error: "Email already in use" }), { status: 409 });
        }
            return new Response(JSON.stringify({ error: "Failed to create user" }), { status: 500 });
        }
}
