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

type ProductDepositInput = Omit<Product, 'id'>

interface ProductProviderProps {
  children: ReactNode
}

interface ProductsContextData {
  state: {
    products: Product[]
    getBalance: number
    getAmount: number
    getOutput: number
    filteredProducts: Product[]
  }
  actions: {
    setFilter: (props: string) => void
    createNewProduct: (product: ProductDepositInput) => void
  }
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
)

export function ProductsProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    api.get('products').then(response => setProducts(response.data.products))
  }, [])

  async function createNewProduct(productDeposit: ProductDepositInput) {
    const response = await api.post('/products', productDeposit)
    const { product } = response.data
    setProducts([...products, product])
  }

  const getBalance = useMemo(() => {
    const outputSale = products
      .filter(
        product =>
          product.output > 0 && (product.type === filter || filter === '')
      )
      .map(product => product.output * product.saleValue)
      .reduce((total, value) => total + value, 0)

    const outputProfit = products
      .filter(
        product =>
          product.output > 0 && (product.type === filter || filter === '')
      )
      .map(product => product.output * product.profitValue)
      .reduce((total, value) => total + value, 0)

    return outputProfit - outputSale
  }, [products, filter])

  const getAmount = useMemo(
    () =>
      products
        .filter(
          product =>
            product.amount > 0 && (product.type === filter || filter === '')
        )
        .map(product => product.amount)
        .reduce((total, value) => total + value, 0),
    [products, filter]
  )

  const getOutput = useMemo(
    () =>
      products
        .filter(
          product =>
            product.output > 0 && (product.type === filter || filter === '')
        )
        .map(product => product.output)
        .reduce((total, value) => total + value, 0),
    [products, filter]
  )

  const filteredProducts = useMemo(
    () => products.filter(({ type }) => type === filter || filter === ''),
    [products, filter]
  )

  return (
    <ProductsContext.Provider
      value={{
        state: {
          products,
          getBalance,
          getAmount,
          getOutput,
          filteredProducts
        },
        actions: {
          setFilter,
          createNewProduct
        }
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
