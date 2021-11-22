import { useStocksActions, useStocksState } from '../../hooks/useStock'
import { Container, Content } from './styles'

export function ProductList() {
  const { filteredProducts } = useStocksState()
  const { setFilter, createNewSale } = useStocksActions()

  function handleCreateNewSale(id: number) {
    createNewSale(id)
  }

  return (
    <Container>
      <Content>
        <h2>Produtos em estoque</h2>
        <div>
          <button onClick={() => setFilter('')}>Todos</button>
          <button onClick={() => setFilter('eletronic')}>Eletrônicos</button>
          <button onClick={() => setFilter('appliances')}>
            Eletrodomésticos
          </button>
          <button onClick={() => setFilter('furniture')}>Moveis</button>
        </div>
      </Content>
      <ul>
        {filteredProducts.map((product, i) => (
          <li key={i}>
            <p>Descrição:{product.description} </p>
            <p>Tipo:{product.type}</p>
            <p>Valor de compra:{product.saleValue}</p>
            <p>Valor de venda:{product.profitValue} </p>
            <p>Quantidade em estoque:{product.amount}</p>
            <p>Já vendemos:{product.output}</p>
            <button onClick={() => handleCreateNewSale(i)}>
              Adicionar Venda
            </button>
          </li>
        ))}
      </ul>
    </Container>
  )
}
