import { createContext } from 'react'
import { IFilter } from '../models/Filters'

export const FiltersContext = createContext<IFilter>({} as IFilter)

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  return (
    <FiltersContext.Provider value={{
      category: 'all',
      minPrice: 250
    }}>
      {children}
    </FiltersContext.Provider>
  )
}