import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})

export class CalculatorComponent implements OnInit {

  constructor() { }

  public result : number; 

  //Input field returns a string, not a number, even if it's a input with type number

  public sum(num1:string, num2:string){
    return this.result=(parseInt(num1)+parseInt(num2));
  }

  public subtract(num1:string, num2:string){
    return this.result=(parseInt(num1)-parseInt(num2));
  }

  public multiply(num1:string, num2:string){
    return this.result=(parseInt(num1)*parseInt(num2));
  }

  public divide(num1:string, num2:string){
    return this.result=(parseInt(num1)/parseInt(num2));
  }

  ngOnInit() {
  }

}
