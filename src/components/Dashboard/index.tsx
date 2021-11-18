import { Container } from './styles'
import moneyImg from '../../assets/money.svg'
import arrowUpImg from '../../assets/arrow_up.svg'
import arrowDownImg from '../../assets/arrow_down.svg'
import { useStocksState } from '../../hooks/useStock'

export function Dashboard() {
  const { getBalance, getAmount, getOutput } = useStocksState()

  return (
    <Container>
      <div>
        <header>
          <p>Valor em caixa</p>
          <img src={moneyImg} alt="Entradas" />
        </header>
        <strong className="money">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(getBalance)}
        </strong>
      </div>
      <div>
        <header>
          <p>Produtos em estoque</p>
          <img src={arrowUpImg} alt="Saídas" />
        </header>
        <strong className="products">
          {getAmount > 1 ? getAmount + ' Unidades' : getAmount + ' Unidade'}
        </strong>
      </div>
      <div>
        <header>
          <p>Produtos vendidos</p>
          <img src={arrowDownImg} alt="Total" />
        </header>
        <strong className="sales">
          {getOutput > 1 ? getOutput + ' Unidades' : getOutput + ' Unidade'}
        </strong>
      </div>
    </Container>
  )
}
