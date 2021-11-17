import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '../services/api'

interface Product {
  id: number
  description: string
  type: string
  saleValue: number
  profitValue: number
  amount: number
  output: number
}

interface ProductProviderProps {
  children: ReactNode
}

interface ProductsContextData {
  products: Product[]
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
)

export function ProductsProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    api.get('products').then(response => setProducts(response.data.products))
  }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useStocks() {
  const context = useContext(ProductsContext)
  return context
}
