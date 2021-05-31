import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { createEditor, Editor, Transforms } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { FaGithub } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import logo from './logo.svg'
import './App.css'

interface AppProps {}

function App({}: AppProps) {
  return (
    <div>
      <div className="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex">
        <div className="flex-none pl-4 sm:pl-6 xl:pl-8 flex items-center border-b border-gray-200 lg:border-b-0 lg:w-60 xl:w-72">
          <a className="overflow-hidden w-10 mx-auto md:w-auto">
            <span className="sr-only">aT Home Page</span>
            <div className="w-auto text-4xl text-gray-800">あType</div>
          </a>
        </div>
        <div className="flex-auto border-b border-gray-200 h-18 flex items-center justify-between px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8">
          <button
            type="button"
            className="group leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200 w-full py-2"
          >
            <BiSearch size="1.5rem" />
            <span>
              Quick search
              <span className="hidden sm:inline"> for anything</span>
            </span>
          </button>
          <div className="lg:w-64 pl-8 flex-shrink-0 flex items-center justify-end space-x-6">
            <span>Dev</span>
            <a
              className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
              href="https://github.com/mayocream/atype"
            >
              <FaGithub size="1.5rem" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full max-w-8xl mx-auto">
        <div className="lg:flex">
          <div className="fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden"></div>
          <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
            <div className="w-full flex">
              <div className="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16"></div>
              <div className="hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8">
                <div className="flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) pt-10 pb-6 top-18">
                  <div className="mb-8">
                    <h5 className="text-gray-900 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-xs">
                      Table of contents
                    </h5>
                    <ul className="overflow-x-hidden text-gray-500 font-medium">
                      <li>
                        <a
                          href="#class-reference"
                          className="block transform transition-colors duration-200 py-2 hover:text-gray-900 text-gray-900"
                        >
                          Default class reference
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
