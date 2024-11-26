import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  taskName: string = '';
  taskDescription: string = '';
  taskStatus: 'To Do' | 'In Progress' | 'Done' = 'To Do';
  taskAdditional: string = '';

  constructor(private taskService: TaskService, private router: Router) {}
  addtask() {
    const newTask: Task = {
      id: Math.random() * 100,
      title: this.taskName,
      description: this.taskDescription,
      status: this.taskStatus,
    };

    this.taskService.addTask(newTask);

    this.router.navigate(['']);
  }
}
