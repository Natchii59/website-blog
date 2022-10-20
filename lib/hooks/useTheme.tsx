import { useEffect, useState } from 'react'

type UseTheme = () => {
  setTheme: () => void
}

type ThemeType = 'dark' | 'light'

export const useTheme: UseTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('theme') as ThemeType
    }

    return 'light'
  })

  const setThemeHandle = () => {
    const t: ThemeType = theme === 'light' ? 'dark' : 'light'
    window.localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const rootClass = document.documentElement.classList
    if (theme === 'light') {
      rootClass.remove('dark')
    } else {
      rootClass.add('dark')
    }
  }, [theme])

  return { setTheme: setThemeHandle }
}
