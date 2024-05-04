import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
  taskList: TaskModel[] = [];
  newTask: TaskModel = { name: '', status: false };
  filteredData: TaskModel[] = [];

  addTask() {
    this.taskList.push({ ...this.newTask });
    this.filteredData.push({ ...this.newTask });
    this.newTask.name = '';
  }

  deleteTask(index: number) {
    this.taskList.splice(index, 1);
  }

  statusChange(task: TaskModel) {
    task.status = !task.status;
  }

  deleteDoneTasks() {
    this.taskList = this.taskList.filter((task) => !task.status);
  }
  deleteAllTasks() {
    this.taskList = [];
  }

  getStatusDone() {
    const statusDoneData = this.taskList.filter((data) => data.status);
    this.taskList = statusDoneData;
    console.log(statusDoneData);
  }

  getStatusNotDone() {
    const statusNotDoneData = this.taskList.filter((data) => !data.status);
    this.taskList = statusNotDoneData;
  }

  getAll() {
    const tasks = this.taskList.filter((data) => data);
    this.taskList = tasks;
    console.log(tasks);
  }
}

export interface TaskModel {
  name: string;
  status: Boolean;
}
