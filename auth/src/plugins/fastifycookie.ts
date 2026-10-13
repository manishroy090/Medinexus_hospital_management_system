import { FastifyInstance } from "fastify";
import { register } from "node:module";
import cookie from "@fastify/cookie";
import type { FastifyCookieOptions } from "@fastify/cookie";
import fp from "fastify-plugin"


export async function fastifycookie(fastify:FastifyInstance,opts:any) {

    fastify.register(cookie,{
      secret: "my-secret",
      parseOptions: {},
    } as FastifyCookieOptions)
    
}

fp(fastifycookie)