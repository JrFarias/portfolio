import React from 'react'
import { ThemeProvider } from 'styled-components'

import Content from '../Content'
import theme from '../../theme'
import Template from '../../template'

const App = () => (
  <ThemeProvider theme={theme}>
    <Template>
      <Content />
    </Template>
  </ThemeProvider>
)

export default App
