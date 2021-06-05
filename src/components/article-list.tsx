import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import dayjs from 'dayjs'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'

export interface ArticleSummary {
  url: string
  title: string
  subtitle: string
  date: Date
  pin?: boolean
  image?: string
}

export interface ArticleListProps {
  list: ArticleSummary[]
}

const FeaturedPost: React.FC<{ item: ArticleSummary }> = ({ item }) => {
  const h1Style = css({
    fontSize: '5.25rem',
    lineHeight: '5.75rem',
    fontVariationSettings: '"wght" 100, "wdth" 100, "opsz" 8',
    fontWeight: 300,
    fontFamily: '"Noto Sans SC", "Noto Sans JP", "Noto Sans"',
  })
  return (
    <Link
      css={css`
        :visited {
          color: '#616161';
        }
      `}
      to={item.url}
      className="no-underline flex flex-row items-center"
    >
      <div className="flex-1 mb-10 pr-10">
        <h1 css={h1Style} className="mb-8">
          {item.title}
        </h1>
        <div className="flex flex-row">
          <time
            css={{ marginTop: '-3px', fontFamily: '"Roboto Mono", monospace' }}
            className="mr-6"
            dateTime={item.date.toUTCString()}
          >
            {dayjs(item.date).format('MM.DD.YY')}
          </time>
          <div>
            <p css={{fontWeight: 100}}>{item.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex"></div>
    </Link>
  )
}

export const ArticleList: React.FC<ArticleListProps> = ({ list }) => {
  return (
    <>
      <div className="block w-full flex justify-center">
        <article className="block w-full max-w-7xl mb-12 px-10">
          {list.map((item: ArticleSummary): React.ReactNode => {
            if (item?.pin) {
              return <FeaturedPost item={item} />
            }
            return <></>
          })}
        </article>
      </div>
    </>
  )
}
