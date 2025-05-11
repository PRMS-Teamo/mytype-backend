import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ChannelDocument = Channel & Document

@Schema({ timestamps: true })
export class Channel {
  @Prop({ required: true })
  user_id: string

  @Prop({ required: true })
  team_id: string
}

export const ChannelSchema = SchemaFactory.createForClass(Channel)
ChannelSchema.index({ user_id: 1, team_id: 1 }, { unique: true })
