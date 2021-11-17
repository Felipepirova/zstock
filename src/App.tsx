import { Header } from './components/Header'
import { ProductsProvider } from './hooks/useStock'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ProductsProvider>
      <Header />
      <Home />
      <GlobalStyle />
    </ProductsProvider>
  )
}
