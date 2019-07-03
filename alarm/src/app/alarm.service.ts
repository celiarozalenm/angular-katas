import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  constructor() {}

  public setAlarm(time): any {
    const alarmObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next();
      }, time*1000);
    });

    return alarmObservable;
  }
}
