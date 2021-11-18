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
    getBalance: number
    getAmount: number
    getOutput: number
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

  const getBalance = useMemo(() => {
    const outputSale = products
      .filter(product => product.output > 0)
      .map(product => product.output * product.saleValue)
      .reduce((total, value) => total + value, 0)

    const outputProfit = products
      .filter(product => product.output > 0)
      .map(product => product.output * product.profitValue)
      .reduce((total, value) => total + value, 0)

    return outputProfit - outputSale
  }, [products])

  const getAmount = useMemo(() => {
    return products
      .filter(product => product.amount > 0)
      .map(product => product.amount)
      .reduce((total, value) => total + value, 0)
  }, [products])

  const getOutput = useMemo(() => {
    return products
      .filter(product => product.output > 0)
      .map(product => product.output)
      .reduce((total, value) => total + value, 0)
  }, [products])

  return (
    <ProductsContext.Provider
      value={{
        state: {
          products,
          getBalance,
          getAmount,
          getOutput
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
