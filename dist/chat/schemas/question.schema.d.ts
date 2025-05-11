export declare class Question {
    user_id: string;
    message: string;
}
export declare const QuestionSchema: import("mongoose").Schema<Question, import("mongoose").Model<Question, any, any, any, import("mongoose").Document<unknown, any, Question, any> & Question & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Question, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Question>, {}> & import("mongoose").FlatRecord<Question> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
