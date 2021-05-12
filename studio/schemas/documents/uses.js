export default {
  name: 'uses',
  title: 'Uses',
  type: 'document',
  fields: [
    {
      name: 'categoryName',
      title: 'Category Name',
      type: 'string'
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'usesItem'}]
    },
    {
      name: 'priority',
      title: 'Priority',
      description: 'Higher value has higher priority',
      type: 'number'
    }
  ],
  orderings: [
    {
      title: 'High Priority',
      name: 'priorityDesc',
      by: [
        {field: 'priority', direction: 'desc'}
      ]
    },
    {
      title: 'Low Priority',
      name: 'priorityAsc',
      by: [
        {field: 'priority', direction: 'asc'}
      ]
    }
  ]
}
