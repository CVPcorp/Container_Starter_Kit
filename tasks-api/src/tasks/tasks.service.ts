import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { CreateTask } from './dto/create-task.dto';
import { TaskFilter } from './dto/task-filter.dto';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository
  ) {}

  async getTasks(filterDTO: TaskFilter): Promise<Task[]> {
    return await this.taskRepository.getTasks(filterDTO);
  }

  async getTaskByid(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne(id);

    if (!task) {
      throw new NotFoundException(`Task id "${id}" not found`);
    }

    return task;
  }

  async createTask(createTaskDTO: CreateTask): Promise<Task> {
    return await this.taskRepository.createTask(createTaskDTO);
  }

  async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
    return await this.taskRepository.updateTaskStatus(id, status);
  }

  async deleteTask(id: number): Promise<void> {
    const result = await this.taskRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task id "${id}" not found`);
    }
  }
}
