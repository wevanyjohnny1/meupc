import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Customize, Home } from '@/presentation/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customize' element={<Customize />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
