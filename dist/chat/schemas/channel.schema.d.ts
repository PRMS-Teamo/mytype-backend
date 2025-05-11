import { Document } from 'mongoose';
export type ChannelDocument = Channel & Document;
export declare class Channel {
    user_id: string;
    team_id: string;
}
export declare const ChannelSchema: import("mongoose").Schema<Channel, import("mongoose").Model<Channel, any, any, any, Document<unknown, any, Channel, any> & Channel & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Channel, Document<unknown, {}, import("mongoose").FlatRecord<Channel>, {}> & import("mongoose").FlatRecord<Channel> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
