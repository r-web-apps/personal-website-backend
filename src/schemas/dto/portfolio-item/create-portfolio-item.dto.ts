export class CreatePortfolioItemDto {
  title: string;
  portfolioItemType: number;
  url: string;
  abbr: string;
  linesOfCode?: number;
  langs?: string[];
}
