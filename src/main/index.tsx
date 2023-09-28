import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '@/presentation/pages/Home'
import { defaultTheme } from '@/presentation/styles/themes/default'

import {
  ThemeProvider
} from 'styled-components'
import { GlobalStyle } from '@/presentation/styles/global'

const root = ReactDOM.createRoot(document.getElementById('main'))

root.render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
)
