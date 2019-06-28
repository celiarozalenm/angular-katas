import { Component } from '@angular/core';
import { City } from './city';
import { RandomTemperatureService } from './random-temperature.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cities: Array<City> = [
    {city_name: "Madrid", temperature: 20},
    {city_name: "Norway", temperature: -10},
    {city_name: "Dubai", temperature: 40}
  ];  
  public randomTemperature : number; 

  constructor(private RandomTemperature: RandomTemperatureService){
  }

  public addCity(input_data: string): void{
    this.cities.push({
      city_name: input_data,
      temperature: this.randomTemperature = this.RandomTemperature.generateTemperature()
    })
  }

}
