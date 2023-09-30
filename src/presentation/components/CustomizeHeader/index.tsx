import React from 'react'
import { Container, Content, Title } from './styles'
import ComponentCard from './ComponentCard'
import ProgressBar from './ProgressBar'

const CustomizeHeader: React.FC = () => {
  return (
    <Container>
      <Title>
        Crie o seu PC da NASA!
      </Title>
      <Content>
        <ComponentCard title="Processador" done/>
        <ComponentCard title="Placa mãe" done />
        <ComponentCard title="Placa de Vídeo" ongoing />
        <ComponentCard title="Memória RAM" />
        <ComponentCard title="Armazenamento" />
      </Content>

      <ProgressBar completed={81} />
    </Container>
  )
}

export default CustomizeHeader
