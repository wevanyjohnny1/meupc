import styled from 'styled-components'

export const Container = styled.div<{done?: boolean, ongoing?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  padding: 1rem;
  border-radius: 6px;
  height: 8rem;
  width: 11rem;

  background-color: ${props => props.theme['gray-700']};
  border: 2px solid ${({ theme, done, ongoing }) =>
  done ? theme['green-700']
  : ongoing ? theme['yellow-300']
  : theme['gray-100']};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 0.5rem;
`

export const LottieBox = styled.div`
  position: absolute;
  top: 4px;
  right: 6px;
`

export const Title = styled.h4``
