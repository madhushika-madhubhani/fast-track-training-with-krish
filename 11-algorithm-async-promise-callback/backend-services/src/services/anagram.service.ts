import { Injectable } from '@nestjs/common';

@Injectable()
export class AnagramService {

    async printAnagram(wordOne: string, wordSecond: string): Promise<string> {
        console.log(wordOne, wordSecond)
        wordOne = wordOne.replace(/[^\w]/g, '').toLowerCase()
        wordSecond = wordSecond.replace(/[^\w]/g, '').toLowerCase()
        if (wordOne.length !== wordSecond.length) {
            return "not anagram"
        }
        let arrSecond = wordSecond.split("")
        for (let char of wordOne) {
            if (!arrSecond.includes(char)) {
                return "not anagram"
                break;
            } else {
                arrSecond.splice(arrSecond.indexOf(char), 1)
            }
        }
        return "anagram"
    }
}
