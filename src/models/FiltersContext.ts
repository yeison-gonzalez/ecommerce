import { IFilter } from "./Filters";

export interface IFiltersContext {
  filters: IFilter
  setFilters: React.Dispatch<React.SetStateAction<IFilter>>
}
