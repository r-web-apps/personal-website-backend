import {Duration} from "../work-item-schema";

export class CreateWorkItemDto {
    readonly company: string;
    readonly duration: Duration;
    readonly image: string;
    readonly position: string;
    readonly responsibilities: string[];
    readonly summary: string;
    readonly technologies: string[];
}