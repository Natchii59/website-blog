import type { FC } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

import { useTheme } from '@/lib/hooks/useTheme'

const ThemeToggle: FC = () => {
  const { setTheme } = useTheme()

  return (
    <button
      className='relative overflow-x-hidden flex items-center justify-center p-4 text-lg rounded-md shadow-md bg-orange-400 hover:bg-orange-400/90 focus-visible:bg-orange-400/90 outline-focus'
      onClick={setTheme}
    >
      <FaMoon className='absolute transition-transform duration-500 translate-x-10 dark:translate-x-0' />

      <FaSun className='absolute transition-transform duration-500 dark:-translate-x-10' />
    </button>
  )
}

export default ThemeToggle
