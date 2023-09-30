import React from 'react'
import { Container } from './styles'
import Computer from '@/presentation/components/Computer'
import SearchForm from '@/presentation/components/SearchForm'
import { HomeHeader } from '@/presentation/components'

const Home: React.FC = () => {
  return (
    <Container>
      <HomeHeader />

      <SearchForm />

      <Computer />
      <Computer />
    </Container>
  )
}

export default Home
