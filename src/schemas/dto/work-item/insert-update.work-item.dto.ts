import {FindWorkItemDto} from "./find.work-item.dto";
import {CreateWorkItemDto} from "./create.work-item.dto";

export class InsertUpdateWorkItemDto {
    readonly filter: FindWorkItemDto;
    readonly update: CreateWorkItemDto;
}