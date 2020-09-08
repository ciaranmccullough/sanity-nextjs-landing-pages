export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f578e4fa73c47247aac41f7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xj5mbte3',
                  apiId: 'f4c84749-7290-44b7-8703-d586d627011e'
                },
                {
                  buildHookId: '5f578e4feb4e461ffbcebac3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-r4spfqsj',
                  apiId: '7e6727cc-e518-4c9f-813e-1e1b978eabca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ciaranmccullough/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-r4spfqsj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
