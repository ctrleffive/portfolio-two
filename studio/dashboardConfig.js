export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'document-list',
      options: {title: 'Work', order: '_createdAt desc', types: ['work']},
      layout: {width: 'large'}
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
            title: 'Website',
            value: 'https://chandujs.dev',
            category: 'Website'
          },
          {
            title: 'Blog',
            value: 'https://dev.to',
            category: 'Website'
          }
        ]
      }
    }
  ]
}
