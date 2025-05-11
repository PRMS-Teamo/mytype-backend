import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema({ timestamps: true })
export class TeamChat {
  @Prop({ required: true })
  channel_id: string

  @Prop({ required: true })
  user_id: string

  @Prop({ required: true })
  message: string
}

export const TeamChatSchema = SchemaFactory.createForClass(TeamChat)
