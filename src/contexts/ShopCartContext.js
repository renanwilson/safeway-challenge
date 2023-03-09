import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);

  //{id: 1, qtd:1}

  function addProducToCart(product) {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((prev) => prev.id === product.id);

    if (!item) {
      copyProductsCart.push({ id: product.id, qtd: 1, nome: product.nome, foto: product.foto, preco: product.preco});
    } else {
      item.qtd = item.qtd + 1;
    }

    setProductsCart(copyProductsCart);
  }

  function removeProductToCart(id) {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === id);

    if (item && item.qtd > 1) {
      item.qtd = item.qtd - 1;
      setProductsCart(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== id
      );
      setProductsCart(arrayFiltered);
    }
  }

  function clearCart() {
    setProductsCart([]);
  }

  return (
    <CartContext.Provider
      value={{ productsCart, addProducToCart, removeProductToCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}