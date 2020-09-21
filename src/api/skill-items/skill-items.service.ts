import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSkill } from '../../schemas/dto/skill-item/create.skill-item.dto';
import { SkillItem } from '../../schemas/skill-item-schema';

export class SkillItemsService {
  constructor(
    @InjectModel(SkillItem.name) private skillItemModel: Model<SkillItem>,
  ) {}

  async findAll(): Promise<CreateSkill[]> {
    return this.skillItemModel.find().exec();
  }

  async upsert(
    filter: CreateSkill | null,
    update: CreateSkill,
  ): Promise<SkillItem> {
    return this.skillItemModel
      .updateOne(filter, update, {
        upsert: true,
        strict: false,
      })
      .exec();
  }

  async delete(item: CreateSkill): Promise<unknown> {
    return this.skillItemModel.deleteOne(item).exec();
  }
}
