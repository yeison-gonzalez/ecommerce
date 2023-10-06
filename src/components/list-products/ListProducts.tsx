import React from 'react'
import { AddToCartIcon } from '../'
import { IListProductsProps } from '../models/ListProducts'
import './ListProducts.css'

export const ListProducts: React.FC<IListProductsProps> = ({ products }) => {
	return (
		<main className='products'>
			<ul>
				{products?.map(product => (
					<li key={product.id}>
						<img
							src={product.thumbnail}
							alt={product.title}
						/>
						<div>
							<strong>{product.title}</strong> - ${product.price}
						</div>
						<div>
							<button>
								<AddToCartIcon />
							</button>
						</div>
					</li>
				))}
			</ul>
		</main>
  )
}
