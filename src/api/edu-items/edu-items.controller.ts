import { EduItemsService } from './edu-items.service';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { EduItem } from '../../schemas/edu-item.schema';
import { InsertUpdateEduItemDto } from '../../schemas/edu-item/insert-update.edu-item.dto';
import { FindEduItemDto } from '../../schemas/edu-item/find.edu-item.dto';

@Controller('/edu-items')
export class EduItemsController {
  constructor(private eduItemService: EduItemsService) {}

  @Get()
  getAllEduItems(): Promise<unknown> {
    return new Promise<unknown>((resolve) => {
      resolve(this.eduItemService.findAll());
    });
  }

  @Post()
  async createElement(@Body() item: InsertUpdateEduItemDto): Promise<EduItem> {
    const filter = item.filter;
    const update = item.update;
    return this.eduItemService.upsert(filter, update);
  }

  @Delete()
  async deleteElement(@Body() item: FindEduItemDto) {
    return this.eduItemService.delete(item);
  }
}
