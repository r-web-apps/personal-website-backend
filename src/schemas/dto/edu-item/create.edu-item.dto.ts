import { Duration } from '../../edu-item.schema';

export class CreateEduItemDto {
  readonly subject: string;
  readonly university: string;
  readonly degree: string;
  readonly duration: Duration;
  readonly status: 'completed' | 'incomplete' | 'switched';
  readonly courses: string[];
  readonly url: string;
}
