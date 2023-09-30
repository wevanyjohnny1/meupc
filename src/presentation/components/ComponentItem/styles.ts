import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 20px; //remove
  margin-top: 20px; //remove

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  max-width: 15rem;
  border-radius: 8px;

  background-color: ${props => props.theme['gray-400']};
`

export const Name = styled.h2`
  color: ${props => props.theme['gray-900']};
`

export const ComponentImage = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
`
