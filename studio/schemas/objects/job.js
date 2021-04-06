export default {
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    {
      title: 'Company Name',
      name: 'companyName',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      title: 'Designation',
      name: 'designation',
      type: 'string'
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string'
    },
    {
      title: 'Started',
      name: 'started',
      type: 'string'
    },
    {
      title: 'Ended',
      name: 'ended',
      type: 'string'
    },
    {
      name: 'details',
      type: 'text',
      title: 'Details'
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{type: 'string'}]
    }
  ]
}
