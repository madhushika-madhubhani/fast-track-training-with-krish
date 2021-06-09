import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnagramComponent } from './anagram/anagram.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes,RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { LetterOccuranceComponent } from './letter-occurance/letter-occurance.component';
import { LargestNumberComponent } from './largest-number/largest-number.component';

const routes:Routes=[
  {path:"anagram",component:AnagramComponent},
  {path:"letterOccurance",component:LetterOccuranceComponent},
  {path:"largestNumber",component:LargestNumberComponent},
  {path:"",redirectTo:"/anagram",pathMatch:'full'},
]
@NgModule({
  declarations: [
    AppComponent,
    AnagramComponent,
    NavbarComponent,
    LetterOccuranceComponent,
    LargestNumberComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
