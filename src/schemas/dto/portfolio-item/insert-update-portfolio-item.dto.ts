import { FindPortfolioItemDto } from './find-portfolio-item.dto';
import { CreatePortfolioItemDto } from './create-portfolio-item.dto';

export class InsertUpdatePortfolioItemDto {
  readonly filter: FindPortfolioItemDto;
  readonly update: CreatePortfolioItemDto;
}
