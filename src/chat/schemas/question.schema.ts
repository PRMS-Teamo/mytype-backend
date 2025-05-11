import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema({ timestamps: true })
export class Question {
  @Prop({ required: true })
  user_id: string

  @Prop({ required: true })
  message: string
}

export const QuestionSchema = SchemaFactory.createForClass(Question)
