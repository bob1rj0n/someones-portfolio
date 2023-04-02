import { replyPlugin } from './../common/decorator/reply';
import fastify from "fastify";
import fastifyFileUpload from 'fastify-file-upload';
import { ENV } from "../common/config/config";
import { connectDb } from "../common/db/connector";
import { messagePlugin } from "./router/message.router";
import fastifyCors from '@fastify/cors';
import { botPlugin } from './bot/botPlugin';

const server = fastify({
    logger: true
});

server.register(fastifyCors);
server.register(replyPlugin);
server.register(messagePlugin);
///bot
server.register(botPlugin);

async function start() {
    try {
        await connectDb()

        server.listen({ port: ENV.ADMIN_PORT, host: ENV.HOST })
        console.log("Server running....")
        console.log("Url : http://localhost:" + ENV.ADMIN_PORT)
    } catch (e) {
        console.log("Error to running server____")
        console.log(e)
    }
}

start();
