import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {
    this.loadTasks();
  }

  tasks: Task[] = [];

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    } else {
      this.tasks = [
        {
          id: 1,
          title: 'Task 1',
          description: 'This is the first task',
          status: 'Done',
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'This is the second task',
          status: 'In Progress',
        },
        {
          id: 3,
          title: 'Task 3',
          description: 'This is the third task',
          status: 'To Do',
        },
      ];
      this.saveTasks();
    }
  }

  addTask(task: Task) {
    const newTask: Task = { ...task };
    this.tasks.push(newTask);
    this.saveTasks();
    return newTask;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(updatedTask: Task): void {
    const i = this.tasks.findIndex((t) => t.id === updatedTask.id);
    if (i !== 1) {
      this.tasks[i] = updatedTask;
      this.saveTasks();
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.saveTasks();
  }
}
