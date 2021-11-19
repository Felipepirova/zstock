import { Container } from './styles'
import moneyImg from '../../assets/money.svg'
import arrowUpImg from '../../assets/arrow_up.svg'
import arrowDownImg from '../../assets/arrow_down.svg'
import { useStocksState } from '../../hooks/useStock'

export function Dashboard() {
  const { getBalance, getAmount, getOutput } = useStocksState()

  const formatMoney = (balance: number) =>
    Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(balance)

  return (
    <Container>
      <div>
        <header>
          <p>Valor acumulado</p>
          <img src={moneyImg} alt="Entradas" />
        </header>
        <strong className="money">{formatMoney(getBalance)}</strong>
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
