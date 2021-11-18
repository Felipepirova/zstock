import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
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
  state: {
    products: Product[]
    totalValueOfProducts: number
  }
  actions: {
    //function
  }
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
)

export function ProductsProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    api.get('products').then(response => setProducts(response.data.products))
  }, [])

  const totalValueOfProducts = useMemo(() => {
    return products.reduce((total, product) => total + product.saleValue, 0)
  }, [products])

  // const getProductsValue = () => {
  //   return products
  //     .filter(product => product.qty > 0)
  //     .map(product => product.qty * product.saleValue)
  //     .reduce((acc, value) => acc + value, 0)
  // }

  return (
    <ProductsContext.Provider
      value={{
        state: {
          products,
          totalValueOfProducts
        },
        actions: {}
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useStocks = () => useContext(ProductsContext)

export const useStocksState = () => {
  const context = useStocks()
  return context.state
}

export const useStocksActions = () => {
  const context = useStocks()
  return context.actions
}
