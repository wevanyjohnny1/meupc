import React from 'react'
import {
  Container,
  Content,
  Details,
  DetailsSection,
  ShowPCDetailsModal,
  Title,
  TitleSection
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import ComputerDetailsModal from '../ComputerDetailsModal'

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
          <ShowPCDetailsModal>VER DETALHES</ShowPCDetailsModal>
        </Dialog.Trigger>

        <ComputerDetailsModal />
      </Dialog.Root>

    </Container>
  )
}

export default Computer
