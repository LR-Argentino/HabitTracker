import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  public time: number = 1500;
  public numbOfRounds: number = 0;
  private timerFunc: any;


  constructor() { }


  public startCountdownTimer() {
    this.timerFunc = setInterval(() => {
      this.time -= 1;
      if (this.time === 0){
        this.stopTimer();
      }
    }, 1000)
  }

  public stopTimer() {
    clearInterval(this.timerFunc);
  }

  public setTimer(time: number){
    this.time = time;
  }
}