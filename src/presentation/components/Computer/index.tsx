import React from 'react'
import {
  Container,
  Content,
  Details,
  DetailsSection,
  Title,
  TitleSection
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import ComputerDetailsModal from '../ComputerDetailsModal'
import Button from '../Button'

const Computer: React.FC = () => {
  return (
    <Container>
      <Content>
        <TitleSection>
          <Title>
            PC DA NASA
          </Title>
        </TitleSection>
        <DetailsSection>
          <Details>
          Componentes: aaaaa, bbbb, bbbb, bbbbb
          </Details>
        </DetailsSection>
      </Content>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button title='VER DETALHES' />
        </Dialog.Trigger>

        <ComputerDetailsModal />
      </Dialog.Root>

    </Container>
  )
}

export default Computer
