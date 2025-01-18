import blockContent from './objects/blockContent'
import artist from './documents/artist'
import artwork from './documents/artwork'
import technique from './documents/technique'
import merchandise from './documents/merchandise'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [artist, artwork, technique, merchandise, blockContent]
