import React from 'react'
import { Container } from './styles'
import { ComponentItem, CustomizeHeader } from '@/presentation/components'

const Customize: React.FC = () => {
  return (
    <Container>
      <CustomizeHeader />
      <ComponentItem />
      <ComponentItem />
      <ComponentItem />
      <ComponentItem />
      <ComponentItem />
      <ComponentItem />
    </Container>
  )
}

export default Customize
