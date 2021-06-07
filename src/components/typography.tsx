import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import dayjs from 'dayjs'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { ArticleSummary } from './types'
import './typography.css'

export interface TypographyProps {
  featuredImage?: string
  rawHTML: string
}

export const Typography: React.FC<TypographyProps> = (props) => {
  return (
    <>
      {props?.featuredImage && (
        <div className="flex xl:-mx-20">
          <img className="rounded-2rem max-w-full" src={props.featuredImage} />
        </div>
      )}
      <section
        css={css({ fontSize: '1.375rem', fontWeight: 300, letterSpacing: '0.002em', lineHeight: '2.375rem' })}
        className="__section my-18"
      ></section>
    </>
  )
}
