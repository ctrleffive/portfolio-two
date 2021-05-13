export default {
  name: 'settings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    'create',
    'update',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      title: 'Meeting Enabled',
      name: 'meetingEnabled',
      type: 'boolean'
    },
    {
      name: 'meetingLink',
      type: 'url',
      title: 'Meeting Link'
    },
    {
      name: 'meetingButtonLabel',
      type: 'string',
      title: 'Meeting Button Label'
    }
  ]
}
