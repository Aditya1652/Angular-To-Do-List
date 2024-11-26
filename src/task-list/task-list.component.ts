import { Component, OnInit } from '@angular/core';
import { StatusColourDirective } from '../status-colour.directive';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [StatusColourDirective],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  constructor(private taskService: TaskService, private router: Router) {}

  tasks: Task[] = [];

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  onDelete(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
  onReqDetails(id: number) {
    this.router.navigate([`/details/${id}`]);
  }
  onEdit(id: number) {
    this.router.navigate([`/edit/${id}`]);
  }
}
