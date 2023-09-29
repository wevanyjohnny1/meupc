import React from 'react'
import { Container } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

const SearchForm: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Pc daora..." />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </Container>
  )
}

export default SearchForm
