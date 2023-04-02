import { Context, Scenes, Telegraf } from "telegraf";
export interface MyContext extends Context {
    session: any;
    scene: Scenes.SceneContextScene<MyContext>;
    Kamina: "Programmer";
}
export declare const bot: Telegraf<MyContext>;
export declare const botPlugin: import("fastify").FastifyPluginCallback<any, import("fastify").RawServerDefault, import("fastify").FastifyTypeProviderDefault, import("fastify").FastifyBaseLogger>;
