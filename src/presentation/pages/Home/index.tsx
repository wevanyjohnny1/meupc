import React from 'react'
import { Container } from './styles'
import Header from '@/presentation/components/Header'
import Computer from '@/presentation/components/Computer'
import SearchForm from '@/presentation/components/SearchForm'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <SearchForm />

      <Computer />
      <Computer />
    </Container>
  )
}

export default Home
