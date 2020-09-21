import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';
import { WorkItemController } from './work-items/work-item.controller';
import { WorkItemService } from './work-items/work-item.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkItem, WorkItemSchema } from '../schemas/work-item-schema';
import { SkillItemsService } from './skill-items/skill-items.service';
import { SkillItemsController } from './skill-items/skill-items.controller';
import { SkillItem, SkillItemSchema } from '../schemas/skill-item-schema';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: WorkItem.name, schema: WorkItemSchema },
      { name: SkillItem.name, schema: SkillItemSchema },
    ]),
  ],
  controllers: [StatusController, WorkItemController, SkillItemsController],
  providers: [StatusService, WorkItemService, SkillItemsService],
})
export class ApiModule {}
