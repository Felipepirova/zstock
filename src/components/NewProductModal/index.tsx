import { Container, ProductTypeContainer, RadioBox } from './styles'
import Modal from 'react-modal'
import { useState } from 'react'
import arrowUpImg from '../../assets/arrow_up.svg'
import arrowDownImg from '../../assets/arrow_down.svg'

Modal.setAppElement('#root')

interface NewProductModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewProductModal({
  isOpen,
  onRequestClose
}: NewProductModalProps) {
  const [description, setDescription] = useState('')
  const [type, setType] = useState('deposit')
  const [saleValue, setSaleValue] = useState(0)
  const [profitValue, setProfitValue] = useState(0)
  const [amount, setAmount] = useState(0)

  console.log(description, saleValue, profitValue, amount)

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar novo produto</h2>
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor de compra"
          value={saleValue || ''}
          onChange={event => setSaleValue(Number(event.target.value))}
        />
        <input
          type="number"
          placeholder="Valor de venda"
          value={profitValue || ''}
          onChange={event => setProfitValue(Number(event.target.value))}
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={amount || ''}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <ProductTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType('deposit')
            }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={arrowUpImg} alt="Icone entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType('withdraw')
            }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={arrowDownImg} alt="Icone saida" />
            <span>Saída</span>
          </RadioBox>
        </ProductTypeContainer>

        <button>Cadastrar movimentação</button>
      </Container>
    </Modal>
  )
}
