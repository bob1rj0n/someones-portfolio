export declare function authToken(req: any, reply: any): Promise<any>;
export declare function jwtSign(req: any, params: any): any;
export declare function jwtSignUser(req: any, params: any): any;
export declare const authPlugin: import("fastify").FastifyPluginCallback<any, import("fastify").RawServerDefault, import("fastify").FastifyTypeProviderDefault, import("fastify").FastifyBaseLogger>;
