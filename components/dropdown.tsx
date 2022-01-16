import { Menu } from '@headlessui/react'

function Dropdown() {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-yellow-800 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Home
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-yellow-800 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Contact
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown
