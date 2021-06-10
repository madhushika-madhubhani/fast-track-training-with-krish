import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class Service {
baseURL = "http://localhost:3000/api/";
    constructor(private http: HttpClient) { }

 findAnagram(firstWord: string, secondWord: string) {
    
   

 findLargeNumber(array:number[],largestNumber:number){
    let res= this.http.post((`${this.baseURL}findlargest`),{array,largestNumber}).toPromise()
    console.log("res",res)
    return res;
  }

}
