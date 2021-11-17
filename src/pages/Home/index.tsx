import { useStocks } from '../../hooks/useStock'
import { Container } from './style'

export function Home() {
  const { products } = useStocks()

  return (
    <Container>
      <h2> Hello World</h2>
    </Container>
  )
}
