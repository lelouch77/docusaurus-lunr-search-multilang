
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/docusaurus-lunr-search-multilang/',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/blog',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/blog'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/blog/hello-world',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/blog/hello-world'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/blog/hola',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/blog/hola'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/blog/tags',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/blog/tags'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/blog/tags/docusaurus',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/blog/tags/facebook',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/blog/tags/hello',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/blog/tags/hola',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/blog/welcome',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/blog/welcome'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/docs',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/docs'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/docs/:route',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/docs/:route'),
  
  routes: [
{
  path: '/docusaurus-lunr-search-multilang/docs/doc1',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/docs/doc1'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/docs/doc2',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/docs/doc2'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/docs/doc3',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/docs/doc3'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/docs/doc4',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/docs/doc4'),
  exact: true,
  
},
{
  path: '/docusaurus-lunr-search-multilang/docs/mdx',
  component: ComponentCreator('/docusaurus-lunr-search-multilang/docs/mdx'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
