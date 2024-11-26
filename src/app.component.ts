import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TaskListComponent,
    TaskFormComponent,
    TaskEditComponent,
    TaskDetailsComponent,
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TaskApp';
}
