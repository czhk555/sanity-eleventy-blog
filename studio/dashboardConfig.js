export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '63a28a83e5b4212134b03a47',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-wcsqny7o',
                  apiId: 'd529fec4-9040-49c4-a06f-0827baf640a3'
                },
                {
                  buildHookId: '63a28a83fd31a4219fc018fe',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-tqmpi6kd',
                  apiId: 'd7e027d2-a92b-4a1b-b516-fc0939db00ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/czhk555/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-tqmpi6kd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
