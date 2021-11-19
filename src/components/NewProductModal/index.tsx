import { Container, ProductModalContainer, RadioBoxType } from './styles'
import Modal from 'react-modal'
import { FormEvent, useState } from 'react'
import { useStocksActions } from '../../hooks/useStock'

Modal.setAppElement('#root')

interface NewProductModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewProductModal({
  isOpen,
  onRequestClose
}: NewProductModalProps) {
  const { createNewProduct } = useStocksActions()

  const [description, setDescription] = useState('')
  const [type, setType] = useState('eletronic')
  const [saleValue, setSaleValue] = useState(0)
  const [profitValue, setProfitValue] = useState(0)
  const [amount, setAmount] = useState(0)
  const output = 0

  async function handleCreateNewProduct(event: FormEvent) {
    event.preventDefault()

    await createNewProduct({
      description,
      type,
      saleValue,
      profitValue,
      amount,
      output
    })

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewProduct}>
        <h2>Cadastrar novo produto</h2>

        <ProductModalContainer>
          <RadioBoxType
            type="button"
            onClick={() => {
              setType('eletronic')
            }}
            isActive={type === 'eletronic'}
            activeColor="green"
          >
            <span>Eletrônico</span>
          </RadioBoxType>
          <RadioBoxType
            type="button"
            onClick={() => {
              setType('appliances')
            }}
            isActive={type === 'appliances'}
            activeColor="green"
          >
            <span>Eletrodoméstico</span>
          </RadioBoxType>
          <RadioBoxType
            type="button"
            onClick={() => {
              setType('furniture')
            }}
            isActive={type === 'furniture'}
            activeColor="green"
          >
            <span>Móvel</span>
          </RadioBoxType>
        </ProductModalContainer>

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
        <button type="submit">Cadastrar Produto</button>
      </Container>
    </Modal>
  )
}
