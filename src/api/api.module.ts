import {Module} from '@nestjs/common';
import {StatusController} from "./status.controller";
import {StatusService} from "./status.service";
import {WorkItemController} from "./work-items/work-item.controller";
import {WorkItemService} from "./work-items/work-item.service";
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import {WorkItem, WorkItemSchema} from "../schemas/work-item-schema";

@Module({
    imports: [ConfigModule, MongooseModule.forFeature([{name: WorkItem.name, schema: WorkItemSchema}])],
    controllers: [StatusController, WorkItemController],
    providers: [StatusService, WorkItemService],
})
export class ApiModule {}
