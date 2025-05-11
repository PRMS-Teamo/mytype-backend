import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema({ timestamps: true })
export class InsiderToOutsider {
  @Prop({ required: true })
  channel_id: string

  @Prop({ required: true })
  insider_id: string

  @Prop({ required: true })
  outsider_id: string
}

export const InsiderToOutsiderSchema =
  SchemaFactory.createForClass(InsiderToOutsider)
