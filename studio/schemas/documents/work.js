import {format} from 'date-fns'

export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image'
    },
    {
      title: 'Color',
      name: 'color',
      type: 'color'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: {type: 'workCategory'}}]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule work as well',
      type: 'datetime'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'tags'
    },
    {
      name: 'url',
      type: 'url',
      title: 'Work URL'
    },
    {
      name: 'startedAt',
      title: 'Started At',
      type: 'datetime'
    },
    {
      name: 'endedAt',
      title: 'Ended At',
      type: 'datetime'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'figure'
    },
    {
      name: 'details',
      title: 'Details',
      type: 'markdown'
    },
    {
      name: 'priority',
      title: 'Priority',
      description: 'Higher value has higher priority',
      type: 'number'
    },
    {
      name: 'relatedWork',
      title: 'Related Work',
      type: 'array',
      of: [{type: 'reference', to: {type: 'work'}}]
    }
  ],
  orderings: [
    {
      title: 'Published Recently',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Published Oldest',
      name: 'publishedAtAsc',
      by: [
        {field: 'publishedAt', direction: 'asc'}
      ]
    },
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
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'thumbnail'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
