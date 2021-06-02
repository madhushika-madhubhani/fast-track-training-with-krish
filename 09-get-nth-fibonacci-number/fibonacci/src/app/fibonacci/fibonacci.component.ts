import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'fb-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  answer:string='';
  inputNumber:number=0;
  

  constructor() {
  }
  ngOnInit(): void {
  }
  
  onKeyPress(event: any) {
    const regexpNumber = /[0-9\+\-\ ]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }
  getFromSequence() {
      let fibonacciIndex = this.getfibonacciNmuner(this.inputNumber);
      this.answer = `Index is : ` +fibonacciIndex.toString();

  }

  getfibonacciNmuner(value: number): number {
    if (value <= 1) 
            return value; 
        let firstNumber= 0, secondNumber = 1, nextNumber = 1; 
        let result = 1; 
        while (nextNumber < value) 
        { 
          nextNumber = firstNumber + secondNumber; 
              
            // res keeps track of   number of generated  fibonacci number 
            result++; 
            firstNumber = secondNumber; 
            secondNumber = nextNumber; 
        } 
        return result; 
    }
    
  }
  
 
