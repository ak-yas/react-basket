import { createContext, useState } from 'react'
import { getProductData } from './productsStore'

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  removeAllFromCart: () => {},
  getTotalCost: () => {},
})

export function CartContextProvider(props) {
  const [items, setItems] = useState([])

  // [{id: '1', quantity: 2}]

  const getProductQuantity = (id) => {
    const quantity = items.find((item) => item.id === id)?.quantity
    if (!quantity) {
      return 0
    }
    return quantity
  }

  const addOneToCart = (id) => {
    const quantity = getProductQuantity(id)
    if (quantity === 0) {
      setItems([...items, { id: id, quantity: 1 }])
    } else {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, quantity: quantity + 1 } : item
        )
      )
    }
  }

  const removeOneFromCart = (id) => {
    const quantity = getProductQuantity(id)
    if (quantity === 1) {
      removeAllFromCart(id)
    } else {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, quantity: quantity - 1 } : item
        )
      )
    }
  }

  const removeAllFromCart = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id)
    })
  }

  const getTotalCost = () => {
    return items.reduce((total, item) => {
      const product = getProductData(item.id)
      return total + product.price * item.quantity
    }, 0)
  }

  const context = {
    items,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    removeAllFromCart,
    getTotalCost,
  }

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
