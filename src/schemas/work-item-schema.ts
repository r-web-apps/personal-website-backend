import {Document} from "mongoose";
import {useTimestamps} from 'mongoose-types';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export class Duration {
    start?: string;
    end?: string;
}

@Schema()
export class WorkItem extends Document {
    @Prop()
    id: string;

    @Prop()
    company: string;

    @Prop()
    duration: Duration;

    @Prop()
    image: string;

    @Prop([String])
    responsibilities: string[];

    @Prop()
    summary: string;

    @Prop([String])
    technologies: string[];
}

const workItemSchema = SchemaFactory.createForClass(WorkItem);
workItemSchema.plugin(useTimestamps);
export const WorkItemSchema = workItemSchema;
