import { setCookie } from 'cookies-next'
import { useRecoilState } from 'recoil'
import { useEffect, useState } from 'react'
import { ThemeProvider as EM_ThemeProvider } from '@emotion/react'

import $theme, { ThemeType } from '~/states/$theme'
import { lightColor, darkColor } from '~/styles/palette'

interface Props {
  defaultTheme: ThemeType
  children: React.ReactNode
}

const ThemeProvider = ({ defaultTheme, children }: Props) => {
  const [isMount, setIsMount] = useState(false)

  const [currentTheme, setCurrentTheme] = useRecoilState($theme)

  const themeType = !isMount ? defaultTheme : currentTheme

  const color = themeType === 'dark' ? darkColor : lightColor

  useEffect(() => {
    setIsMount(true)
    setCurrentTheme(defaultTheme)
  }, [])

  useEffect(() => {
    if (isMount) {
      setCookie('theme', currentTheme)
    }
  }, [isMount, currentTheme])

  return (
    <EM_ThemeProvider
      theme={{
        color,
      }}
    >
      {children}
    </EM_ThemeProvider>
  )
}

export default ThemeProvider
