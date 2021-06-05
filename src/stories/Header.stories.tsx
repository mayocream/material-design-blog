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
  links: [
    { path: '/design', text: 'design' },
    { path: '/components', text: 'components' },
    { path: '/develop', text: 'develop' },
    { path: '/resources', text: 'resources' },
    { path: '/blog', text: 'blog' },
  ]
}
