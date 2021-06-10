import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { error } from 'console';
import { errorMonitor } from 'events';
@Injectable({
  providedIn: 'root'
})
export class Service {

  baseLargestNumberURL = "http://localhost:3000/api/findlargest";
  findLetterOccuranceURL = "http://localhost:3000/api/letterOccurance"
  findAnagramURL = "http://localhost:3000/api/anagram"
  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }


  findAnagram(firstWord: string, secondWord: string): Observable<any> {
    return this.http.post(this.findAnagramURL, {
      firstWord, secondWord
    }, this.httpOptions).pipe(
      catchError((error) => {
        return throwError('An error occurred:', error.error);
      })
    );

  }
  findletterOccurance(word: string): Observable<any> {
    return this.http.post(this.findLetterOccuranceURL, {
      word
    }, this.httpOptions).pipe(
      catchError((error) => {
        return throwError('An error occurred:', error.error);
      })
    );

  }

  findLargeNumber(array: number[], largestNumber: number): Observable<any> {
    return this.http.post(this.baseLargestNumberURL, {
      array,largestNumber
    }, this.httpOptions).pipe(
      catchError((error) => {
        return throwError('An error occurred:', error.error);
      })
    );

  }


}


