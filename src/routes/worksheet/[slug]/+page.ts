import conversion_table from '../../../data/conversion_table.json'
import what_is_it from '../../../data/what_is_it.json'
import { letters_table } from './letters_table';

function get_code(line: string): {code: number, blank: string}[] {
  const result: {code: number, blank: string}[] = []
  for (const c of line) {
    const l = letters_table[c];
    result.push({"code": l, blank: "_".repeat(l.toString().length)});
  }
  return result;
}

export function load({params}) {
     const clue = what_is_it[parseInt(params.slug) - 1].definition;
     const answer = what_is_it[parseInt(params.slug) - 1].word;
     

     const is_two_word_answer = answer.includes(" ");
     let answer_line1: {code: number, blank: string}[] = [];
     let answer_line2: {code: number, blank: string}[] = [];
 
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
      "answer_line2": answer_line2
    };
}