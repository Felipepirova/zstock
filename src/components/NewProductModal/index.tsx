import {
  Container,
  ProductModalContainer,
  RadioBoxMovimentation,
  RadioBoxType
} from './styles'
import Modal from 'react-modal'
import { FormEvent, useState } from 'react'
import arrowUpImg from '../../assets/arrow_up.svg'
import arrowDownImg from '../../assets/arrow_down.svg'
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
  const [output /*setOutput*/] = useState(0)
  const [movimentation, setMovimentation] = useState('deposit')

  //setar condições para movimentation button em uma função, tirando valor de output sempre que for setado como deposit

  async function handleCreateNewProduct(event: FormEvent) {
    event.preventDefault()

    if (movimentation === 'deposit') {
      await createNewProduct({
        description,
        type,
        saleValue,
        profitValue,
        amount,
        output
      })
    } else {
      //withdraw product
    }

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

        <ProductModalContainer>
          <RadioBoxMovimentation
            type="button"
            onClick={() => {
              setMovimentation('deposit')
            }}
            isActive={movimentation === 'deposit'}
            activeColor="green"
          >
            <img src={arrowUpImg} alt="Icone entrada" />
            <span>Entrada</span>
          </RadioBoxMovimentation>
          <RadioBoxMovimentation
            type="button"
            onClick={() => {
              setMovimentation('withdraw')
            }}
            isActive={movimentation === 'withdraw'}
            activeColor="red"
          >
            <img src={arrowDownImg} alt="Icone saida" />
            <span>Saída</span>
          </RadioBoxMovimentation>
        </ProductModalContainer>

        <button type="submit">Cadastrar movimentação</button>
      </Container>
    </Modal>
  )
}
