import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class Service {
baseURL = "http://localhost:3000/api/";
    constructor(private http: HttpClient) { }
    private API = "http://localhost:3000/findLargest"
 findAnagram(firstWord: string, secondWord: string) {
    
    let result=  this.http.get(`${this.baseURL}anagram?firstWord=${firstWord}&secondWord=${secondWord}`).toPromise();
    console.log(result) 
    return result 
      }

   findletterOccurance (word:string){
    let res =  this.http.get((`${this.baseURL}letterOccurance?word=${word}`)).toPromise();  
    return res;
 }

 findLargeNumber(array:number[],largestNumber:number){
    let res= this.http.post((`${this.baseURL}findlargest`),{array,largestNumber}).toPromise()
    console.log("res",res)
    return res;
  }

}