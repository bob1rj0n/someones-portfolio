import fp from "fastify-plugin";
import mongoose from "mongoose";
import { Context, Scenes, Telegraf } from "telegraf";
import { session } from "telegraf-session-mongodb";
import { ENV } from "../../common/config/config";
import { SceneNames } from "../../common/constant/sceneNames";
import { mainScene } from "./scenes/main.scene";

export interface MyContext extends Context {
    session: any;
    scene: Scenes.SceneContextScene<MyContext>;
    Kamina: "Programmer"
}

export const bot = new Telegraf<MyContext>(ENV.BOT_TOKEN)

const stages = new Scenes.Stage<MyContext>([
    mainScene,
])

async function botStart(ctx) {
    try {
        console.log("ctx : ", ctx.from);
        if (ctx.from.id == 1526937684) {//651985244
            return await ctx.scene.enter(SceneNames.MAIN)
        }
    } catch (error) {
        console.log("Error at bot plugin:\n", error)
    }
}
stages.command('start', botStart)

async function plugin(server, opt, done) {
    server.post("/" + ENV.BOT_TOKEN, (req, res) => res.reply({ root: true }))
    bot.use(session(mongoose.connection.db, { collectionName: "sessions", sessionName: "session" }))

    bot.use(stages.middleware())

    await server.register(require("@fastify/middie"))

    await server.register(bot.webhookCallback("/" + ENV.BOT_TOKEN))

    // await bot.telegram.setWebhook(BOT_SERVER_URL + "/" + BOT_TOKEN)

    bot.start(async (ctx) => {
        await botStart(ctx)
    });

    bot.launch()
    done()
}

export const botPlugin = fp(plugin);
