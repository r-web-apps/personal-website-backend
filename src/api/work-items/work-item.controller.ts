import {WorkItemService} from "./work-item.service";
import {Body, Controller, Delete, Get, Post} from "@nestjs/common";
import {WorkItemModel} from "./work-item.model";
import {ConfigService} from "@nestjs/config";
import {WorkItem} from "../../schemas/work-item-schema";
import {InsertUpdateWorkItemDto} from "../../schemas/dto/insert-update.work-item.dto";
import {FindWorkItemDto} from "../../schemas/dto/find.work-item.dto";

@Controller('/work-items')
export class WorkItemController {

    constructor(private workItemsService: WorkItemService,
                private configService: ConfigService) {
    }

    @Get()
    getAllWorkItems(): Promise<WorkItemModel[]> {
        return new Promise<WorkItemModel[]>((resolve) => {
            resolve(this.workItemsService.findAll())
        })
    }

    @Post()
    async createElement(@Body() item: InsertUpdateWorkItemDto): Promise<WorkItem> {
        const filter = item.filter;
        const update = item.update;
        return this.workItemsService.upsert(filter, update);
    }

    @Delete()
    async deleteElement(@Body() item: FindWorkItemDto) {
        return this.workItemsService.delete(item);
    }

}