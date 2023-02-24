export const paletteDark = {
  textPrimary: '	#fff',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textDisabled: 'rgba(255, 255, 255, 0.5)',

  actionActive: '	#fff',
  actionHover: 'rgba(255, 255, 255, 0.08)',
  actionSelected: 'rgba(255, 255, 255, 0.16)',
  actionDisabled: 'rgba(255, 255, 255, 0.3)',
  actionDisabledBackground: 'rgba(255, 255, 255, 0.12)',

  backgroundDefault: '#121212',
  backgroundPaper: 'rgba(255, 255, 255, 0.03)',

  divider: 'rgba(255, 255, 255, 0.12)',
}

export const paletteLight = {
  textPrimary: 'rgba(0, 0, 0, 0.87)',
  textSecondary: 'rgba(0, 0, 0, 0.6)',
  textDisabled: 'rgba(0, 0, 0, 0.38)',

  actionActive: 'rgba(0, 0, 0, 0.54)',
  actionHover: 'rgba(0, 0, 0, 0.04)',
  actionSelected: 'rgba(0, 0, 0, 0.08)',
  actionDisabled: 'rgba(0, 0, 0, 0.26)',
  actionDisabledBackground: 'rgba(0, 0, 0, 0.12)',

  backgroundDefault: '#fff',
  backgroundPaper: 'rgba(0, 0, 0, 0.04)',

  divider: 'rgba(0, 0, 0, 0.12)',
}

export const palette = {
  black: '#000',
  white: '#fff',

  primary300: '#8561c5',
  primary500: '#673ab7',
  primary900: '#482880',

  secondary300: '#4caf50',
  secondary500: '#6fbf73',
  secondary900: '#357a38',

  error300: '#ef5350',
  error500: '#d32f2f',
  error900: '#c62828',

  gray100: '#E1E1E6',
  gray200: '#A9A9B2',
  gray400: '#7C7C8A',
  gray500: '#505059',
  gray600: '#323238',
  gray700: '#29292E',
  gray800: '#202024',
  gray900: '#121214',
}

export const lightColors = { ...palette, ...paletteLight }

export const darkColors = { ...palette, ...paletteDark }
