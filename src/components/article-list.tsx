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
    fontVariationSettings: '"wght" 100, "wdth" 100, "opsz" 8',
    fontWeight: 300,
  })
  return (
    <Link to={item.url} className="group no-underline flex-col md:flex flex-row items-center">
      <div className="flex-1 mb-10 pr-10">
        <h1 css={h1Style} className="mb-6 md:mb-8 text-2.5rem md:text-5.25rem leading-3.25rem md:leading-5.75rem">
          {item.title}
        </h1>
        <div className="flex flex-col md:flex-row">
          <time
            css={{ fontFamily: '"Roboto Mono", monospace' }}
            className="mt-0 md:-mt-3px mr-0 md:mr-6 mb-8 md:mb-0"
            dateTime={item.date.toUTCString()}
          >
            {dayjs(item.date).format('MM.DD.YY')}
          </time>
          <div>
            <p
              css={css({
                fontWeight: 100,
                letterSpacing: '0.03125em',
                lineHeight: '1.25rem',
              })}
            >
              {item.subtitle}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        <img
          css={css({ transition: 'border-radius 100ms 0ms cubic-bezier(0.4, 0, 0.2, 1)' })}
          className="w-full rounded-2xl group-hover:rounded-10"
          src={item.image}
        />
      </div>
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
