import styled from 'styled-components'

export const Container = styled.button`
  height: 35px;
  border: 0;
  background: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};
  font-weight: bold;
  padding: 0 1rem;
  border-radius: 6px;

  &:hover {
    background-color: ${props => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
