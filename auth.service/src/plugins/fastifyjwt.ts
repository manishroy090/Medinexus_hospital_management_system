import { FastifyInstance } from "fastify";
import jwt from "@fastify/jwt";
import fp from "fastify-plugin"


export async function fastifyjwt(fastify:FastifyInstance,opts:any) {
    fastify.register(jwt,{ secret: "supersecret" })
    
}

fp(fastifyjwt)