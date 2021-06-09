import { Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { Body } from '@nestjs/common';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('anagram')
  async getAnagram(@Query('firstWord') firstWord: string, @Query('secondWord') secondWord: string, @Res() response: Response) {
   
    let result = await this.appService.findAnagram(firstWord, secondWord);
     response.status(HttpStatus.OK).json(result);
  }

@Get('letterOccurance')
 async getLetterOccurance (@Query('word') word: string, @Res() response: Response){
 let result = await this.appService.findletterOccurance(word);
 console.log(result)
 response.status(HttpStatus.OK).json(result)
 }
 
 @Post('/findlargest')
 getLargestNumber(@Body() request): number {
   return this.appService.findLargestNumber(request.array, request.largestNumber);
 }
}