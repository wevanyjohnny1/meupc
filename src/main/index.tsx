import React from 'react'
import ReactDOM from 'react-dom/client'
import { defaultTheme } from '@/presentation/styles/themes/default'

import {
  ThemeProvider
} from 'styled-components'
import { GlobalStyle } from '@/presentation/styles/global'
import { Router } from '@/presentation/components'

const root = ReactDOM.createRoot(document.getElementById('main'))

root.render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
)
