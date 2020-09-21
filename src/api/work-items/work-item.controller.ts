import { WorkItemService } from './work-item.service';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WorkItem } from '../../schemas/work-item-schema';
import { InsertUpdateWorkItemDto } from '../../schemas/dto/work-item/insert-update.work-item.dto';
import { FindWorkItemDto } from '../../schemas/dto/work-item/find.work-item.dto';

@Controller('/work-items')
export class WorkItemController {
  constructor(
    private workItemsService: WorkItemService,
    private configService: ConfigService,
  ) {}

  @Get()
  getAllWorkItems(): Promise<unknown[]> {
    return new Promise<unknown[]>((resolve) => {
      resolve(this.workItemsService.findAll());
    });
  }

  @Post()
  async createElement(
    @Body() item: InsertUpdateWorkItemDto,
  ): Promise<WorkItem> {
    console.log('Filter: ', item.filter);
    console.log('Update: ', item.update);
    const filter = item.filter;
    const update = item.update;
    return this.workItemsService.upsert(filter, update);
  }

  @Delete()
  async deleteElement(@Body() item: FindWorkItemDto) {
    return this.workItemsService.delete(item);
  }
}
