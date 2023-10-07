import { useState, createContext } from 'react'
import { IFiltersContext } from '../models/FiltersContext'

export const FiltersContext = createContext<IFiltersContext>({} as IFiltersContext)

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{filters, setFilters}}>
      {children}
    </FiltersContext.Provider>
  )
}