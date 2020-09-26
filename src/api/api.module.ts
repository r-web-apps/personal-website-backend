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
import { AuthController } from './auth/auth.controller';
import { EduItem, EduItemSchema } from '../schemas/edu-item.schema';
import { EduItemsController } from './edu-items/edu-items.controller';
import { EduItemsService } from './edu-items/edu-items.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: WorkItem.name, schema: WorkItemSchema },
      { name: SkillItem.name, schema: SkillItemSchema },
      { name: EduItem.name, schema: EduItemSchema },
    ]),
  ],
  controllers: [
    StatusController,
    WorkItemController,
    SkillItemsController,
    EduItemsController,
    AuthController,
  ],
  providers: [
    StatusService,
    WorkItemService,
    SkillItemsService,
    EduItemsService,
  ],
})
export class ApiModule {}
