import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from "@angular/material/form-field";

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
    MatFormFieldModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
  taskList: TaskModel[] = [];
  viewList: TaskModel[] = [];
  newTask: TaskModel = { name: "", status: false };
  isEditMode: boolean = true;
  selectedIndex: number = 0;

  addTask() {
    this.taskList.push({...this.newTask});
    this.newTask.name = "";
    this.viewList = this.taskList;
  }

  deleteTask(index: number) {
    this.taskList.splice(index, 1);
  }

  statusChange(task: TaskModel) {
    task.status = !task.status;
  }

  deleteDoneTasks() {
    this.taskList = this.taskList.filter((data) => !data.status);
    this.viewList = this.viewList.filter((data) => !data.status);
  }

  deleteAllTasks() {
    this.taskList = [];
    this.viewList = [];
  }

  getStatusDone() {
    this.viewList = []
    this.viewList = this.taskList.filter((data) => data.status);
    return this.viewList;
  }

  getStatusNotDone() {
    this.viewList = []
    this.viewList = this.taskList.filter((data) => !data.status);
    return this.viewList;
  }

  getAll() {
    this.viewList = [];
    this.viewList = this.taskList;
    return this.viewList;
  }

  editTask(index: number) {
    this.isEditMode = true;
    this.selectedIndex = index;
  }
}

export interface TaskModel {
  name: string;
  status: Boolean;
}
