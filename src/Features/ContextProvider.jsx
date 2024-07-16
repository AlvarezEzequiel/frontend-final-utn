import React, { createContext, useMemo, useReducer } from 'react'
import CartReducer, { totalItem, totalPrice } from './CartReducer';

export const CartContext = createContext()

const ContextProvider = ({children}) => {
    const [cart, dispatch] = useReducer(CartReducer, [])
    const cartItemCount = useMemo(() => totalItem(cart), [cart]);
    const cartTotal = useMemo(() => totalPrice(cart), [cart]);

  return (
    <CartContext.Provider value={{cart, dispatch, cartItemCount, cartTotal}}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextProvider