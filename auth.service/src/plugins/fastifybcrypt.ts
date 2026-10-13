import { FastifyInstance } from "fastify";
import fastifyBcrypt from "fastify-bcrypt";
import fp from "fastify-plugin"


export async function fastifyBcryptPlugin(fastify:FastifyInstance,opts:any) {

    fastify.register(fastifyBcrypt,{ saltWorkFactor: 12 })
    
}

fp(fastifyBcryptPlugin)