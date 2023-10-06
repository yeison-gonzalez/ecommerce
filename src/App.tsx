import { useState } from "react";
import { Footer, Header, ListProducts } from "./components";
import data from './mocks/products.json'
import { useFilters } from './hooks/useFilters'

function App() {
  const { filterProducts } = useFilters()
  const [products] = useState(data.products)
  const filteredProducts = filterProducts(products)

  return (
    <div>
      <Header />
      <ListProducts products={filteredProducts} />
      <Footer />
    </div>
  );
}

export default App;
