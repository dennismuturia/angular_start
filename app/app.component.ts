import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My first Angular JS</h1>
    <div  *ngFor = 'let currentTask of tasks'>
    <h3>{{currentTask.description}}</h3>
    <button (click) = 'showDetails(currentTask)'>Click Me! To edit</button>
    </div>
    <h1>Edit tasks</h1>
    <div  *ngIf="selectedTask">
    <div>
      <label>Enter Task</label>
      <input [(ngModel)] = "selectedTask.description">
    </div>
    <div>
      <label>Enter the ID</label>
      <input [(ngModel)] = "selectedTask.id">
      <button (click) = "finishEditing()">Finish editing</button>
    </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public tasks: Task[] = [
    new Task("Create my first angularJS app", 0),
    new Task("Learn more on Angular", 1),
    new Task("Move on with life", 2)
  ];

  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishEditing(){
      this.selectedTask = null;
  }
}
export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) { }
}
