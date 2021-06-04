import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  sortedWordArray: string[] = [];
  textArea:string='';
  constructor() {

   }
  

  ngOnInit(): void {
  }
  onClick(){
    let wordSet = this.textArea;
    console.log(wordSet)
    this.extractWordVowels(wordSet);
    
  }
  
  extractWordVowels(wordSet:string):any{
     
    let words= wordSet.split(" ");
 
  for(let word of words ) {
    if(word.charAt(0).match(/[aeiouAEIOU]/g)){
      this.sortedWordArray.push(word)
  }
  }
 // console.log(this.sortedWordArray)
  return this.sortedWordArray.sort();
  }
}