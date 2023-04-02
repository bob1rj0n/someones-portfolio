import { BaseDto } from './../base.dto';
import { DtoGroup } from './../../constant/dto.group';
import { IsPhoneNumber, IsString } from "class-validator";
import { Transform } from 'class-transformer';

export class MessageDto extends BaseDto {
    @IsString({ groups: [DtoGroup.CREATE] })
    name: string

    @Transform(({ value }) => value ? "+" + value.replace(/[^0-9]/g, '') : value)
    @IsPhoneNumber(null, { groups: [DtoGroup.CREATE] })
    phoneNumber: string

    @IsString({ groups: [DtoGroup.CREATE] })
    subject: string

    @IsString({ groups: [DtoGroup.CREATE] })
    message: string
}
