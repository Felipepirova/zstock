import { useState } from 'react'
import { Header } from './components/Header'
import { NewProductModal } from './components/NewProductModal'
import { ProductsProvider } from './hooks/useStock'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'

export function App() {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false)

  function handleOpenNewProductModal() {
    setIsNewProductModalOpen(true)
  }

  function handleCloseNewProductModal() {
    setIsNewProductModalOpen(false)
  }

  return (
    <ProductsProvider>
      <Header onOpenNewProductModal={handleOpenNewProductModal} />
      <NewProductModal
        isOpen={isNewProductModalOpen}
        onRequestClose={handleCloseNewProductModal}
      />
      <Home />
      <GlobalStyle />
    </ProductsProvider>
  )
}
