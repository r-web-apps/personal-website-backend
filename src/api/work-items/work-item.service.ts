import {InjectModel} from "@nestjs/mongoose";
import {WorkItem} from "../../schemas/work-item-schema";
import {Model} from "mongoose";
import {CreateWorkItemDto} from "../../schemas/dto/create.work-item.dto";
import {FindWorkItemDto} from "../../schemas/dto/find.work-item.dto";

export class WorkItemService {

    constructor(@InjectModel(WorkItem.name) private workItemModel: Model<WorkItem>) {
    }

    async findAll(): Promise<WorkItem[]> {
        return this.workItemModel.find().exec();
    }

    async upsert(filter: FindWorkItemDto | null, update: CreateWorkItemDto): Promise<WorkItem> {
        return this.workItemModel.updateOne(filter, update, {
            upsert: true,
            strict: false,
        }).exec();
    }

    async delete(item: FindWorkItemDto): Promise<unknown> {
        return this.workItemModel.deleteOne(item).exec();
    }
}