import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewProductModal: () => void
}

export function Header({ onOpenNewProductModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <h2>
          Z<span>Stock</span>
        </h2>
        <button type="button" onClick={onOpenNewProductModal}>
          Nova movimentação
        </button>
      </Content>
    </Container>
  )
}
