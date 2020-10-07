import { Repository, EntityRepository } from "typeorm";

import { Task } from "./task.entity";
import { TaskStatus } from "./task-status.enum";
import { CreateTask } from "./dto/create-task.dto";
import { TaskFilter } from './dto/task-filter.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

  async getTasks(filterDTO: TaskFilter): Promise<Task[]> {
    const { status, search } = filterDTO;
    const query = this.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere('LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search)', { search: `%${search}%` });
    }

    const tasks = await query.getMany();
    return tasks;
  }

  async createTask(createTaskDTO: CreateTask): Promise<Task> {
    const { title, description } = createTaskDTO;
    
    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    await task.save();

    return task;
  }

  async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
    const task = await this.findOne(id);
    task.status = status;
    await task.save();

    return task;
  }  
}