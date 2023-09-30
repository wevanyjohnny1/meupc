import React from 'react'
import { Container, Content, Title } from './styles'
import ComponentCard from './ComponentCard'
import * as Dialog from '@radix-ui/react-dialog'
import ProgressBar from './ProgressBar'
import Button from '../Button'
import ComputerDetailsModal from '../ComputerDetailsModal'

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

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button title='FINALIZAR' />
        </Dialog.Trigger>

        <ComputerDetailsModal />
      </Dialog.Root>
    </Container>
  )
}

export default CustomizeHeader
