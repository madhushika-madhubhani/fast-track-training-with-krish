import { Injectable } from '@nestjs/common';
import { AnagramService } from "./services/anagram.service"
import { LetterOccuranceService } from "./services/letter-occurrence.service"
import { LargestNumberService } from "./services/largest-number.service"

@Injectable()
export class AppService {
  constructor(
    private anagramService: AnagramService,
    private letterOccuranceService: LetterOccuranceService,
    private largestNumberService: LargestNumberService) {

  }

  getHello(): string {
    return 'Hello World!';
  }
  //async
  async findAnagram(firstWord: string, secondWord: string) {
    try {
      return await this.anagramService.printAnagram(firstWord, secondWord)

    }
    catch (e) {
      console.log(e.message)
    }
  }

  //promises
  findletterOccurance(word: string) {

    return new Promise((resolve, reject) => {
      try {
        resolve(this.letterOccuranceService.countOfLetters(word));
      } catch (e) {
        reject(e);
      }
    })
  }

  //callback
  findLargestNumber(numberArray: number[], largestNumber: number): number {
    try {
      console.log(numberArray)
      let sortedArray = []
      this.largestNumberService.printLargestNumber(numberArray, (res: number[]) => sortedArray = res)
      console.log(numberArray)
      return (sortedArray[sortedArray.length - largestNumber])
    }
    catch (e) {
      console.log(e.message)
    }
  }
}

