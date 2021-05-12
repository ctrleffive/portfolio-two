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
      title: 'Primary Color',
      name: 'primaryColor',
      type: 'color'
    },
    {
      title: 'Secondary Color',
      name: 'secondaryColor',
      type: 'color'
    }
  ]
}
