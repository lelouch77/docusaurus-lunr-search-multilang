(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{155:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),c=t.n(r),l=t(168),s=t.n(l),o=t(172),i=t(169),u=t(167),d=t(173),m=t(156),h=t.n(m),b=[{title:c.a.createElement(c.a.Fragment,null,"Easy to Use"),imageUrl:"img/undraw_docusaurus_mountain.svg",description:c.a.createElement(c.a.Fragment,null,"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.")},{title:c.a.createElement(c.a.Fragment,null,"Focus on What Matters"),imageUrl:"img/undraw_docusaurus_tree.svg",description:c.a.createElement(c.a.Fragment,null,"Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the ",c.a.createElement("code",null,"docs")," directory.")},{title:c.a.createElement(c.a.Fragment,null,"Powered by React"),imageUrl:"img/undraw_docusaurus_react.svg",description:c.a.createElement(c.a.Fragment,null,"Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.")}];function g(e){var a=e.imageUrl,t=e.title,n=e.description,r=Object(d.a)(a);return c.a.createElement("div",{className:s()("col col--4",h.a.feature)},r&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:h.a.featureImage,src:r,alt:t})),c.a.createElement("h3",null,t),c.a.createElement("p",null,n))}a.default=function(){var e=Object(u.a)().siteConfig,a=void 0===e?{}:e;return c.a.createElement(o.a,{title:"Hello from "+a.title,description:"Description will go into a meta tag in <head />"},c.a.createElement("header",{className:s()("hero hero--primary",h.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"hero__title"},a.title),c.a.createElement("p",{className:"hero__subtitle"},a.tagline),c.a.createElement("div",{className:h.a.buttons},c.a.createElement(i.a,{className:s()("button button--outline button--secondary button--lg",h.a.getStarted),to:Object(d.a)("docs/")},"Get Started")))),c.a.createElement("main",null,b&&b.length>0&&c.a.createElement("section",{className:h.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},b.map((function(e,a){return c.a.createElement(g,Object(n.a)({key:a},e))})))))))}},174:function(e,a,t){"use strict";t(23),t(19),t(70),t(50),t(18);var n=t(0),r=t.n(n),c=t(168),l=t.n(c),s=t(170),o=t(167);a.a=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),i=Object(s.b)(),u=Object(o.a)().siteConfig,d=(void 0===u?{}:u).baseUrl,m=function(){a.current||(Promise.all([fetch(d+"search-doc.json").then((function(e){return e.json()})),fetch(d+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(33),t.e(35)]).then(t.bind(null,177)),t.e(19).then(t.t.bind(null,176,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=d+t.url;document.createElement("a").href=n,i.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},h=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:m,onMouseOver:m,onFocus:h,onBlur:h,ref:c}))}}}]);