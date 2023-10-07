import React from 'react'
import { AddToCartIcon, RemoveFromCartIcon } from '../'
import { IListProductsProps } from '../models/ListProducts'
import './ListProducts.css'
import { useCart } from '../../hooks/useCart'
import { IProduct } from '../../models/Product'

export const ListProducts: React.FC<IListProductsProps> = ({ products }) => {
	const { cart, addToCart, removeFromCart } = useCart()

	const checkProductInCart = (product: IProduct) => {
		return cart.some(element => element.id === product.id)
	}

	return (
		<main className='products'>
			<ul>
				{products?.map(product => {
					const isProductInCart = checkProductInCart(product)

					return (
						<li key={product.id}>
							<img
								src={product.thumbnail}
								alt={product.title}
							/>
							<div>
								<strong>{product.title}</strong> - ${product.price}
							</div>
							<div>
								<button
									style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
									onClick={() => {
									isProductInCart
										? removeFromCart(product)
										: addToCart(product)
								}}>
										{isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
								</button>
							</div>
						</li>
					)
				})}
			</ul>
		</main>
  )
}
