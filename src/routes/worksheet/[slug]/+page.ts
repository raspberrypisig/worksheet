import conversion_table from '../../../data/conversion_table.json'

export function load({params}) {
     return {
      "conversion_table": conversion_table,
      "slug": params.slug
    };
}