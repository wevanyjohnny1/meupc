import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
import ComponentDetail from './components/ComponentDetail'
import { X } from 'phosphor-react'

const ComputerDetailsModal: React.FC = () => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Detalhes do seu PC</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <ComponentDetail />
        <ComponentDetail />
        <ComponentDetail />
      </Content>
    </Dialog.Portal>
  )
}

export default ComputerDetailsModal
