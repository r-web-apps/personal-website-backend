import { CreateSkill } from './create.skill-item.dto';

export class InsertUpdateSkillItemDto {
  readonly filter: CreateSkill;
  readonly update: CreateSkill;
}
