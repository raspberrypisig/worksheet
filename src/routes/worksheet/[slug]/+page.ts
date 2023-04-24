import conversion_table from '../../../data/conversion_table.json'
import what_is_it from '../../../data/what_is_it.json'
import { letters_table } from './letters_table';

export function load({params}) {
     return {
      "conversion_table": conversion_table,
      "slug": params.slug,
      "what_is_it": what_is_it,
      "letters_table": letters_table
    };
}