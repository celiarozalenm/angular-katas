import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomTemperatureService {

  public temperature: number;

  constructor() { }

  public generateTemperature(){
    return this.temperature = Math.floor((Math.random() * 40) + 1);
  }

}
