import {
  ApiTags,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiBody,
  ApiNotFoundResponse
} from '@nestjs/swagger';

import {
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UsePipes,  
  Controller,
  ValidationPipe,
  ParseIntPipe,
  Query
} from '@nestjs/common';

import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { CreateTask } from './dto/create-task.dto';
import { TaskFilter } from './dto/task-filter.dto';
import { UpdateTaskStatus } from './dto/update-task-status.dto';
import { TasksService } from './tasks.service';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOkResponse(
  {
    description: 'Tasks retrieved',
  })
  getTasks(@Query(ValidationPipe) filterDTO: TaskFilter): Promise<Task[]> {
    return this.tasksService.getTasks(filterDTO);
  }

  @Get('/:id')
  @ApiOkResponse(
  {
    description: 'Task retrieved by id',
    type: Task
  })
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskByid(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse(
  {
    description: 'Task created',
    type: Task
  })
  @ApiBadRequestResponse(
  {
    description: 'Bad Request'
  })
  createTask(@Body() createTaskDTO: CreateTask): Promise<Task> {
    return this.tasksService.createTask(createTaskDTO);
  }

  @Patch('/:id/status')
  @ApiOkResponse(
    {
      description: 'Task Status updated'
    })  
  @ApiBody({ type: UpdateTaskStatus })
  updateTaskStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(id, status);
  }

  @Delete('/:id')
  @ApiOkResponse(
  {
    description: 'Task deleted'
  })
  @ApiNotFoundResponse(
  {
    description: 'Task not found'
  })
  deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
}
