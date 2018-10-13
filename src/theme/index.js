import Typography from 'typography'
import { injectGlobal } from 'styled-components'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Avenir Next', 'Helvetica Neue',
    'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Avenir Next', 'Helvetica Neue', 'sans-serif'],
})

const globalStyle = injectGlobal`
  body {
    background-color: #f9f9f9;
    margin: 0;
  }
`

export default {
  typography: typography.options,
  ...globalStyle,
  outline: 'none',
}
