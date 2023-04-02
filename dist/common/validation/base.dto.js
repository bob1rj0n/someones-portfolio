"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const dto_group_1 = require("../constant/dto.group");
class BaseDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [dto_group_1.DtoGroup.UPDATE] }),
    (0, class_validator_1.IsMongoId)({
        groups: [
            dto_group_1.DtoGroup.GET_BY_ID,
            dto_group_1.DtoGroup.UPDATE,
            dto_group_1.DtoGroup.DELETE,
            dto_group_1.DtoGroup.ACTIVATE
        ]
    }),
    tslib_1.__metadata("design:type", String)
], BaseDto.prototype, "_id", void 0);
exports.BaseDto = BaseDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL3ZhbGlkYXRpb24vYmFzZS5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQUF3RDtBQUN4RCxxREFBaUQ7QUFFakQsTUFBYSxPQUFPO0NBV25CO0FBVkc7SUFBQyxJQUFBLDRCQUFVLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxvQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDekMsSUFBQSwyQkFBUyxFQUFDO1FBQ1AsTUFBTSxFQUFFO1lBQ0osb0JBQVEsQ0FBQyxTQUFTO1lBQ2xCLG9CQUFRLENBQUMsTUFBTTtZQUNmLG9CQUFRLENBQUMsTUFBTTtZQUNmLG9CQUFRLENBQUMsUUFBUTtTQUNwQjtLQUNKLENBQUM7O29DQUNTO0FBVmYsMEJBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc01vbmdvSWQsIElzT3B0aW9uYWwgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBEdG9Hcm91cCB9IGZyb20gXCIuLi9jb25zdGFudC9kdG8uZ3JvdXBcIjtcblxuZXhwb3J0IGNsYXNzIEJhc2VEdG8ge1xuICAgIEBJc09wdGlvbmFsKHsgZ3JvdXBzOiBbRHRvR3JvdXAuVVBEQVRFXSB9KVxuICAgIEBJc01vbmdvSWQoe1xuICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICAgIER0b0dyb3VwLkdFVF9CWV9JRCxcbiAgICAgICAgICAgIER0b0dyb3VwLlVQREFURSxcbiAgICAgICAgICAgIER0b0dyb3VwLkRFTEVURSxcbiAgICAgICAgICAgIER0b0dyb3VwLkFDVElWQVRFXG4gICAgICAgIF1cbiAgICB9KVxuICAgIF9pZDogc3RyaW5nXG59XG4iXX0=