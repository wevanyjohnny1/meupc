import React, { useCallback } from 'react'
import { Container, Content, Logo, NewPCButton } from './styles'
import { useNavigate } from 'react-router-dom'

const HomeHeader: React.FC = () => {
  const navigate = useNavigate()

  const handleNavigateToCustomize = useCallback(() => {
    navigate('/customize')
  }, [])

  return (
    <Container>
      <Content>
        <Logo>PC DA NASA</Logo>
        <NewPCButton onClick={handleNavigateToCustomize}>
          Criar novo PC
        </NewPCButton>
      </Content>
    </Container>
  )
}

export default HomeHeader
