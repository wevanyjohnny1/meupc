import React from 'react'
import { ComponentImage, Container, Name } from './styles'
import { base64img } from './utils'
import Button from '../Button'

const ComponentItem: React.FC = () => {
  return (
    <Container>
      <Name>GTX 1660TI</Name>
      <ComponentImage src={base64img} />
      <Button title='QUERO ESSE!' />
    </Container>
  )
}

export default ComponentItem
