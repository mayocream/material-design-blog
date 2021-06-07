import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import dayjs from 'dayjs'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { ArticleSummary } from './types'

export interface PostHeaderProps {
  summary: ArticleSummary
}

export const PostHeader: React.FC<PostHeaderProps> = ({ summary }) => {
  return (
    <>
      <time
        css={css({ fontFamily: "'Roboto Mono', monospace" })}
        className="text-sm leading-normal block"
        dateTime={summary.date.toUTCString()}
      >
        {dayjs(summary.date).format('MM.DD.YY')}
      </time>
      <header className="block">
        <h1
          css={css({
            fontVariationSettings: '"wght" 100, "wdth" 100, "opsz" 8',
            fontWeight: 300,
          })}
          className="text-2.5rem leading-3.25rem"
        >
          {summary.title}
        </h1>
        <div className="flex">
          <p className="text-2xl sm:text-2.5rem leading-1.2 sm:leading-3.25rem mb-9 sm:mb-14 mt-6 sm:mt-10 text-black">
            {summary.subtitle}
          </p>
        </div>
      </header>
    </>
  )
}
