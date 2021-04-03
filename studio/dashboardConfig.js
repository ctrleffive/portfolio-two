export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6063dd90c7306051cf7d2529',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2rwzi3qz',
                  apiId: '906d9534-334c-4513-8eb0-35ff5ada276f'
                },
                {
                  buildHookId: '6063dd91c4193f40b63c9536',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sr99a6d7',
                  apiId: '4e1b0f43-de05-49c6-93c7-dfec74f8913a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ctrleffive/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sr99a6d7.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
