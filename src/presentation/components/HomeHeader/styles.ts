import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${props => props.theme['gray-900']};
  padding: 2.5rem 0 3.5rem;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.h2``

export const NewPCButton = styled.button`
  height: 50px;
  border: 0;
  background: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;

  &:hover {
    background-color: ${props => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
