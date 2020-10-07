import { PipeTransform, BadRequestException } from "@nestjs/common";

import { TaskStatus } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ]

  transform(value: string): string {
    value = value.toUpperCase();

    if (!this.isValidStatus(value)) {
      throw new BadRequestException(`"${value} is an invalid Task Status"`)
    }

    return value;
  }

  private isValidStatus(status: any): boolean {
    return this.allowedStatuses.includes(status);
  }
}