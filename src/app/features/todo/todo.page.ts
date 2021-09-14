import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';

interface Task {
  id: number;
  task: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  taskList: Task[] = [];
  name: string = '';
  private id = 0;

  constructor(private toast: ToasterService) {}

  ngOnInit() {}

  addTaskToList() {
    if (this.name.trim() != '') {
      this.taskList.push({ id: this.id, task: this.name });
      this.id++;
      this.name = '';
    }else {
      this.toast.presentToast("Error", "The input cannot be an empty string", "danger");
    }
  }

  deleteTaskByCheckbox(ev, task) {
    setTimeout(() => {
      if (ev.target.checked) {
        this.toast.presentToast('Task', 'Task is completed', 'success');
        this.taskList.splice(this.taskList.indexOf(task), 1);
      }
    }, 100);
  }

  deleteTaskBySlide(task) {
    this.toast.presentToast('Task', 'Task is completed', 'success');
    this.taskList.splice(this.taskList.indexOf(task), 1);
  }
}
