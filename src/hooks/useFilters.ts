import { useContext } from "react"
import { IProduct } from '../models/Product';
import { IFilter } from "../models/Filters";
import { FiltersContext } from "../context/filters";

export const useFilters = (): {
  filters: IFilter;
  filterProducts: (products: IProduct[]) => IProduct[];
  setFilters: React.Dispatch<React.SetStateAction<IFilter>>
} => {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products: IProduct[]): IProduct[] => {
    return products?.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return {
    filters,
    filterProducts,
    setFilters
  }
}