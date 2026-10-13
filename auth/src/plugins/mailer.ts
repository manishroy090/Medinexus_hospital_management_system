import fp from 'fastify-plugin';
import nodemailer from 'nodemailer';



export default fp(async(fastify , opts)=>{

    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'manishrayoffical9824@gmail.com',
            pass:'imky tfdr pvnu oxdg'
        }
    })

    fastify.decorate('mailer',transporter);

}) 


// fastify.get("/api/sendmail", async (request, reply) => {
//   try {
//     const htmlContent = await reply.viewAsync('Meeting.hbs');
//     await fastify.mailer.sendMail({
//       from: '"Medinexus Complete Healthcare Platform" <your-email@example.com>',
//       to: "manishrayoffical9824@gmail.com",
//       subject: "Meeting Link – Medinexus Healthcare System Prototype Demo (July 6)",
//       html: htmlContent,
//     });
//   } catch (error) {

//     console.log("error",error);
//   }
//   reply.status(200).send({
//     message: "all okey server is running",
//   });
// });