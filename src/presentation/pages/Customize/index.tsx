import React from 'react'
import { CustomizeComponents, CustomizeHeader } from '@/presentation/components'

import { Container, Subtitle } from './styles'

const Customize: React.FC = () => {
  return (
    <Container>
      <CustomizeHeader />

      <Subtitle>Escolha seu componente</Subtitle>

      <CustomizeComponents />

    </Container>
  )
}

export default Customize
