export enum SkillType {
  ProgrammingLanguage = 'Programming Language',
  HumanLanguage = 'Human Language',
  Certificate = 'Certificate',
  SoftSkill = 'Soft Skill',
  TechnicalSkill = 'Technical Skill',
}

export enum SkillDirection {
  UP = 'IMPROVED',
  UNCHANGED = 'UNCHANGED',
  DOWN = 'NOT USED',
  NA = 'N/A',
}

export abstract class CreateSkill {
  readonly title: string;
  readonly svg: string;
  readonly value: number;
  readonly type: SkillType;
  readonly status: SkillDirection;
  readonly certificates?: Certificate[];
}

export class CreateTaggedSkill extends CreateSkill {
  readonly tag: string;
}

export class CreateCertificateSkill extends CreateSkill {
  readonly date: Date;
}

export class Certificate {
  readonly title: string;
  readonly url: string;
  readonly date: Date;
}

export class CreateProgrammingLanguageSkill extends CreateSkill {
  readonly frameworks?: string[];
}

export class CreateGenericSkill extends CreateSkill {}
