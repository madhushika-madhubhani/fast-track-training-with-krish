import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnagramService } from './services/anagram.service';
import { LetterOccuranceService } from './services/letter-occurrence.service';
import {LargestNumberService}from './services/largest-number.service'
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,AnagramService,LetterOccuranceService,LargestNumberService],
})
export class AppModule {}
