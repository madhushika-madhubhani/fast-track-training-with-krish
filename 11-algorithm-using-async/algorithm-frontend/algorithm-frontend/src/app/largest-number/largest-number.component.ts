
import { Component, OnInit } from '@angular/core';
import { Service } from '../service'
@Component({
  selector: 'app-largest-number',
  templateUrl: './largest-number.component.html',
  styleUrls: ['./largest-number.component.css']
})
export class LargestNumberComponent implements OnInit {
  result: any = ''
  numberToFind: number = 0;
  numbersArray:number[]=[];
  constructor(private serviceAlgorithm: Service) { }

  ngOnInit(): void {
  }
  findGivenLargestNumber() {
    this.serviceAlgorithm.findLargeNumber(this.numbersArray, this.numberToFind).subscribe(
      (data) => {
        this.result = data;
      }
    )
  }
}


