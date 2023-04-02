"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authPlugin = exports.jwtSignUser = exports.jwtSign = exports.authToken = void 0;
const tslib_1 = require("tslib");
const jwt_1 = tslib_1.__importDefault(require("@fastify/jwt"));
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const config_1 = require("../config/config");
async function authToken(req, reply) {
    try {
        req.user = await req.jwtVerify();
    }
    catch (e) {
        return reply.status(401).send({
            errorCode: 401,
            code: 401,
            message: "Unauthorized"
        });
    }
}
exports.authToken = authToken;
async function plugin(server, opt, next) {
    server.register(jwt_1.default, { secret: config_1.ENV.TOKEN_KEY, sign: { expiresIn: "1y" } });
    server.addHook("onRequest", function (req, reply, next) {
        try {
            req.server = server;
        }
        catch (error) {
            // console.log(error)
        }
        next();
    });
    server.decorate("authToken", authToken);
    next();
}
function jwtSign(req, params) {
    return req.server.jwt.sign(params);
}
exports.jwtSign = jwtSign;
function jwtSignUser(req, params) {
    return req.server.jwt.sign(params);
}
exports.jwtSignUser = jwtSignUser;
exports.authPlugin = (0, fastify_plugin_1.default)(plugin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL21pZGRsZXdhcmUvYXV0aGVudGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLCtEQUFzQztBQUN0Qyw0RUFBK0I7QUFDL0IsNkNBQXNDO0FBSS9CLEtBQUssVUFBVSxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUs7SUFDdEMsSUFBSTtRQUNBLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUE7S0FDbkM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUIsU0FBUyxFQUFFLEdBQUc7WUFDZCxJQUFJLEVBQUUsR0FBRztZQUNULE9BQU8sRUFBRSxjQUFjO1NBQzFCLENBQUMsQ0FBQTtLQUNMO0FBQ0wsQ0FBQztBQVZELDhCQVVDO0FBRUQsS0FBSyxVQUFVLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDbkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBRWpGLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJO1FBQ2xELElBQUk7WUFDQSxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtTQUN0QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1oscUJBQXFCO1NBQ3hCO1FBQ0QsSUFBSSxFQUFFLENBQUE7SUFDVixDQUFDLENBQUMsQ0FBQTtJQUVGLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBRXZDLElBQUksRUFBRSxDQUFBO0FBQ1YsQ0FBQztBQUdELFNBQWdCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTTtJQUMvQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN0QyxDQUFDO0FBRkQsMEJBRUM7QUFFRCxTQUFnQixXQUFXLENBQUMsR0FBRyxFQUFFLE1BQU07SUFDbkMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDdEMsQ0FBQztBQUZELGtDQUVDO0FBRVksUUFBQSxVQUFVLEdBQUcsSUFBQSx3QkFBRSxFQUFDLE1BQU0sQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZhc3RpZnlKd3QgZnJvbSBcIkBmYXN0aWZ5L2p3dFwiO1xuaW1wb3J0IGZwIGZyb20gXCJmYXN0aWZ5LXBsdWdpblwiXG5pbXBvcnQgeyBFTlYgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiXG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aFRva2VuKHJlcSwgcmVwbHkpIHtcbiAgICB0cnkge1xuICAgICAgICByZXEudXNlciA9IGF3YWl0IHJlcS5qd3RWZXJpZnkoKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDEpLnNlbmQoe1xuICAgICAgICAgICAgZXJyb3JDb2RlOiA0MDEsXG4gICAgICAgICAgICBjb2RlOiA0MDEsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwbHVnaW4oc2VydmVyLCBvcHQsIG5leHQpIHtcbiAgICBzZXJ2ZXIucmVnaXN0ZXIoZmFzdGlmeUp3dCwgeyBzZWNyZXQ6IEVOVi5UT0tFTl9LRVksIHNpZ246IHsgZXhwaXJlc0luOiBcIjF5XCIgfSB9KVxuXG4gICAgc2VydmVyLmFkZEhvb2soXCJvblJlcXVlc3RcIiwgZnVuY3Rpb24gKHJlcSwgcmVwbHksIG5leHQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlcS5zZXJ2ZXIgPSBzZXJ2ZXJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgICAgIG5leHQoKVxuICAgIH0pXG5cbiAgICBzZXJ2ZXIuZGVjb3JhdGUoXCJhdXRoVG9rZW5cIiwgYXV0aFRva2VuKVxuXG4gICAgbmV4dCgpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGp3dFNpZ24ocmVxLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gcmVxLnNlcnZlci5qd3Quc2lnbihwYXJhbXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqd3RTaWduVXNlcihyZXEsIHBhcmFtcykge1xuICAgIHJldHVybiByZXEuc2VydmVyLmp3dC5zaWduKHBhcmFtcylcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhQbHVnaW4gPSBmcChwbHVnaW4pIl19