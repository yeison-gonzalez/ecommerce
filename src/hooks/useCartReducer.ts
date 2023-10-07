import { useReducer } from "react";
import { ICartContext } from "../models/CartContext";
import { IProduct } from '../models/Product';
import { ActionsCartKind } from '../models/Cart';
import { cartReducer, initialStateCart } from '../reducers/cart';

export const useCartReducer = (): ICartContext => {
  const [state, dispatch] = useReducer(cartReducer, initialStateCart)

  const addToCart = (product: IProduct) => dispatch({
    type: ActionsCartKind.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = (product: IProduct) => dispatch({
    type: ActionsCartKind.REMOVE_FROM_CART,
    payload: product
  })

  const clearCart = () => dispatch({
    type: ActionsCartKind.CLEAR_CART,
    payload: {} as IProduct
  })

  return {
    cart: state,
    addToCart,
    removeFromCart,
    clearCart
  }
};
