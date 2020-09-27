import { NotImplementedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PortfolioItem } from '../../schemas/portfolio-item.schema';
import { Model } from 'mongoose';
import { FindPortfolioItemDto } from '../../schemas/dto/portfolio-item/find-portfolio-item.dto';
import { CreatePortfolioItemDto } from '../../schemas/dto/portfolio-item/create-portfolio-item.dto';
import { tsconfigPathsBeforeHookFactory } from '@nestjs/cli/lib/compiler/hooks/tsconfig-paths.hook';

export class PortfolioItemsService {
  constructor(
    @InjectModel(PortfolioItem.name)
    private portfolioItemModel: Model<PortfolioItem>,
  ) {}

  async findAll(): Promise<PortfolioItem[]> {
    return this.portfolioItemModel.find().exec();
  }

  async upsert(
    filter: FindPortfolioItemDto | null,
    update: CreatePortfolioItemDto,
  ): Promise<PortfolioItem> {
    return this.portfolioItemModel
      .updateOne(filter, update, {
        upsert: true,
        strict: false,
      })
      .exec();
  }

  async delete(item: FindPortfolioItemDto): Promise<unknown> {
    return this.portfolioItemModel.deleteOne(item).exec();
  }
}
