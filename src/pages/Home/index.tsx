import { Dashboard } from '../../components/Dashboard'
import { ProductList } from '../../components/ProductList'
import { Container } from './style'

export function Home() {
  return (
    <Container>
      <Dashboard />
      <ProductList />
    </Container>
  )
}
