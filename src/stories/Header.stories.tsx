import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Header, HeaderProps } from '../components/header'

export default {
  title: 'MD/Header',
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Preview = Template.bind({})
Preview.args = {
  logoUrl: 'https://material.io/static/angular/mio-logo-sprite.7a0afcb5bbfe71a9a330.png',
  logoText: 'Material Design',
  links: [
    { path: '/design', text: 'design' },
    { path: '/components', text: 'components' },
    { path: '/develop', text: 'develop' },
    { path: '/resources', text: 'resources' },
    { path: '/blog', text: 'blog' },
  ]
} as HeaderProps

export const DisableSearch = Template.bind({})
DisableSearch.args = {
  logoUrl: 'https://material.io/static/angular/mio-logo-sprite.7a0afcb5bbfe71a9a330.png',
  logoText: 'Material Design',
  links: [
    { path: '/design', text: 'design' },
    { path: '/components', text: 'components' },
    { path: '/develop', text: 'develop' },
    { path: '/resources', text: 'resources' },
    { path: '/blog', text: 'blog' },
  ],
  disableSearch: true
} as HeaderProps
