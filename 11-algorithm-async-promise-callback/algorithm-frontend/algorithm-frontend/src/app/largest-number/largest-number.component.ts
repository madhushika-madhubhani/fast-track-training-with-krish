
import { Component, OnInit } from '@angular/core';
import {Service} from '../service'
@Component({
  selector: 'app-largest-number',
  templateUrl: './largest-number.component.html',
  styleUrls: ['./largest-number.component.css']
})
export class LargestNumberComponent implements OnInit {
  result:any=''
  numbersArray:any=''
  numberToFind:any=Number
  constructor(private serviceAlgorithm: Service) { }

  ngOnInit(): void {
  }
  findGivenLargestNumber(){
    let responce =  this.serviceAlgorithm.findLargeNumber(this.numbersArray,this.numberToFind)
    console.log(responce)
    this.result =responce.toString()
  }

}
