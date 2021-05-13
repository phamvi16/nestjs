import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
}
