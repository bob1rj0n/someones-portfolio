import { CollectionNames } from './../../constant/collections';
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { BaseModel } from "./base.model";

@modelOptions({
    schemaOptions: { collection: CollectionNames.MESSAGE }
})


export class Message extends BaseModel {
    @prop({ required: true })
    name: string

    @prop({ required: true })
    phoneNumber: string

    @prop({ required: true })
    subject: string

    @prop({ required: true })
    message: string
}

export const MessageModel = getModelForClass(Message);
