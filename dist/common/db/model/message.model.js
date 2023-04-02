"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModel = exports.Message = void 0;
const tslib_1 = require("tslib");
const collections_1 = require("./../../constant/collections");
const typegoose_1 = require("@typegoose/typegoose");
const base_model_1 = require("./base.model");
let Message = class Message extends base_model_1.BaseModel {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "subject", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "message", void 0);
Message = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: { collection: collections_1.CollectionNames.MESSAGE }
    })
], Message);
exports.Message = Message;
exports.MessageModel = (0, typegoose_1.getModelForClass)(Message);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWwvbWVzc2FnZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsOERBQStEO0FBQy9ELG9EQUE0RTtBQUM1RSw2Q0FBeUM7QUFPbEMsSUFBTSxPQUFPLEdBQWIsTUFBTSxPQUFRLFNBQVEsc0JBQVM7Q0FZckMsQ0FBQTtBQVhHO0lBQUMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztxQ0FDYjtBQUVaO0lBQUMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzs0Q0FDTjtBQUVuQjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7d0NBQ1Y7QUFFZjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7d0NBQ1Y7QUFYTixPQUFPO0lBTG5CLElBQUEsd0JBQVksRUFBQztRQUNWLGFBQWEsRUFBRSxFQUFFLFVBQVUsRUFBRSw2QkFBZSxDQUFDLE9BQU8sRUFBRTtLQUN6RCxDQUFDO0dBR1csT0FBTyxDQVluQjtBQVpZLDBCQUFPO0FBY1AsUUFBQSxZQUFZLEdBQUcsSUFBQSw0QkFBZ0IsRUFBQyxPQUFPLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxlY3Rpb25OYW1lcyB9IGZyb20gJy4vLi4vLi4vY29uc3RhbnQvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0TW9kZWxGb3JDbGFzcywgbW9kZWxPcHRpb25zLCBwcm9wIH0gZnJvbSBcIkB0eXBlZ29vc2UvdHlwZWdvb3NlXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tIFwiLi9iYXNlLm1vZGVsXCI7XG5cbkBtb2RlbE9wdGlvbnMoe1xuICAgIHNjaGVtYU9wdGlvbnM6IHsgY29sbGVjdGlvbjogQ29sbGVjdGlvbk5hbWVzLk1FU1NBR0UgfVxufSlcblxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIEJhc2VNb2RlbCB7XG4gICAgQHByb3AoeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgIG5hbWU6IHN0cmluZ1xuXG4gICAgQHByb3AoeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgIHBob25lTnVtYmVyOiBzdHJpbmdcblxuICAgIEBwcm9wKHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICBzdWJqZWN0OiBzdHJpbmdcblxuICAgIEBwcm9wKHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICBtZXNzYWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VNb2RlbCA9IGdldE1vZGVsRm9yQ2xhc3MoTWVzc2FnZSk7XG4iXX0=