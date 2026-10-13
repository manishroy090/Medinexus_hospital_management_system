import { FastifyInstance } from "fastify";
import fp from 'fastify-plugin';
import fastifyView from '@fastify/view';
import Handlebars from "handlebars";



export async function fastifyViewPlugin(fastify:FastifyInstance ,opts:any){
  fastify.register(fastifyView,{
       engine: {
        handlebars: Handlebars
      },
      root: './src/templates'
    })
}

fp(fastifyViewPlugin)