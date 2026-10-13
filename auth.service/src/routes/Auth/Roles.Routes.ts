import { type FastifyInstance } from "fastify";
import { request } from "https";
import { RoleController } from "@controllers/Auth/Role.controller";
import { RoleSchema } from "@validation/Roles-validation";


export async function RolesRoutes(fastify: FastifyInstance) {




    const controller = new RoleController();
    fastify.get('/', controller.index.bind(controller));
    fastify.post('/create',{schema:{body:RoleSchema}}, controller.create.bind(controller));
    fastify.get('/edit/:id', controller.edit.bind(controller));
    fastify.put('/update/:id',{schema:{body:RoleSchema}}, controller.update.bind(controller));
    fastify.delete('/delete/:id',controller.delete.bind(controller));

}
