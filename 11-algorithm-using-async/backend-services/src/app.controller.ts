import { Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { Body } from '@nestjs/common';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/anagram')
  async getAnagram(@Body('firstWord') firstWord: string, @Body('secondWord') secondWord: string, @Res() response: Response) {

    let result = await this.appService.findAnagram(firstWord, secondWord);
    response.status(HttpStatus.OK).json(result);
  }

  @Post('/letterOccurance')
  async getLetterOccurance(@Body('word') word: string, @Res() response: Response) {
    let result = await this.appService.findletterOccurance(word);
    response.status(HttpStatus.OK).json(result)
  }


  @Post('/findlargest')
  async getLargestNumber(@Body('array') array: number[], @Body('largestNumber') largestNumber: number, @Res() response: Response) {

    let res = this.appService.findLargestNumber(array, largestNumber);
    console.log(res)
    response.status(HttpStatus.OK).json(res)
  }
}
