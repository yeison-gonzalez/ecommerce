import { IProduct } from "./Product";

export interface ICart extends IProduct {
  quantity: number
}

export enum ActionsCartKind {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}

export interface CartAction {
  type: ActionsCartKind;
  payload: IProduct;
}

