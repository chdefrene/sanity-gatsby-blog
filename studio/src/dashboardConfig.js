export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e9de6ff5d3dcf850b4c5ae2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-41pqchxc',
                  apiId: '48ce1a1f-8c36-414c-aba2-4be70590673d'
                },
                {
                  buildHookId: '5e9de6ff5b6d1251b2aa4c74',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5dacyoyb',
                  apiId: '574955e7-a9cc-49f5-8167-a45ea6e000de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chdefrene/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5dacyoyb.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
