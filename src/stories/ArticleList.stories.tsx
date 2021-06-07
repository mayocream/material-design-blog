import React from 'react'
import { Story, Meta } from '@storybook/react'

import { ArticleList, ArticleListProps } from '../components/article-list'
import { ArticleSummary } from 'src/components/types'

export default {
  title: 'MD/ArticleList',
  component: ArticleList,
} as Meta

const Template: Story<ArticleListProps> = (args) => <ArticleList {...args} />

export const Preview = Template.bind({})
Preview.args = {
  list: [
    {
      url: '#',
      title: 'Unveiling Material You',
      subtitle: 'The next stage for Material Design',
      date: new Date('2021-05-18'),
      pin: true,
      image: 'https://lh3.googleusercontent.com/552oGSlinN0Gd7T8EjNkYGCBzHt0UmoG_pWtHSUY6FwaGT4q4-zJlGHD9rWO7MT5Oe_rtQZmyVnGRxVXch7Q1CTSQMs_1TcwbIMX9xZYDjEK2_R7PA',
    },
    {
      url: '#',
      title: 'Start Here: 5 Exercises to Prepare Your App for Large Screens',
      subtitle: 'What to prioritize when building a responsive experience',
      date: new Date('2021-05-19'),
      image: 'https://lh3.googleusercontent.com/pN5xtyQvPk3HXVVz-gVDc0YYvJ-UzjfFjMcEemwIKWfVmZGCcyV4XNEAjehGLIA9VnuCRzSC0HDNy6p0tDChJvEWjRVsqCvBWJ56sKjP-YvWxWfXdg',
    },
    {
      url: '#',
      title: 'Introducing the Compose Material Catalog',
      subtitle: 'An overview of the new Material Design catalog for Jetpack Compose',
      date: new Date('2021-05-19'),
      image: 'https://lh3.googleusercontent.com/EQuO-xaJrUVqix8E0Va2vWxmUWzEUU4rK7uQT_zfmdJaftbcM2g_kDDrJQavRjWpG1emn4uHlaA9AwptudrM_vSXzIbrUOz6NyBixnjGEF_rRTMISlk3',
    },
    {
      url: '#',
      title: 'Introducing Material Design Guidance for Large Screens',
      subtitle: 'Designing and building for more devices',
      date: new Date('2021-05-14'),
      image: 'https://lh3.googleusercontent.com/78oT8GROrcU1-CAKTdsCLUzhSnlS8l_YB33qv52wE1kBlqff0A77JYE8vStC1l__TG8hpqW7RniS-PIOL6fJfiEtEfv0OLpwKTmhYc94mSCzEuRApkMv',
    },
    {
      url: '#',
      title: 'Material Design at Google I/O 2021',
      subtitle: 'The sessions, workshops, discussions Material Design will host at Google I/O 2021',
      date: new Date('2021-05-06'),
      image: 'https://lh3.googleusercontent.com/0nEZHj1TagcvsenQeEDJ-4INrnLqDaDe5UoMy-eXVl03RsILYYbVc6rgUAYh5zmdJMeYYshwvetWzTaKNdT5qBpJFYSuGnhEvAsLJffSgv4cYYI9K2E',
    },
  ],
} as ArticleListProps
