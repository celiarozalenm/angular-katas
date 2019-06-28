import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  public sum(num1:number, num2:number){
    return num1+num2;
  }

  public subtract(num1:number, num2:number){
    return num1+num2;
  }

  public multiply(num1:number, num2:number){
    return num1+num2;
  }

  public divide(num1:number, num2:number){
    return num1+num2;
  }

  ngOnInit() {
  }

}
