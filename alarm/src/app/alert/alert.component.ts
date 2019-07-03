import { Component, OnInit } from '@angular/core';
import { AlarmService } from '../alarm.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit {

  constructor(private alarmService: AlarmService) { }
  

  ngOnInit() {

  }

  public startAlarm(time){
    if(time>60){
      alert("Maximum alarm time is 60 sec")
    }else{
      const alarmObservable = this.alarmService.setAlarm(time);
      alarmObservable.subscribe(() => {
        alert("ALARM!");
      });
    }
  }

}
