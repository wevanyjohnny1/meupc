import React, { useCallback } from 'react'
import { Container, Filler, Progress } from './styles'
import { useTheme } from 'styled-components'

type Props = {
  completed: number
}

const ProgressBar: React.FC<Props> = ({ completed }) => {
  const theme = useTheme()

  const handleFillerColor = useCallback(() => {
    switch (true) {
      case completed <= 20:
        return theme['yellow-300']
      case completed <= 40:
        return theme['yellow-700']
      case completed <= 60:
        return theme['green-300']
      case completed <= 80:
        return theme['green-500']
      case completed <= 100:
        return theme['green-700']
    }
  }, [])

  return (
    <Container>
      <Filler completed={completed} bgColor={handleFillerColor()}>
        <Progress>{`${completed}%`}</Progress>
      </Filler>
    </Container>
  )
}

export default ProgressBar
