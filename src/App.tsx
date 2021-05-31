import React, { useState, useMemo, useEffect, useCallback } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

interface AppProps {}

const NavList = () => {
  const links = [
    { path: '/design', text: 'design' },
    { path: '/components', text: 'components' },
    { path: '/develop', text: 'develop' },
    { path: '/resources', text: 'resources' },
    { path: '/blog', text: 'blog' },
  ]
  const items = []
  for (const { path, text } of links) {
    const item = (
      <li key={path} className="nav-item inline-block text-center">
        <NavLink className="nav-link inline-block px-4 leading-18 no-underline text-primary capitalize relative transition-colors duration-100" activeClassName="selected" to={path}>
          {text}
          <span className="nav-indicator bg-primary right-4 left-4 absolute bottom-0 h-1 transform scale-y-0 origin-bottom transition-transform duration-235"></span>
        </NavLink>
      </li>
    )
    items.push(item)
  }
  return <ul className="nav-list">{items}</ul>
}

function App({}: AppProps) {
  return (
    <Router>
      <>
        <header className="header sticky h-18 top-0 w-full flex justify-between z-10 shadow-header">
          <a
            className="brand flex items-center h-18 pl-6 no-underline"
            href="/"
          >
            <i className="brand__logo block w-8 h-8 mr-4"></i>
            <span className="brand__title text-primary text-base font-normal leading-normal uppercase">
              Material Design
            </span>
          </a>
          <nav className="nav ml-auto list-none block">
            <NavList />
          </nav>
        </header>
      </>
    </Router>
  )
}

export default App
