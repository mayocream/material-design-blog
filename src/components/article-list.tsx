import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import dayjs from 'dayjs'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { ArticleSummary } from './types'

export interface ArticleListProps {
  list: ArticleSummary[]
}

const FeaturedPost: React.FC<{ item: ArticleSummary }> = ({ item }) => {
  const h1Style = css({
    fontVariationSettings: '"wght" 100, "wdth" 100, "opsz" 8',
    fontWeight: 300,
  })
  return (
    <Link to={item.url} className="group no-underline flex-col md:flex md:flex-row items-center">
      <div className="flex-1 mb-10 pr-10">
        <h1 css={h1Style} className="mb-6 sm:mb-8 text-2.5rem sm:text-5.25rem leading-3.25rem sm:leading-5.75rem">
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
              className="text-sm sm:text-base"
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

const FlowPost: React.FC<{ item: ArticleSummary }> = ({ item }) => {
  const postStyle = css`
    @media (min-width: 920px) {
      &:nth-child(4n + 1) {
        padding-right: 8.875rem;
      }
      &:nth-child(4n + 2) {
        padding-right: 8.875rem;
      }
      &:nth-child(4n + 3) {
        padding-left: 8.875rem;
      }
      &:nth-child(4n + 4) {
        padding-left: 8.875rem;
      }
    }
  `
  return (
    <div css={postStyle} className="mt-18 sm:odd:pr-6 sm:mt-30 md:mt-40 flex-1 md:flex-1/2">
      <Link to={item.url} className="group no-underline">
        <div className="__post_content">
          <div className="__post_content_top">
            <h2
              css={css({ fontVariationSettings: '"wght" 100, "wdth" 100, "opsz" 8', fontWeight: 300 })}
              className="__post_content_title mb-6 sm:mb-8 text-2.5rem"
            >
              {item.title}
            </h2>
            <div className="__post_content_info flex flex-col md:flex-row mb-10">
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
                  className="text-sm sm:text-base"
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
          <div className="__post_content_image flex-1 w-full">
            <img
              css={css({ transition: 'border-radius 100ms 0ms cubic-bezier(0.4, 0, 0.2, 1)' })}
              className="w-full rounded-2xl group-hover:rounded-10"
              src={item.image}
            />
          </div>
        </div>
      </Link>
    </div>
  )
}

export const ArticleList: React.FC<ArticleListProps> = ({ list }) => {
  return (
    <>
      <div className="block w-full flex justify-center">
        <article className="block w-full max-w-7xl mb-12 px-10">
          {list
            .filter((item) => item?.pin)
            .map((item: ArticleSummary): React.ReactNode => {
              return <FeaturedPost item={item} />
            })}
          <div className="flex flex-wrap flex-row">
            {list
              .filter((item) => !item?.pin)
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .map((item: ArticleSummary): React.ReactNode => {
                return <FlowPost item={item} />
              })}
          </div>
        </article>
      </div>
    </>
  )
}
