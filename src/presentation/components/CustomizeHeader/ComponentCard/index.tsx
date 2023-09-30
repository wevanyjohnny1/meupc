import React, { useState } from 'react'
import { Container, Content, LottieBox, Title } from './styles'
import { Cpu } from 'phosphor-react'
import Lottie from 'lottie-react'
import checkAnimation from '@/presentation/assets/lottie/check_animation.json'

type Props = {
  title: string
  done?: boolean
  ongoing?: boolean
}

const style = {
  height: 20
}

const ComponentCard: React.FC<Props> = ({ title, done, ongoing }) => {
  const [test, setTest] = useState(false)

  return (
    <Container done={done} ongoing={ongoing}>
      {test && <LottieBox><Lottie animationData={checkAnimation} loop={false} style={style} /></LottieBox>}

      <Title>
        {title}
      </Title>

      <Content>
        <Cpu size={52} />
      </Content>

    </Container>
  )
}

export default ComponentCard
