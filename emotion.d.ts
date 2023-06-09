import '@emotion/react'
import { ThemeType } from '~/states/$theme'
import { lightColor, darkColor } from '~/styles/palette'

type ThemeColor = typeof lightColor | typeof darkColor

declare module '@emotion/react' {
  export interface Theme {
    color: ThemeColor
  }
}
