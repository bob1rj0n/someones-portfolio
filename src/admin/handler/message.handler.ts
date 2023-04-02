import { DtoGroup } from './../../common/constant/dto.group';
import { MessageDto } from './../../common/validation/dto/message.dto';
import { validateIt } from './../../common/validation/validate';
import { getMessagesByPagingService, GetMessageService, MessageService } from "../service/message.service";
import { PagingDto } from '../../common/validation/dto/paging.dto';


export async function messageHandler(req, reply) {
    const data = await validateIt(req.body, MessageDto, DtoGroup.CREATE);
    const result = await MessageService(data);
    reply.success(result._id);
};

export async function getMessageHandler(req, reply) {
    const result = await GetMessageService();
    reply.success(result);
};

export async function getPagingMessageHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getMessagesByPagingService(data);
    reply.success(result);
}
