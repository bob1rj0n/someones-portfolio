"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const config_1 = require("../config/config");
async function connectDb() {
    try {
        console.log("Database Url : " + config_1.ENV.DB_URL);
        mongoose_1.default.set("debug", true);
        await mongoose_1.default.connect(config_1.ENV.DB_URL);
        console.log("Database connected_____");
    }
    catch (e) {
        console.log("Error to connect database____");
        console.log(e);
    }
}
exports.connectDb = connectDb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9kYi9jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGdFQUErQjtBQUMvQiw2Q0FBc0M7QUFFL0IsS0FBSyxVQUFVLFNBQVM7SUFDM0IsSUFBSTtRQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsWUFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzNDLGtCQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMzQixNQUFNLGtCQUFRLENBQUMsT0FBTyxDQUFDLFlBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUE7S0FDekM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQTtRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ2pCO0FBQ0wsQ0FBQztBQVZELDhCQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiXG5pbXBvcnQgeyBFTlYgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0RGIoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBVcmwgOiBcIiArIEVOVi5EQl9VUkwpXG4gICAgICAgIG1vbmdvb3NlLnNldChcImRlYnVnXCIsIHRydWUpXG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoRU5WLkRCX1VSTClcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBjb25uZWN0ZWRfX19fX1wiKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB0byBjb25uZWN0IGRhdGFiYXNlX19fX1wiKVxuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH1cbn0iXX0=