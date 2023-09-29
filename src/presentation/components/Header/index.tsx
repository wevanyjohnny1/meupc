import React from 'react'
import { Container, Content, Logo, NewPCButton } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>PC DA NASA</Logo>
        <NewPCButton>Criar novo PC</NewPCButton>
      </Content>
    </Container>
  )
}

export default Header
