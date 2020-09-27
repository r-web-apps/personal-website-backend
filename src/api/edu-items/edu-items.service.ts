import { EduItem } from '../../schemas/edu-item.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FindEduItemDto } from '../../schemas/dto/edu-item/find.edu-item.dto';
import { CreateEduItemDto } from '../../schemas/dto/edu-item/create.edu-item.dto';

export class EduItemsService {
  constructor(
    @InjectModel(EduItem.name) private eduItemModel: Model<EduItem>,
  ) {}

  async findAll(): Promise<EduItem[]> {
    return this.eduItemModel.find().exec();
  }

  async upsert(
    filter: FindEduItemDto | null,
    update: CreateEduItemDto,
  ): Promise<EduItem> {
    return this.eduItemModel
      .updateOne(filter, update, {
        upsert: true,
        strict: false,
      })
      .exec();
  }

  async delete(item: FindEduItemDto): Promise<unknown> {
    return this.eduItemModel.deleteOne(item).exec();
  }
}
