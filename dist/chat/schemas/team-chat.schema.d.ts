export declare class TeamChat {
    channel_id: string;
    user_id: string;
    message: string;
}
export declare const TeamChatSchema: import("mongoose").Schema<TeamChat, import("mongoose").Model<TeamChat, any, any, any, import("mongoose").Document<unknown, any, TeamChat, any> & TeamChat & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TeamChat, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<TeamChat>, {}> & import("mongoose").FlatRecord<TeamChat> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
