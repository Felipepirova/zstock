import { useStocksActions, useStocksState } from '../../hooks/useStock'
import { Container, Content } from './styles'

export function ProductList() {
  const { filteredProducts } = useStocksState()
  const { setFilter, createNewSale } = useStocksActions()

  function handleCreateNewSale(id: number) {
    createNewSale(id)
  }

  function formatOutputType(type: string) {
    switch (type) {
      case 'eletronic':
        return 'Eletrônicos'
      case 'appliances':
        return 'Eletrodomésticos'
      case 'furniture':
        return 'Moveis'
    }
  }

  const formatMoney = (number: number) =>
    Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number)

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
        {filteredProducts.map(product => (
          <li key={product.id}>
            <header>
              <h2>{product.description} </h2>
              <p> - ({formatOutputType(product.type)})</p>
            </header>

            <footer>
              <div>
                <p>Preço compra:{formatMoney(product.saleValue)}</p>
                <p>Preço venda:{formatMoney(product.profitValue)} </p>
                <p>Estoque:{product.amount}</p>
                <p>Vendido:{product.output}</p>
              </div>
              <div>
                <button
                  disabled={product.amount >= 1 ? false : true}
                  onClick={() => handleCreateNewSale(product.id)}
                >
                  Adicionar Venda
                </button>
              </div>
            </footer>
          </li>
        ))}
      </ul>
    </Container>
  )
}
