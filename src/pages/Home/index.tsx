import { api } from '../../services/api'
import { Container } from './style'

export function Home() {
  //consumindo api
  api.get('products').then(response => console.log(response))

  return (
    <Container>
      <h2> Hello World</h2>
    </Container>
  )
}
