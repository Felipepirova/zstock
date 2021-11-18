import { Container } from './styles'
import moneyImg from '../../assets/money.svg'
import arrowUpImg from '../../assets/arrow_up.svg'
import arrowDownImg from '../../assets/arrow_down.svg'
import { useStocksState } from '../../hooks/useStock'

export function Dashboard() {
  const { totalValueOfProducts } = useStocksState()

  console.log(totalValueOfProducts)

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
          }).format(100000)}
        </strong>
      </div>
      <div>
        <header>
          <p>Produtos em estoque</p>
          <img src={arrowUpImg} alt="Saídas" />
        </header>
        <strong className="products">32 Unidades</strong>
      </div>
      <div>
        <header>
          <p>Produtos vendidos</p>
          <img src={arrowDownImg} alt="Total" />
        </header>
        <strong className="sales">21 Unidades</strong>
      </div>
    </Container>
  )
}
