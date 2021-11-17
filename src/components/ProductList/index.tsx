import { useStocks } from '../../hooks/useStock'
import { Container } from './styles'

export function ProductList() {
  const { products } = useStocks()

  return (
    <Container>
      <h2>Produtos em estoque</h2>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>Descrição:{product.description} </p>
            <p>Tipo:{product.type}</p>
            <p>Valor de compra:{product.saleValue}</p>
            <p>Valor de venda:{product.profitValue} </p>
            <p>Quantidade em estoque:{product.amount}</p>
            <p>Já vendemos:{product.output}</p>
          </li>
        ))}
      </ul>
    </Container>
  )
}
