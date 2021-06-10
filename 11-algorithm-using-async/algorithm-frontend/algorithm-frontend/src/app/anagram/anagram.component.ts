import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Service} from '../service'
@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent implements OnInit {
  firstWord: any = '';
  secondWord: any = '';
  result: any = '';
  
  constructor(private serviceAlgorithm: Service) { }

  ngOnInit(): void {
  }
   findAnagram() {
   this.serviceAlgorithm.findAnagram(this.firstWord, this.secondWord).subscribe(
      (data) => {
        this.result = data;
      }
    )
  }
  

}
