import {
  lightColors,
  darkColors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
  media,
} from '@cookies-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export { lightColors, darkColors } from '@cookies-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors: lightColors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },

  media,
})

export const darkTheme = createTheme({
  colors: darkColors,
})
