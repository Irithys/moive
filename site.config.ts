import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '6f4d314903b64e81ae82ab23a2cc6208',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'thys',

  // basic site info (required)
  name: '书影音',
  domain: 'test.irithys.com',
  author: '吕楪',

  // open graph metadata (optional)
  description: '书影音',

  // social usernames (optional)
  twitter: 'irithys',
  github: 'irithys',
  //linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'null',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  // 是否启用对 LQIP 预览图像的支持（可选）
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  // 是否启用 redis 以缓存生成的预览图像（可选）
  isRedisEnabled: false,

  // notion page ID 到 URL 路径的映射（可选）
  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '电影',
      pageId: '76ed830e50f24ae8a63ce36c1515cd08'
    }
  ]
})
