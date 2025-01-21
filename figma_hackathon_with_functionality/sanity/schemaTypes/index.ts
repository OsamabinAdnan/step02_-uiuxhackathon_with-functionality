import { type SchemaTypeDefinition } from 'sanity'
import Cars from './Cars'
import Comments from './Comments'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Cars, Comments],
}
