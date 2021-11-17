import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <h2>
          Z<span>Stock</span>
        </h2>
        <button type="button">Nova movimentação</button>
      </Content>
    </Container>
  )
}
