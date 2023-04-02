"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessagesByPaging = exports.getMessagesByPagingService = exports.GetMessageService = exports.MessageService = void 0;
const base_service_1 = require("../../common/service/base.service");
const botPlugin_1 = require("../bot/botPlugin");
const message_model_1 = require("../../common/db/model/message.model");
async function MessageService(data) {
    try {
        const text = `
You have a new message from your website:
Name: ${data.name},
Phone: ${data.phoneNumber},
Subject: ${data.subject}
Message: ${data.message}
    `;
        await botPlugin_1.bot.telegram.sendMessage(1526937684, text);
        const msg = await (0, base_service_1.create)(message_model_1.MessageModel, data);
        return msg;
    }
    catch (error) {
        console.log(error);
    }
}
exports.MessageService = MessageService;
async function GetMessageService() {
    try {
        const result = await (0, base_service_1.getAll)(message_model_1.MessageModel);
        return result;
    }
    catch (error) {
        console.log(error);
    }
}
exports.GetMessageService = GetMessageService;
async function getMessagesByPagingService(data) {
    return await (0, base_service_1.getPaging)(message_model_1.MessageModel, data, {}, { createdAt: -1 });
}
exports.getMessagesByPagingService = getMessagesByPagingService;
async function getMessagesByPaging(page) {
    const $match = {
        $match: {
            isDeleted: false
        }
    };
    const $sort = {
        $sort: {
            createdAt: -1
        }
    };
    const $skip = {
        $skip: 10 * (page - 1)
    };
    const $limit = {
        $limit: 10
    };
    const $pipeline = [
        $match,
        $sort,
        $skip,
        $limit
    ];
    return await (0, base_service_1.aggregate)(message_model_1.MessageModel, $pipeline);
}
exports.getMessagesByPaging = getMessagesByPaging;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkbWluL3NlcnZpY2UvbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9FQUF5RjtBQUd6RixnREFBdUM7QUFDdkMsdUVBQW1FO0FBRTVELEtBQUssVUFBVSxjQUFjLENBQUMsSUFBZ0I7SUFDakQsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHOztRQUViLElBQUksQ0FBQyxJQUFJO1NBQ1IsSUFBSSxDQUFDLFdBQVc7V0FDZCxJQUFJLENBQUMsT0FBTztXQUNaLElBQUksQ0FBQyxPQUFPO0tBQ2xCLENBQUM7UUFDRSxNQUFNLGVBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEscUJBQU0sRUFBQyw0QkFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLE9BQU8sR0FBRyxDQUFBO0tBQ2I7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7QUFDTCxDQUFDO0FBaEJELHdDQWdCQztBQUVNLEtBQUssVUFBVSxpQkFBaUI7SUFDbkMsSUFBSTtRQUNBLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxxQkFBTSxFQUFDLDRCQUFZLENBQUMsQ0FBQztRQUMxQyxPQUFPLE1BQU0sQ0FBQztLQUNqQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QjtBQUNMLENBQUM7QUFQRCw4Q0FPQztBQUVNLEtBQUssVUFBVSwwQkFBMEIsQ0FBQyxJQUFJO0lBQ2pELE9BQU8sTUFBTSxJQUFBLHdCQUFTLEVBQUMsNEJBQVksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBRkQsZ0VBRUM7QUFFTSxLQUFLLFVBQVUsbUJBQW1CLENBQUMsSUFBSTtJQUMxQyxNQUFNLE1BQU0sR0FBRztRQUNYLE1BQU0sRUFBRTtZQUNKLFNBQVMsRUFBRSxLQUFLO1NBQ25CO0tBQ0osQ0FBQTtJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1YsS0FBSyxFQUFFO1lBQ0gsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUNoQjtLQUNKLENBQUM7SUFDRixNQUFNLEtBQUssR0FBRztRQUNWLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCLENBQUE7SUFDRCxNQUFNLE1BQU0sR0FBRztRQUNYLE1BQU0sRUFBRSxFQUFFO0tBQ2IsQ0FBQTtJQUNELE1BQU0sU0FBUyxHQUFHO1FBQ2QsTUFBTTtRQUNOLEtBQUs7UUFDTCxLQUFLO1FBQ0wsTUFBTTtLQUNULENBQUE7SUFDRCxPQUFPLE1BQU0sSUFBQSx3QkFBUyxFQUFDLDRCQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQXhCRCxrREF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZ2dyZWdhdGUsIGNyZWF0ZSwgZ2V0QWxsLCBnZXRQYWdpbmcgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3NlcnZpY2UvYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBNZXNzYWdlRHRvIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL2R0by9tZXNzYWdlLmR0b1wiO1xuaW1wb3J0IHsgYm90IH0gZnJvbSBcIi4uL2JvdC9ib3RQbHVnaW5cIjtcbmltcG9ydCB7IE1lc3NhZ2VNb2RlbCB9IGZyb20gXCIuLi8uLi9jb21tb24vZGIvbW9kZWwvbWVzc2FnZS5tb2RlbFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gTWVzc2FnZVNlcnZpY2UoZGF0YTogTWVzc2FnZUR0bykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBgXG5Zb3UgaGF2ZSBhIG5ldyBtZXNzYWdlIGZyb20geW91ciB3ZWJzaXRlOlxuTmFtZTogJHtkYXRhLm5hbWV9LFxuUGhvbmU6ICR7ZGF0YS5waG9uZU51bWJlcn0sXG5TdWJqZWN0OiAke2RhdGEuc3ViamVjdH1cbk1lc3NhZ2U6ICR7ZGF0YS5tZXNzYWdlfVxuICAgIGA7XG4gICAgICAgIGF3YWl0IGJvdC50ZWxlZ3JhbS5zZW5kTWVzc2FnZSgxNTI2OTM3Njg0LCB0ZXh0KTtcblxuICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCBjcmVhdGUoTWVzc2FnZU1vZGVsLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIG1zZ1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHZXRNZXNzYWdlU2VydmljZSgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRBbGwoTWVzc2FnZU1vZGVsKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZXNCeVBhZ2luZ1NlcnZpY2UoZGF0YSkge1xuICAgIHJldHVybiBhd2FpdCBnZXRQYWdpbmcoTWVzc2FnZU1vZGVsLCBkYXRhLCB7fSwgeyBjcmVhdGVkQXQ6IC0xIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZXNCeVBhZ2luZyhwYWdlKSB7XG4gICAgY29uc3QgJG1hdGNoID0ge1xuICAgICAgICAkbWF0Y2g6IHtcbiAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCAkc29ydCA9IHtcbiAgICAgICAgJHNvcnQ6IHtcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogLTFcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgJHNraXAgPSB7XG4gICAgICAgICRza2lwOiAxMCAqIChwYWdlIC0gMSlcbiAgICB9XG4gICAgY29uc3QgJGxpbWl0ID0ge1xuICAgICAgICAkbGltaXQ6IDEwXG4gICAgfVxuICAgIGNvbnN0ICRwaXBlbGluZSA9IFtcbiAgICAgICAgJG1hdGNoLFxuICAgICAgICAkc29ydCxcbiAgICAgICAgJHNraXAsXG4gICAgICAgICRsaW1pdFxuICAgIF1cbiAgICByZXR1cm4gYXdhaXQgYWdncmVnYXRlKE1lc3NhZ2VNb2RlbCwgJHBpcGVsaW5lKTtcbn1cbiJdfQ==