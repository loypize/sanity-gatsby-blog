export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5cddfff53d0160e27236c3a7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ow3kot85',
                  apiId: '55dc3d9e-80fa-4f43-84eb-c6f9ddde8aea'
                },
                {
                  buildHookId: '5cddfff53d0160b64a36c3e5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6pj8ohvt',
                  apiId: 'c78e3122-498c-48d2-b9e3-28fd23a23ee8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/loypize/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6pj8ohvt.netlify.com', category: 'apps'}
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
