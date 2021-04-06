export default {
  name: 'resume',
  type: 'document',
  title: 'Résumé',
  __experimental_actions: [
    'create',
    'update',
    'publish'
  ],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'jobTitle',
      type: 'string',
      title: 'Title',
      description: 'What are you?'
    },
    {
      name: 'aboutMe',
      type: 'text',
      title: 'About Me',
      description: 'Describe about yourself'
    },
    {
      name: 'job',
      title: 'Job History',
      type: 'array',
      of: [{type: 'job'}]
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location'
    },
    {
      name: 'website',
      type: 'url',
      title: 'Website'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'socialLink'}]
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [{type: 'education'}]
    },
    {
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{type: 'language'}]
    }
  ]
}
