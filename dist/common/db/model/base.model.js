"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
let BaseModel = class BaseModel {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], BaseModel.prototype, "isDeleted", void 0);
BaseModel = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true
        }
    })
], BaseModel);
exports.BaseModel = BaseModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWwvYmFzZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQTBEO0FBUW5ELElBQU0sU0FBUyxHQUFmLE1BQU0sU0FBUztDQU1yQixDQUFBO0FBTEc7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7OzRDQUNQO0FBRlQsU0FBUztJQU5yQixJQUFBLHdCQUFZLEVBQUM7UUFDVixhQUFhLEVBQUU7WUFDWCxVQUFVLEVBQUUsSUFBSTtTQUNuQjtLQUNKLENBQUM7R0FFVyxTQUFTLENBTXJCO0FBTlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RlbE9wdGlvbnMsIHByb3AgfSBmcm9tIFwiQHR5cGVnb29zZS90eXBlZ29vc2VcIjtcblxuQG1vZGVsT3B0aW9ucyh7XG4gICAgc2NoZW1hT3B0aW9uczoge1xuICAgICAgICB0aW1lc3RhbXBzOiB0cnVlXG4gICAgfVxufSlcblxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbCB7XG4gICAgQHByb3AoeyBkZWZhdWx0OiBmYWxzZSB9KVxuICAgIGlzRGVsZXRlZDogYm9vbGVhblxuXG4gICAgY3JlYXRlZEF0OiBEYXRlXG4gICAgdXBkYXRlZEF0OiBEYXRlXG59XG4iXX0=