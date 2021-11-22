import { createContext, ReactNode, useContext, useMemo, useState } from 'react'

interface Product {
  id: number
  description: string
  type: string
  saleValue: number
  profitValue: number
  amount: number
  output: number
}

type TransactionInput = Omit<Product, 'id'>

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
    createNewProduct: (product: TransactionInput) => void
    createNewSale: (id: number) => void
  }
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
)

export function ProductsProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 0,
      description: 'Notebook',
      type: 'eletronic',
      saleValue: 1000,
      profitValue: 2000,
      amount: 3,
      output: 5
    },
    {
      id: 1,
      description: 'Celular',
      type: 'eletronic',
      saleValue: 800,
      profitValue: 1000,
      amount: 5,
      output: 1
    },
    {
      id: 2,
      description: 'Liquidificador',
      type: 'appliances',
      saleValue: 100,
      profitValue: 300,
      amount: 15,
      output: 2
    },
    {
      id: 3,
      description: 'Sofa',
      type: 'furniture',
      saleValue: 1500,
      profitValue: 3000,
      amount: 2,
      output: 0
    },
    {
      id: 4,
      description: 'Geladeira',
      type: 'appliances',
      saleValue: 1500,
      profitValue: 2000,
      amount: 3,
      output: 1
    }
  ])
  const [filter, setFilter] = useState<string>('')

  function createNewProduct(productInput: TransactionInput) {
    const id = products[products.length - 1].id + 1
    const product = { ...productInput, id }
    setProducts([...products, product])
  }

  function createNewSale(id: number) {
    var arraySale = [...products]

    if (arraySale[id].amount > 0) {
      arraySale[id].amount = arraySale[id].amount - 1
      arraySale[id].output = arraySale[id].output + 1
      setProducts(arraySale)
    } else {
      console.log('---impossível vender mais itens' + arraySale[id].amount)
    }
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
          createNewProduct,
          createNewSale
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
