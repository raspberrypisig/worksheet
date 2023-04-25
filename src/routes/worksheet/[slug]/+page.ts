import { redirect } from '@sveltejs/kit';
import conversion_table from '../../../data/conversion_table.json'
import what_is_it from '../../../data/what_is_it.json'
import { letters_table } from './letters_table';

function convertToRoman(num: number) {
  const romanNumeralTable = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let romanNumeral = '';

  for (let i = 0; i < romanNumeralTable.length; i++) {
    while (num >= romanNumeralTable[i].value) {
      romanNumeral += romanNumeralTable[i].symbol;
      num -= romanNumeralTable[i].value;
    }
  }

  return romanNumeral;
}


function get_code(line: string): number[] {
  const result = []
  for (const c of line) {
    const l = letters_table[c];
    result.push(l);
  }
  return result;
}

export function load({params}) {
     if (parseInt(params.slug) > what_is_it.length) {
        throw redirect(302, '/worksheet/1');
     }

     const clue = what_is_it[parseInt(params.slug) - 1].definition;
     const answer = what_is_it[parseInt(params.slug) - 1].word;
     

     const is_two_word_answer = answer.includes(" ");
     let answer_line1: number[] = [];
     let answer_line2: number[] = [];
 
     if (is_two_word_answer) {
       const answer_firstline = answer.split(" ")[0];
       const answer_secondline = answer.split(" ")[1];
       answer_line1 = get_code(answer_firstline);
       answer_line2 = get_code(answer_secondline);
     }
 
     else {
       answer_line1 = get_code(answer);
     }

     console.log(answer);
     console.log(is_two_word_answer);
     

     return {
      "conversion_table": conversion_table,
      "slug": params.slug,
      "clue": clue,
      "answer": answer,
      "is_two_word_answer": is_two_word_answer,
      "answer_line1": answer_line1,
      "answer_line2": answer_line2,
      "roman_slug": convertToRoman(parseInt(params.slug)),
      "total_words_count": what_is_it.length
    };
}