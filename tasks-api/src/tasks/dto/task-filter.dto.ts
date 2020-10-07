import { IsOptional, IsNotEmpty, IsIn } from 'class-validator';

import { TaskStatus } from '../task-status.enum';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class TaskFilter {
  @IsOptional()
  @ApiPropertyOptional()
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  @ApiPropertyOptional()  
  search: string;
}