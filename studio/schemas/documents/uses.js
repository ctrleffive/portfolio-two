export default {
  name: 'uses',
  title: 'Uses',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'usesCategory'}
    },
    {
      name: 'emoji',
      title: 'Emoji',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'details',
      title: 'Details',
      type: 'text'
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL'
    }
  ]
}
