import { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Dropdown from './dropdown'

const Navbar: NextPage = () => {
  const [menu, setMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  // Runs handleResize on page load and on resize
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              &apos;Ehukai
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setMenu(!menu)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          className="items-center md:flex"
          style={!menu && isMobile ? { display: 'none' } : { display: 'block' }}
        >
          <div className="flex flex-col mt-4 md:flex-row md:mx-6 md:mt-0">
            <Link href="/">
              <a className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-yellow-800 dark:hover:text-blue-400 md:mx-4 md:my-0">
                Home
              </a>
            </Link>
            <a
              className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-yellow-800 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Contact
            </a>
            <a
              className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-yellow-800 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
