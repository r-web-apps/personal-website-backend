import { Document } from 'mongoose';
import { useTimestamps } from 'mongoose-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export class Duration {
  start?: string;
  end?: string;
}

@Schema()
export class EduItem extends Document {
  @Prop()
  id: string;
  @Prop()
  subject: string;
  @Prop()
  university: string;
  @Prop()
  degree: string;
  @Prop()
  duration: Duration;
  @Prop()
  status: 'completed' | 'incomplete' | 'switched';
  @Prop([String])
  courses: string[];
  @Prop()
  url: string;
}

const eduItemSchema = SchemaFactory.createForClass(EduItem);
eduItemSchema.plugin(useTimestamps);
export const EduItemSchema = eduItemSchema;
