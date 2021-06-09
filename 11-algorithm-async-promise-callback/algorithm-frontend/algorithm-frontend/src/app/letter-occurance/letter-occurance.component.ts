import { Component, OnInit } from '@angular/core';
import {Service} from '../service'
@Component({
  selector: 'app-letter-occurance',
  templateUrl: './letter-occurance.component.html',
  styleUrls: ['./letter-occurance.component.css']
})
export class LetterOccuranceComponent implements OnInit {
  word:any ='';
  result:any='';
  constructor(private serviceAlgorithm: Service) { }

  ngOnInit(): void {
  }

   async findletterOccurance(){
   let responce = await this.serviceAlgorithm.findletterOccurance(this.word)
   this.result =responce.toString()
  }


}
