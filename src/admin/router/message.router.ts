import fp from 'fastify-plugin';
import { getMessageHandler, getPagingMessageHandler, messageHandler } from "../handler/message.handler";


async function message(server, opt, done) {
    server.post('/message', messageHandler);
    server.get('/messages', getMessageHandler)
    server.get('/message', getPagingMessageHandler)

    done();
};

export const messagePlugin = fp(message);
