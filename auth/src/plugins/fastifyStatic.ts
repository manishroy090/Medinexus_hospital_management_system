import { FastifyInstance } from "fastify";
import path from "path";
import fastifyStatic from "@fastify/static";
import fp from 'fastify-plugin';




export async function fastifyStaticPlugin(fastify:FastifyInstance ,opts:any) {
    fastify.register(fastifyStatic,{
  root: path.join(process.cwd(), "uploads"),
  prefix: "/uploads/",
})
}

fp(fastifyStaticPlugin)