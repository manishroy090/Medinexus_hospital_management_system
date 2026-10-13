import { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import fp from "fastify-plugin";
export async function fastifycors(fastify: FastifyInstance, opts: any) {
  fastify.register(cors, {
    origin: ["http://greenvally.localhost"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  });
}

fp(fastifycors);
