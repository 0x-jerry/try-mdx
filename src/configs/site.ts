import { t } from '@/modules/i18n'
import type { Component } from 'vue'
import IconHome from '~icons/carbon/home'
import IconTag from '~icons/carbon/tag'
import IconArchive from '~icons/carbon/archive'
import IconProfile from '~icons/carbon/user-profile'
import IconGithub from '~icons/logos/github-icon'

export interface SiteConfig {
  user: UserConfig
  sidebar: SidebarConfig
}

export interface SidebarConfig {
  links: SidebarSocialLink[]
  menus: SidebarMenu[]
}

export type SidebarSocialLink = SidebarMenu

export interface SidebarMenu {
  href: string
  icon: string | Component
  title: string
}

export interface UserConfig {
  nick: string
  avatar: string
  motto: string
  email?: string
}

export const site: SiteConfig = {
  user: {
    nick: '0x-Jerry',
    email: 'x.jerry.wang@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/14226737?v=4',
    motto: `Life was like a box of chocolates. You never know what you're gonna get.`,
  },
  sidebar: {
    links: [
      {
        href: 'https://github.com/0x-jerry',
        icon: IconGithub,
        title: 'Github',
      },
    ],
    menus: [
      {
        href: '/',
        icon: IconHome,
        title: t('menu.title.home'),
      },
      {
        href: '/tags',
        icon: IconTag,
        title: t('menu.title.tags'),
      },
      {
        href: '/about',
        icon: IconProfile,
        title: t('menu.title.about'),
      },
    ],
  },
}
