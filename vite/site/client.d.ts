declare module '@v-site' {
  export interface PostMatter {
    title: string
    date: Date
    tags?: string[]
    license?: string
    publish?: boolean
  }

  export interface PostItem {
    path: string
    data: PostMatter
  }

  export interface SiteConfig {
    posts: PostItem[]
  }

  var conf: SiteConfig

  export default conf
}
