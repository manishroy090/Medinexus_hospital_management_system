import Fastify from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import {
serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { AuthRoutes } from "@routes/Auth/Auth.Routes";
import { PermissionRoutes } from "@routes/Auth/Permission.Routes";
import { RolesRoutes } from "@routes/Auth/Roles.Routes";
import mailerPlugin from "@plugins/mailer";
import { fastifyStaticPlugin } from "@plugins/fastifyStatic";
import { fastifyViewPlugin } from "@plugins/fastifyview";
import { fastifymultipartPlugin } from "@plugins/fastifymultipart";
import {fastifycors} from "@plugins/fastifycors";
import {fastifycookie} from "@plugins/fastifycookie";
import { fastifyjwt } from "@plugins/fastifyjwt";
import { fastifyBcryptPlugin } from "@plugins/fastifybcrypt";


//make it seprate file and rename it to app
const fastify = Fastify({ logger: true }).withTypeProvider<ZodTypeProvider>();


//Fastiy Plugins are here
fastify.register(fastifycookie);
fastify.register(fastifycors);
fastify.register(fastifymultipartPlugin);
fastify.register(fastifyStaticPlugin);
fastify.register(fastifyViewPlugin)
fastify.register(fastifyBcryptPlugin);
fastify.register(fastifyjwt);
fastify.register(mailerPlugin);
fastify.setValidatorCompiler(validatorCompiler);
fastify.setSerializerCompiler(serializerCompiler);







fastify.ready(() => {
  console.log(fastify.printPlugins());
});

console.log("has multipart:", fastify.hasRequestDecorator("file"));


//validation error code
fastify.setErrorHandler(function (error, request, reply) {
  if (Array.isArray((error as any).validation)) {
    const validationIssue = (error as any).validation;
    const errors = validationIssue.map(
      (issue: { instancePath: string; message: string }) => ({
        field: issue.instancePath.substring(1),
        message: issue.message,
      }),
    );

    reply.status(422).send({
      message: "Validation_errors",
      errors,
    });
  }
});



//Authentication Routes
fastify.register(AuthRoutes, { prefix: "/api/v1/auth" });
fastify.register(PermissionRoutes, { prefix: "/api/v1/permissions" });
fastify.register(RolesRoutes,{prefix:'/api/v1/roles'});



// server is running or not
fastify.get('/server',async(request:any ,reply)=>{
  reply.send({"message":"Server is running"})
})





const start = async () => {
  try {
    await fastify.listen({host: '0.0.0.0', port: 8000});
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
