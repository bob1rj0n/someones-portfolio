import { Markup, Scenes } from "telegraf";
import { getMessagesByPaging } from "../../service/message.service";
import { SceneNames } from "../../../common/constant/sceneNames";
import { MyContext } from "../botPlugin";
import moment from "moment";

export const mainScene = new Scenes.BaseScene<MyContext>(SceneNames.MAIN);

mainScene.enter(async (ctx) => {
    let buttons = [];
    buttons.push([Markup.button.callback("✉ allmessages", "✉")]);

    ctx.reply("Asosiy menu", Markup.keyboard(buttons).resize(true));
})

mainScene.hears(/✉/, async (ctx) => {
    let page = 1;
    ctx.session.page = page;

    console.log(ctx.session);

    let buttons = [];
    buttons.push([Markup.button.callback("⏭", "⏭")])//Markup.button.callback("⏮", "⏮"),
    const messages = await getMessagesByPaging(ctx.session.page);
    let arr = [`${ctx.session.page}-sahifa`], x = 1, msg;
    for (const msg of messages) {
        let item = `\n\n${x}:  Fullname: ${msg.name},\nPhone: ${msg.phoneNumber},\nSubject: ${msg.subject},\nMessage: ${msg.message},\nVaqt: ${moment(msg.createdAt).format("YYYY-MM-DD HH:mm")}`;
        arr.push(item);
        x++;
    }

    msg = arr.toString().length > 0 ? arr.toString() : `${ctx.session.page}-sahifa\nHech narsa topilmadi!`;

    await ctx.reply(msg, Markup.inlineKeyboard(buttons));
    await ctx.scene.enter(SceneNames.MAIN)
});

mainScene.action(/⏮/, async (ctx) => {
    ctx.session.page = ctx.session.page - 1 > 1 ? ctx.session.page - 1 : 1;

    console.log(ctx.session);

    let buttons = [];
    ctx.session.page == 1
        ? buttons.push([Markup.button.callback("⏭", "⏭")])
        : buttons.push([Markup.button.callback("⏮", "⏮"), Markup.button.callback("⏭", "⏭")]);

    const messages = await getMessagesByPaging(ctx.session.page);
    let arr = [`${ctx.session.page}-sahifa`], x = 1, msg;
    for (const msg of messages) {
        let item = `\n\n${x}:  Fullname: ${msg.name},\nPhone: ${msg.phoneNumber},\nSubject: ${msg.subject},\nMessage: ${msg.message},\nVaqt: ${moment(msg.createdAt).format("YYYY-MM-DD HH:mm")}`;
        arr.push(item);
        x++;
    }
    msg = arr.toString();

    await ctx.editMessageText(msg, { reply_markup: { inline_keyboard: (buttons) } });
})

mainScene.action(/⏭/, async (ctx) => {
    let buttons = [];
    ctx.session.page++;
    console.log(ctx.session);

    const messages = await getMessagesByPaging(ctx.session.page);
    messages.length > 0
        ? buttons.push([Markup.button.callback("⏮", "⏮"), Markup.button.callback("⏭", "⏭")])
        : buttons.push([Markup.button.callback("⏮", "⏮")]);


    let arr = [`${ctx.session.page}-sahifa`], x = 1, msg;
    for (const msg of messages) {
        let item = `\n\n${x}:  Fullname: ${msg.name},\nPhone: ${msg.phoneNumber},\nSubject: ${msg.subject},\nMessage: ${msg.message},\nVaqt: ${moment(msg.createdAt).format("YYYY-MM-DD HH:mm")}`;
        arr.push(item);
        x++;
    }
    msg = messages.length > 0 ? arr.toString() : `${ctx.session.page}-sahifa\nHech narsa topilmadi!`

    await ctx.editMessageText(msg, { reply_markup: { inline_keyboard: (buttons) } });
})
