export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'document-list',
      options: {title: 'Blog', order: '_createdAt desc', types: ['blog']},
      layout: {width: 'medium'}
    },
    {
      name: 'document-list',
      options: {title: 'Work', order: '_createdAt desc', types: ['work']},
      layout: {width: 'small'}
    },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub Repo',
            value: 'https://github.com/ctrleffive/chandujs.dev',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://chandujs.dev',
            category: 'Website'
          }
        ]
      }
    }
  ]
}
