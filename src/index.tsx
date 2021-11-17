import { createServer, Model } from 'miragejs'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

createServer({
  models: {
    products: Model
  },

  seeds(server) {
    server.db.loadData({
      products: [
        {
          id: 0,
          description: 'Notebook',
          type: 'eletronic',
          saleValue: 1000,
          profitValue: 1300,
          amount: 3,
          output: 1
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
      ]
    })
  },

  routes() {
    this.namespace = 'api'
    this.get('/products', () => {
      return this.schema.all('products')
    })
    this.post('products', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('products', data) //verificar se não é products ao invez de product
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
