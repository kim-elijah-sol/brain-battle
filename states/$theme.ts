import { atom } from 'recoil'
import { v1 } from 'uuid'

export type ThemeType = 'light' | 'dark'

const $theme = atom<ThemeType>({
  key: `@global/theme__${v1()}`,
  default: 'light',
})

export default $theme
