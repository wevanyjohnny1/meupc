import styled from 'styled-components'

export const Container = styled.div`
  height: 20px;
  width: 100%;
  max-width: 1120px;
  background-color: #e0e0de;
  border-radius: 50px;
  margin: 50px;
`

export const Filler = styled.div<{completed: number, bgColor: string}>`
  height: 100%;
  width: ${({ completed }) => completed}%;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: inherit;
  text-align: right;
`

export const Progress = styled.span`
  padding: 5;
  color: ${props => props.theme['gray-100']};
  font-weight: bold;
`
