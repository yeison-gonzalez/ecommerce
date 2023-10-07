import { createContext } from 'react'
import { ICartContext } from '../models/CartContext';
import { useCartReducer } from '../hooks/useCartReducer';

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { cart, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
