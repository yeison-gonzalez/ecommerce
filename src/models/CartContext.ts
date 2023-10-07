import { ICart } from "./Cart";
import { IProduct } from "./Product";

export interface ICartContext {
  cart: ICart[]
  addToCart: (product: IProduct) => void
  removeFromCart: (product: IProduct) => void
  clearCart: () => void
}
