/*
import conversion_table from './conversion_table.json'

export function load() {
    return {
      "conversion_table": conversion_table
    };
}

*/

import { redirect } from '@sveltejs/kit';
 
export function load() {
  throw redirect(302, '/worksheet/1');
}