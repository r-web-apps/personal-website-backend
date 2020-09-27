import {
  Body,
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Post,
} from '@nestjs/common';
import { PortfolioItemsService } from './portfolio-items.service';
import { InsertUpdatePortfolioItemDto } from '../../schemas/dto/portfolio-item/insert-update-portfolio-item.dto';
import { PortfolioItem } from '../../schemas/portfolio-item.schema';
import { FindPortfolioItemDto } from '../../schemas/dto/portfolio-item/find-portfolio-item.dto';

@Controller('/portfolio-items')
export class PortfolioItemsController {
  constructor(private portfolioItemsService: PortfolioItemsService) {}

  @Get()
  getAllPortfolioItems(): Promise<unknown> {
    return new Promise<unknown>((resolve) => {
      resolve(this.portfolioItemsService.findAll());
    });
  }

  @Post()
  async createElement(
    @Body() item: InsertUpdatePortfolioItemDto,
  ): Promise<PortfolioItem> {
    const filter = item.filter;
    const update = item.update;
    return this.portfolioItemsService.upsert(filter, update);
  }

  @Delete()
  async deleteElement(@Body() item: FindPortfolioItemDto) {
    return this.portfolioItemsService.delete(item);
  }
}
