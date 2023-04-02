import { BeAnObject, ModelType } from "@typegoose/typegoose/lib/types";
import mongoose, { AggregateOptions, QueryOptions, SaveOptions } from "mongoose";
import { PagingDto } from "../validation/dto/paging.dto";
export declare function withTransaction(callback: any): Promise<any>;
export declare function aggregate<T>(model: ModelType<T, BeAnObject>, pipeline: any): Promise<any[]>;
export declare function create<T>(model: ModelType<T, BeAnObject>, data: any, options?: SaveOptions): Promise<mongoose.HydratedDocument<import("@typegoose/typegoose/lib/types").DocumentType<T, BeAnObject>, {}, {}>>;
export declare function findById<T>(model: ModelType<T, BeAnObject>, _id: string, project?: {}, options?: QueryOptions): Promise<mongoose.HydratedDocument<import("@typegoose/typegoose/lib/types").DocumentType<T, BeAnObject>, {}, {}>>;
export declare function findByQuery<T>(model: ModelType<T, BeAnObject>, query: any, project?: {}, options?: QueryOptions): Promise<mongoose.HydratedDocument<import("@typegoose/typegoose/lib/types").DocumentType<T, BeAnObject>, {}, {}>>;
export declare function findByPipeline<T>(model: ModelType<T, BeAnObject>, _id: string, pipeline?: any[], options?: AggregateOptions): Promise<any>;
export declare function getPaging<T>(model: ModelType<T, BeAnObject>, dto: PagingDto, query?: any, sort?: any, pipeline?: any[]): Promise<{
    total: number;
    data: any[];
}>;
export declare function count<T>(model: ModelType<T, BeAnObject>, query: Object): Promise<number>;
export declare function updateOneById<T>(model: ModelType<T, BeAnObject>, _id: string, data: any, options?: QueryOptions): Promise<import("mongodb").UpdateResult>;
export declare function updateOneByQuery<T>(model: ModelType<T, BeAnObject>, query: any, data: any, options?: QueryOptions): Promise<void>;
export declare function updateMany<T>(model: ModelType<T, BeAnObject>, query: any, data: object, options?: QueryOptions): Promise<void>;
export declare function deleteOne<T>(model: ModelType<T, BeAnObject>, query: any): Promise<import("mongodb").DeleteResult>;
export declare function getAll<T>(model: ModelType<T, BeAnObject>, query?: {}, project?: {}): Promise<mongoose.HydratedDocument<import("@typegoose/typegoose/lib/types").DocumentType<T, BeAnObject>, {}, {}>[]>;
