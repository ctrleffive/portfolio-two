// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import uses from './documents/uses'
import work from './documents/work'
import resume from './documents/resume'
import settings from './documents/settings'
import workCategory from './documents/workCategory'
import usesCategory from './documents/usesCategory'

// Object types
import language from './objects/language'
import education from './objects/education'
import socialLink from './objects/socialLink'
import figure from './objects/figure'
import job from './objects/job'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    job,
    language,
    education,
    socialLink,
    figure,
    // The following are document types which will appear
    // in the studio.
    uses,
    work,
    resume,
    settings,
    workCategory,
    usesCategory
  ])
})
