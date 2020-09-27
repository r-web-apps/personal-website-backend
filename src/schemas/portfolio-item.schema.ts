import { useTimestamps } from 'mongoose-types';
import { Document } from 'mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class PortfolioItem extends Document {
  @Prop()
  id: string;
  @Prop()
  title: string;
  @Prop()
  portfolioItemType: number;
  @Prop()
  url: string;
  @Prop()
  abbr: string;
  @Prop()
  linesOfCode?: number;
  @Prop([String])
  langs?: string[];
}

const portfolioItemSchema = SchemaFactory.createForClass(PortfolioItem);
portfolioItemSchema.plugin(useTimestamps);
export const PortfolioItemSchema = portfolioItemSchema;
