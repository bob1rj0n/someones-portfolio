"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIt = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const base_response_1 = require("../error/base.response");
const validateIt = async (data, classType, groups) => {
    if (!data)
        throw base_response_1.BaseResponse.ValidationError(null);
    const classData = (0, class_transformer_1.plainToClass)(classType, data, {
        excludeExtraneousValues: false,
        enableCircularCheck: true
    });
    const errors = await (0, class_validator_1.validate)(classData, { groups, whitelist: true });
    if (!errors || errors.length === 0)
        return classData;
    throw base_response_1.BaseResponse.ValidationError(convertError(errors));
};
exports.validateIt = validateIt;
const convertError = (errors) => {
    if (!errors || errors.length == 0)
        return [];
    return errors.map((item) => {
        return {
            constraints: convertConstraints(item.constraints),
            contexts: convertConstraints(item.contexts),
            property: item.property,
            children: convertError(item.children),
        };
    });
};
const convertConstraints = (data) => {
    if (!data)
        return [];
    return Object.keys(data).map((key) => {
        return {
            key: key,
            value: data[key],
        };
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL3ZhbGlkYXRpb24vdmFsaWRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseURBQWlIO0FBQ2pILHFEQUE0RDtBQUM1RCwwREFBc0Q7QUFHL0MsTUFBTSxVQUFVLEdBQUcsS0FBSyxFQUFLLElBQVMsRUFBRSxTQUE4QixFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ3JGLElBQUksQ0FBQyxJQUFJO1FBQUUsTUFBTSw0QkFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwRCxNQUFNLFNBQVMsR0FBRyxJQUFBLGdDQUFZLEVBQUMsU0FBUyxFQUFFLElBQVMsRUFBRTtRQUNqRCx1QkFBdUIsRUFBRSxLQUFLO1FBQzlCLG1CQUFtQixFQUFFLElBQUk7S0FDNUIsQ0FBQyxDQUFDO0lBRUgsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLDBCQUFRLEVBQUMsU0FBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3RSxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sU0FBUyxDQUFDO0lBRXJELE1BQU0sNEJBQVksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDN0QsQ0FBQyxDQUFDO0FBWlcsUUFBQSxVQUFVLGNBWXJCO0FBRUYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUEwQixFQUFFLEVBQUU7SUFDaEQsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUM7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUU3QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN2QixPQUFPO1lBQ0gsV0FBVyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDakQsUUFBUSxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDM0MsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN4QyxDQUFDO0lBQ04sQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFRixNQUFNLGtCQUFrQixHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDaEMsSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUNyQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDakMsT0FBTztZQUNILEdBQUcsRUFBRSxHQUFHO1lBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDbkIsQ0FBQztJQUNOLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xhc3NDb25zdHJ1Y3RvciwgY2xhc3NUb0NsYXNzRnJvbUV4aXN0LCBwbGFpblRvQ2xhc3MsIHBsYWluVG9DbGFzc0Zyb21FeGlzdCB9IGZyb20gXCJjbGFzcy10cmFuc2Zvcm1lclwiO1xuaW1wb3J0IHsgdmFsaWRhdGUsIFZhbGlkYXRpb25FcnJvciB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCIuLi9lcnJvci9iYXNlLnJlc3BvbnNlXCI7XG5cblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlSXQgPSBhc3luYyA8VD4oZGF0YTogYW55LCBjbGFzc1R5cGU6IENsYXNzQ29uc3RydWN0b3I8VD4sIGdyb3VwcykgPT4ge1xuICAgIGlmICghZGF0YSkgdGhyb3cgQmFzZVJlc3BvbnNlLlZhbGlkYXRpb25FcnJvcihudWxsKTtcblxuICAgIGNvbnN0IGNsYXNzRGF0YSA9IHBsYWluVG9DbGFzcyhjbGFzc1R5cGUsIGRhdGEgYXMgVCwge1xuICAgICAgICBleGNsdWRlRXh0cmFuZW91c1ZhbHVlczogZmFsc2UsXG4gICAgICAgIGVuYWJsZUNpcmN1bGFyQ2hlY2s6IHRydWVcbiAgICB9KTtcblxuICAgIGNvbnN0IGVycm9ycyA9IGF3YWl0IHZhbGlkYXRlKGNsYXNzRGF0YSBhcyBhbnksIHsgZ3JvdXBzLCB3aGl0ZWxpc3Q6IHRydWUgfSk7XG4gICAgaWYgKCFlcnJvcnMgfHwgZXJyb3JzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNsYXNzRGF0YTtcblxuICAgIHRocm93IEJhc2VSZXNwb25zZS5WYWxpZGF0aW9uRXJyb3IoY29udmVydEVycm9yKGVycm9ycykpO1xufTtcblxuY29uc3QgY29udmVydEVycm9yID0gKGVycm9ycz86IFZhbGlkYXRpb25FcnJvcltdKSA9PiB7XG4gICAgaWYgKCFlcnJvcnMgfHwgZXJyb3JzLmxlbmd0aCA9PSAwKSByZXR1cm4gW107XG5cbiAgICByZXR1cm4gZXJyb3JzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29uc3RyYWludHM6IGNvbnZlcnRDb25zdHJhaW50cyhpdGVtLmNvbnN0cmFpbnRzKSxcbiAgICAgICAgICAgIGNvbnRleHRzOiBjb252ZXJ0Q29uc3RyYWludHMoaXRlbS5jb250ZXh0cyksXG4gICAgICAgICAgICBwcm9wZXJ0eTogaXRlbS5wcm9wZXJ0eSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjb252ZXJ0RXJyb3IoaXRlbS5jaGlsZHJlbiksXG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuXG5jb25zdCBjb252ZXJ0Q29uc3RyYWludHMgPSAoZGF0YSkgPT4ge1xuICAgIGlmICghZGF0YSkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogZGF0YVtrZXldLFxuICAgICAgICB9O1xuICAgIH0pO1xufTtcbiJdfQ==