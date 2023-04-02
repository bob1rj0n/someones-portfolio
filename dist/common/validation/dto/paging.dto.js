"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagingDto = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const dto_group_1 = require("../../constant/dto.group");
class PagingDto {
}
tslib_1.__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_validator_1.IsNumber)({
        allowInfinity: false,
        allowNaN: false,
        maxDecimalPlaces: 0
    }, {
        groups: [dto_group_1.DtoGroup.PAGING]
    }),
    (0, class_validator_1.IsPositive)({ groups: [dto_group_1.DtoGroup.PAGING] }),
    tslib_1.__metadata("design:type", Number)
], PagingDto.prototype, "page", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_validator_1.IsNumber)({
        allowInfinity: false,
        allowNaN: false,
        maxDecimalPlaces: 0
    }, {
        groups: [dto_group_1.DtoGroup.PAGING]
    }),
    (0, class_validator_1.IsPositive)({ groups: [dto_group_1.DtoGroup.PAGING] }),
    tslib_1.__metadata("design:type", Number)
], PagingDto.prototype, "limit", void 0);
exports.PagingDto = PagingDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vdmFsaWRhdGlvbi9kdG8vcGFnaW5nLmR0by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEseURBQThDO0FBQzlDLHFEQUF1RDtBQUN2RCx3REFBb0Q7QUFFcEQsTUFBYSxTQUFTO0NBNEJyQjtBQTNCRztJQUFDLElBQUEsNkJBQVMsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxJQUFBLDBCQUFRLEVBQ0w7UUFDSSxhQUFhLEVBQUUsS0FBSztRQUNwQixRQUFRLEVBQUUsS0FBSztRQUNmLGdCQUFnQixFQUFFLENBQUM7S0FDdEIsRUFDRDtRQUNJLE1BQU0sRUFBRSxDQUFDLG9CQUFRLENBQUMsTUFBTSxDQUFDO0tBQzVCLENBQ0o7SUFDQSxJQUFBLDRCQUFVLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxvQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7O3VDQUM5QjtBQUVaO0lBQUMsSUFBQSw2QkFBUyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLElBQUEsMEJBQVEsRUFDTDtRQUNJLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztLQUN0QixFQUNEO1FBQ0ksTUFBTSxFQUFFLENBQUMsb0JBQVEsQ0FBQyxNQUFNLENBQUM7S0FDNUIsQ0FDSjtJQUNBLElBQUEsNEJBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLG9CQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7d0NBQzdCO0FBM0JqQiw4QkE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwiY2xhc3MtdHJhbnNmb3JtZXJcIjtcbmltcG9ydCB7IElzTnVtYmVyLCBJc1Bvc2l0aXZlIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgRHRvR3JvdXAgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnQvZHRvLmdyb3VwXCI7XG5cbmV4cG9ydCBjbGFzcyBQYWdpbmdEdG8ge1xuICAgIEBUcmFuc2Zvcm0oKHsgdmFsdWUgfSkgPT4gTnVtYmVyKHZhbHVlKSlcbiAgICBASXNOdW1iZXIoXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFsbG93SW5maW5pdHk6IGZhbHNlLFxuICAgICAgICAgICAgYWxsb3dOYU46IGZhbHNlLFxuICAgICAgICAgICAgbWF4RGVjaW1hbFBsYWNlczogMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBncm91cHM6IFtEdG9Hcm91cC5QQUdJTkddXG4gICAgICAgIH1cbiAgICApXG4gICAgQElzUG9zaXRpdmUoeyBncm91cHM6IFtEdG9Hcm91cC5QQUdJTkddIH0pXG4gICAgcGFnZTogbnVtYmVyXG4gICAgXG4gICAgQFRyYW5zZm9ybSgoeyB2YWx1ZSB9KSA9PiBOdW1iZXIodmFsdWUpKVxuICAgIEBJc051bWJlcihcbiAgICAgICAge1xuICAgICAgICAgICAgYWxsb3dJbmZpbml0eTogZmFsc2UsXG4gICAgICAgICAgICBhbGxvd05hTjogZmFsc2UsXG4gICAgICAgICAgICBtYXhEZWNpbWFsUGxhY2VzOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdyb3VwczogW0R0b0dyb3VwLlBBR0lOR11cbiAgICAgICAgfVxuICAgIClcbiAgICBASXNQb3NpdGl2ZSh7IGdyb3VwczogW0R0b0dyb3VwLlBBR0lOR10gfSlcbiAgICBsaW1pdDogbnVtYmVyXG59Il19