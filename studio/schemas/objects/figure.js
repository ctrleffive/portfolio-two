export default {
  name: 'figure',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      validation: Rule => Rule.error('You have to fill out the caption.').required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
