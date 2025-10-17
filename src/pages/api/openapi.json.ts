// src/pages/api/openapi.json.ts
import type { APIRoute } from 'astro';
import { swaggerSpec } from '../../lib/swagger';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(swaggerSpec), {
    headers: { 'Content-Type': 'application/json' }
  });
};