import { Document } from 'mongoose';
import { useTimestamps } from 'mongoose-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  Certificate,
  SkillDirection,
  SkillType,
} from './dto/skill-item/create.skill-item.dto';

export class Duration {
  start?: string;
  end?: string;
}

@Schema()
export class SkillItem extends Document {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  svg: string;

  @Prop()
  value: number;

  @Prop()
  type: SkillType;

  @Prop()
  status: SkillDirection;

  @Prop([Certificate])
  certificates: Certificate[] | undefined;

  @Prop()
  tag: string | undefined;

  @Prop()
  date: Date | undefined;

  @Prop([String])
  frameworks: string[] | undefined;
}

const skillItemSchema = SchemaFactory.createForClass(SkillItem);
skillItemSchema.plugin(useTimestamps);
export const SkillItemSchema = skillItemSchema;
