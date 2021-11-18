import { Container } from './styles'
import Modal from 'react-modal'

Modal.setAppElement('#root')

interface NewProductModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewProductModal({
  isOpen,
  onRequestClose
}: NewProductModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar novo produto</h2>
        <input type="text" placeholder="Descrição" />
        <h2>type</h2>
        <input type="number" placeholder="Valor de compra" />
        <input type="number" placeholder="Valor de venda" />
        <input type="number" placeholder="Quantidade de entrada" />
        <button>Cadastrar movimentação</button>
      </Container>
    </Modal>
  )
}
