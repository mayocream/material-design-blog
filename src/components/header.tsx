import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import logo from './logo.svg'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import './header.css'

export interface HeaderLink {
  path: string
  text: string
}

export interface HeaderProps {
  links: HeaderLink[]
}

const NavList: React.FC<{ links: HeaderLink[] }> = ({ links }) => {
  const items = []
  for (const { path, text } of links) {
    const item = (
      <li key={path} className="nav-item inline-block text-center">
        <NavLink
          className="nav-link inline-block px-4 leading-18 no-underline text-primary capitalize relative transition-colors duration-100"
          activeClassName="selected"
          to={path}
        >
          {text}
          <span className="nav-indicator bg-primary right-4 left-4 absolute bottom-0 h-1 transform scale-y-0 origin-bottom transition-transform duration-235"></span>
        </NavLink>
      </li>
    )
    items.push(item)
  }
  return <ul className="nav-list">{items}</ul>
}

export const Header: React.FC<HeaderProps> = (props) => {
  const [showSearch, setShowSeach] = useState(false)

  return (
    <Router>
      <>
        <header className="header sticky h-18 top-0 w-full flex justify-between z-10 shadow-header">
          <a className="brand flex items-center h-18 pl-6 no-underline" href="/">
            <i className="brand__logo block w-8 h-8 mr-4"></i>
            <span className="brand__title text-primary text-base font-normal leading-normal uppercase">
              Material Design
            </span>
          </a>
          <nav className="nav ml-auto list-none block">
            <NavList links={props.links} />
          </nav>
          <form
            className={clsx('bg-white flex z-5 transition-opacity duration-100', {
              'hidden': !showSearch,
              'opacity-100': showSearch,
              'opacity-0': !showSearch,
              'pointer-events-none': !showSearch,
              'pointer-events-auto': showSearch,
              'delay-100': !showSearch,
            })}
          ></form>
          <button
            onClick={() => setShowSeach(!showSearch)}
            className="search-button focus:outline-none ml-6 w-18 h-18 z-5 flex items-center justify-center"
          >
            <span className="icons-container relative w-6 h-6 flex items-center justify-center leading-none">
              <SearchIcon
                className={clsx('transition-transform transform duration-200 absolute', {
                  'invisible': showSearch,
                  'scale-50': showSearch,
                })}
              >
                search
              </SearchIcon>
              <CloseIcon
                className={clsx(
                  'transition-transform transform duration-200 origin-center -rotate-90 scale-50 absolute',
                  {
                    'invisible': !showSearch,
                    'scale-100': !showSearch,
                    'rotate-0': !showSearch,
                  }
                )}
              >
                close
              </CloseIcon>
            </span>
          </button>
        </header>
      </>
    </Router>
  )
}
