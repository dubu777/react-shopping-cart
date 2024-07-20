
const color = {
  white: '#FFFFFF',
  black: '#303030',
  gray: '#838383',
} as const;

const fontSize = {
  heading: '24px',
  body: '16px',
  small: '10px',
} as const;

const theme = {
  color,
  fontSize,
}

export type ThemeType = typeof theme;

export default theme;