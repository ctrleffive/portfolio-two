export default {
  name: 'usesItem',
  title: 'Uses Item',
  type: 'document',
  fields: [
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
