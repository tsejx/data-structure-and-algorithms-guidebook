const config = {
  mode: 'site',
  title: 'Data Structure and Algorithms Guidebook',
  description: '数据结构与算法完全知识体系',
  base: '/data-structure-and-algorithms-guidebook/',
  publicPath: '/data-structure-and-algorithms-guidebook/',
  favicon: './favicon.ico',
  logo: 'http://img.mrsingsing.com/data-structure-and-algorithms-favicon.svg',
  hash: true,
  exportStatic: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/tsejx/data-structure-and-algorithms-guidebook',
    },
  ],
}

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {}
}

export default config
