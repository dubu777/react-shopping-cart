
const color = {
  light: '#FFFFFF',
  dark: '#303030',
  gray: '#838383',
} as const;

const fontSize = {
  heading: '24px',
  subTitle: '18px',
  body: '13px',
  small: '10px',
} as const;

const theme = {
  color,
  fontSize,
}

export type ThemeType = typeof theme;

export default theme;