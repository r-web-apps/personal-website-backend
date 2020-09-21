import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { SkillItemsService } from './skill-items.service';
import { InsertUpdateSkillItemDto } from '../../schemas/dto/skill-item/insert-update.skill-item.dto';
import { SkillItem } from '../../schemas/skill-item-schema';

@Controller('/skill-items')
export class SkillItemsController {
  constructor(private skillItemsService: SkillItemsService) {}

  @Get()
  getAllWorkItems(): Promise<unknown[]> {
    return new Promise<unknown[]>((resolve) => {
      resolve(this.skillItemsService.findAll());
    });
  }

  @Post()
  async createElement(
    @Body() item: InsertUpdateSkillItemDto,
  ): Promise<SkillItem> {
    console.log('Filter: ', item.filter);
    console.log('Update: ', item.update);
    const filter = item.filter;
    const update = item.update;
    return this.skillItemsService.upsert(filter, update);
  }

  @Delete()
  async deleteElement(@Body() item: SkillItem) {
    return this.skillItemsService.delete(item);
  }
}
