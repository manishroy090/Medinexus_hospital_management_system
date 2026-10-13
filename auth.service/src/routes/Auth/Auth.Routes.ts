import {type FastifyInstance } from "fastify";
import { AuthController } from "@controllers/Auth/Auth.controller";
import { request } from "https";

import { HoshpitalOnbardingSchema } from "@validation/Hoshpitalonbaording-validation";
import { LoginSchema } from "@/validation/Login-validation";





export async function AuthRoutes(fastify: FastifyInstance){


  const controller  = new AuthController();
  fastify.post('/signup', {schema:{body:HoshpitalOnbardingSchema}},controller.signup.bind(controller))
  fastify.post('/login',{schema:{body:LoginSchema}},controller.login.bind(controller));
  fastify.get('/me',controller.me.bind(controller));
  fastify.post('/logout',controller.logout.bind(controller));


}