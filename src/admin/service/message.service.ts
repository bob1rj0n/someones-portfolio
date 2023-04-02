import { aggregate, create, getAll, getPaging } from "../../common/service/base.service";
import axios from "axios";
import { MessageDto } from "../../common/validation/dto/message.dto";
import { bot } from "../bot/botPlugin";
import { MessageModel } from "../../common/db/model/message.model";

export async function MessageService(data: MessageDto) {
    try {
        const text = `
You have a new message from your website:
Name: ${data.name},
Phone: ${data.phoneNumber},
Subject: ${data.subject}
Message: ${data.message}
    `;
        await bot.telegram.sendMessage(1526937684, text);

        const msg = await create(MessageModel, data);
        return msg
    } catch (error) {
        console.log(error);
    }
}

export async function GetMessageService() {
    try {
        const result = await getAll(MessageModel);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function getMessagesByPagingService(data) {
    return await getPaging(MessageModel, data, {}, { createdAt: -1 });
}

export async function getMessagesByPaging(page) {
    const $match = {
        $match: {
            isDeleted: false
        }
    }
    const $sort = {
        $sort: {
            createdAt: -1
        }
    };
    const $skip = {
        $skip: 10 * (page - 1)
    }
    const $limit = {
        $limit: 10
    }
    const $pipeline = [
        $match,
        $sort,
        $skip,
        $limit
    ]
    return await aggregate(MessageModel, $pipeline);
}
