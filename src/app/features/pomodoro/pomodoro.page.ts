import { Component, OnInit } from '@angular/core';
import { CountdownService } from 'src/app/services/countdown.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.page.html',
  styleUrls: ['./pomodoro.page.scss'],
})
export class PomodoroPage implements OnInit {
  private time: number;
  private pomodoroRounds: number = 0;
  private shortBreakRounds: number = 0;
  private longBreakRounds: number = 0;
  private timerFunc: any;

  constructor(private toaster: ToasterService) {}

  ngOnInit() {
    this.time = 1500;
  }

  segmentChanged(ev: any) {
    switch(ev.target.value) {
      case "Pomodoro":
        this.time = 1500;
        this.pauseTimer();
      break;
      
      case "Short Break":
        this.time = 300;
        this.pauseTimer();
      break;

      case "Long Break":
        this.time = 900;
        this.pauseTimer();
      break;
    }
    
  }

  startTimer() {
    this.timerFunc = setInterval(() => {
      this.time -= 1;
      if (this.time === 0){
        this.pauseTimer();
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.timerFunc);
  }
}
