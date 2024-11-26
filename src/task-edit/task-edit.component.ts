import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css',
})
export class TaskEditComponent implements OnInit {
  taskName: string = '';
  taskDescription: string = '';
  taskStatus: 'To Do' | 'In Progress' | 'Done' = 'To Do';
  taskId?: number;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.taskId = +id;
        const task = this.taskService.getTask(this.taskId);
        if (task) {
          this.taskName = task.title;
          this.taskDescription = task.description;
          this.taskStatus = task.status;
        }
      }
    });
  }

  onEdit() {
    const updatedTask: Task = {
      id: this.taskId as number,
      title: this.taskName,
      description: this.taskDescription,
      status: this.taskStatus,
    };

    this.taskService.updateTask(updatedTask);

    this.router.navigate(['']);
  }
}
