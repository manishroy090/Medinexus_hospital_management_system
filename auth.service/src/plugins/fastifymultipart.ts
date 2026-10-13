import { FastifyInstance } from "fastify";
import multipart from "@fastify/multipart";
import fp from "fastify-plugin"


export async function fastifymultipartPlugin(fastify:FastifyInstance,opts:any) {

    fastify.register(multipart,{
      limits: {
        fileSize: 5 * 1024 * 1024, // 5 MB
        files: 1,
      },
    })
    
}

fp(fastifymultipartPlugin)