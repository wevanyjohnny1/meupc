import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${props => props.theme['gray-900']};
  padding: 1rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  margin-bottom: 1rem;
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
