import { FindEduItemDto } from './find.edu-item.dto';
import { CreateEduItemDto } from './create.edu-item.dto';

export class InsertUpdateEduItemDto {
  readonly filter: FindEduItemDto;
  readonly update: CreateEduItemDto;
}
