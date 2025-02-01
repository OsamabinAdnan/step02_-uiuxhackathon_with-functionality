import { type SchemaTypeDefinition } from 'sanity'
import Cars from './Cars'
import Comments from './Comments'
import rentalOrder from './rentalOrder'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Cars, Comments, rentalOrder],
}
