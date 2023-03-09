import CartProvider from "./contexts/ShopCartContext";
import { RoutesApp } from "./routes/Rotas";

function App() {
  return (
    <CartProvider>
      <RoutesApp />
    </CartProvider>
  );
}

export default App;
