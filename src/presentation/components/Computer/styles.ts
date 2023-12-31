import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 1rem auto;
  padding: 1rem 1.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${props => props.theme['gray-700']};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleSection = styled.div``

export const Title = styled.h3``

export const DetailsSection = styled.div`
  margin-top: 8px;
`

export const Details = styled.h4``
