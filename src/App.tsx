import data from './mocks/products.json'
import { Footer, Header, ListProducts } from "./components";
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/cart/Cart';
import { CartProvider } from './context/cart';

function App() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(data.products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <ListProducts products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
