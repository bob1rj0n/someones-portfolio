"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyPlugin = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const base_response_1 = require("../error/base.response");
async function reply(server, optinons, next) {
    server.decorateReply("success", function (resultData) {
        const result = base_response_1.BaseResponse.Success(resultData);
        this.status(200).send({
            ...result,
            time: new Date(),
        });
    });
    server.setErrorHandler((error, request, reply) => {
        if (error instanceof base_response_1.BaseResponse) {
            reply.status(400).send(error);
        }
        else {
            reply.send(error);
        }
    });
    next();
}
exports.replyPlugin = (0, fastify_plugin_1.default)(reply);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL2RlY29yYXRvci9yZXBseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNEVBQWdDO0FBQ2hDLDBEQUFzRDtBQUd0RCxLQUFLLFVBQVUsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSTtJQUN2QyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxVQUFVLFVBQWU7UUFDckQsTUFBTSxNQUFNLEdBQUcsNEJBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxNQUFNO1lBQ1QsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1NBQ25CLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBRUYsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDN0MsSUFBSSxLQUFLLFlBQVksNEJBQVksRUFBRTtZQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNoQzthQUFNO1lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNwQjtJQUNMLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxFQUFFLENBQUM7QUFDWCxDQUFDO0FBRVksUUFBQSxXQUFXLEdBQUcsSUFBQSx3QkFBRSxFQUFDLEtBQUssQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZwIGZyb20gXCJmYXN0aWZ5LXBsdWdpblwiO1xuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIi4uL2Vycm9yL2Jhc2UucmVzcG9uc2VcIjtcblxuXG5hc3luYyBmdW5jdGlvbiByZXBseShzZXJ2ZXIsIG9wdGlub25zLCBuZXh0KSB7XG4gICAgc2VydmVyLmRlY29yYXRlUmVwbHkoXCJzdWNjZXNzXCIsIGZ1bmN0aW9uIChyZXN1bHREYXRhOiBhbnkpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gQmFzZVJlc3BvbnNlLlN1Y2Nlc3MocmVzdWx0RGF0YSk7XG4gICAgICAgIHRoaXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBzZXJ2ZXIuc2V0RXJyb3JIYW5kbGVyKChlcnJvciwgcmVxdWVzdCwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgQmFzZVJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXBseS5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVwbHkuc2VuZChlcnJvcilcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBuZXh0KCk7XG59XG5cbmV4cG9ydCBjb25zdCByZXBseVBsdWdpbiA9IGZwKHJlcGx5KSJdfQ==