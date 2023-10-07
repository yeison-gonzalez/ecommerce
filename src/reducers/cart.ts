import { CartAction, ActionsCartKind, ICart } from "../models/Cart"

export const initialStateCart: ICart[] = []

export const cartReducer = (state: ICart[], action: CartAction) => {
  const { type: actionType, payload: actionPayload } = action
  const { id } = actionPayload
  switch (actionType) {
    case ActionsCartKind.ADD_TO_CART: {
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }
    case ActionsCartKind.REMOVE_FROM_CART:
      return state.filter(element => element.id !== id);
    case ActionsCartKind.CLEAR_CART:
      return initialStateCart;
    default:
      return state;
  }
}