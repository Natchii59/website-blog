import type { FC } from 'react'

import NextLink from './next-link'
import ThemeToggle from './theme-toggle'

const AppBar: FC = () => {
  return (
    <div className='w-full z-40 p-4 fixed inset-x-0 top-0 backdrop-blur-md'>
      <div className='max-w-5xl mx-auto flex items-center justify-between gap-5'>
        <NextLink
          link={{ href: '/' }}
          className='text-xl font-bold font-nunito'
        >
          Natchi&apos;s Blog
        </NextLink>

        <ThemeToggle />
      </div>
    </div>
  )
}

export default AppBar
