"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDto = void 0;
const tslib_1 = require("tslib");
const base_dto_1 = require("./../base.dto");
const dto_group_1 = require("./../../constant/dto.group");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class MessageDto extends base_dto_1.BaseDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ groups: [dto_group_1.DtoGroup.CREATE] }),
    tslib_1.__metadata("design:type", String)
], MessageDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value ? "+" + value.replace(/[^0-9]/g, '') : value),
    (0, class_validator_1.IsPhoneNumber)(null, { groups: [dto_group_1.DtoGroup.CREATE] }),
    tslib_1.__metadata("design:type", String)
], MessageDto.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ groups: [dto_group_1.DtoGroup.CREATE] }),
    tslib_1.__metadata("design:type", String)
], MessageDto.prototype, "subject", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ groups: [dto_group_1.DtoGroup.CREATE] }),
    tslib_1.__metadata("design:type", String)
], MessageDto.prototype, "message", void 0);
exports.MessageDto = MessageDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL3ZhbGlkYXRpb24vZHRvL21lc3NhZ2UuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw0Q0FBd0M7QUFDeEMsMERBQXNEO0FBQ3RELHFEQUEwRDtBQUMxRCx5REFBOEM7QUFFOUMsTUFBYSxVQUFXLFNBQVEsa0JBQU87Q0FhdEM7QUFaRztJQUFDLElBQUEsMEJBQVEsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLG9CQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7d0NBQzVCO0FBRVo7SUFBQyxJQUFBLDZCQUFTLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzVFLElBQUEsK0JBQWEsRUFBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxvQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7OytDQUNoQztBQUVuQjtJQUFDLElBQUEsMEJBQVEsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLG9CQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7MkNBQ3pCO0FBRWY7SUFBQyxJQUFBLDBCQUFRLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxvQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7OzJDQUN6QjtBQVpuQixnQ0FhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VEdG8gfSBmcm9tICcuLy4uL2Jhc2UuZHRvJztcbmltcG9ydCB7IER0b0dyb3VwIH0gZnJvbSAnLi8uLi8uLi9jb25zdGFudC9kdG8uZ3JvdXAnO1xuaW1wb3J0IHsgSXNQaG9uZU51bWJlciwgSXNTdHJpbmcgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlRHRvIGV4dGVuZHMgQmFzZUR0byB7XG4gICAgQElzU3RyaW5nKHsgZ3JvdXBzOiBbRHRvR3JvdXAuQ1JFQVRFXSB9KVxuICAgIG5hbWU6IHN0cmluZ1xuXG4gICAgQFRyYW5zZm9ybSgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA/IFwiK1wiICsgdmFsdWUucmVwbGFjZSgvW14wLTldL2csICcnKSA6IHZhbHVlKVxuICAgIEBJc1Bob25lTnVtYmVyKG51bGwsIHsgZ3JvdXBzOiBbRHRvR3JvdXAuQ1JFQVRFXSB9KVxuICAgIHBob25lTnVtYmVyOiBzdHJpbmdcblxuICAgIEBJc1N0cmluZyh7IGdyb3VwczogW0R0b0dyb3VwLkNSRUFURV0gfSlcbiAgICBzdWJqZWN0OiBzdHJpbmdcblxuICAgIEBJc1N0cmluZyh7IGdyb3VwczogW0R0b0dyb3VwLkNSRUFURV0gfSlcbiAgICBtZXNzYWdlOiBzdHJpbmdcbn1cbiJdfQ==