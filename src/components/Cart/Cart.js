import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/ShopCartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import "./Cart.styles.scss";
import { useNavigate } from "react-router-dom";
import { toMoney } from "../../utils/money";

export function Cart() {
  const { productsCart, removeProductToCart, addProducToCart, clearCart } =
    useContext(CartContext);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const handleBuy = () => {
    clearCart();
    navigate("/");
    alert("Voce comprou!");
  };
  const handlePrice = () => {
    let ans = 0;
    productsCart.map((item) => (ans += item.qtd * item.preco));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="container">
      <h1>Carrinho</h1>
      {productsCart.map((product) => {
        const total = product.preco * product.qtd;
        return (
          <div key={product.id} className="card">
            <img src={product.foto} alt="" className="photo" />

            <div className="info">
              <h1> {product.nome}</h1>
              <p>Total: {toMoney(total)}</p>
            </div>
            <div className="button">
              <IconButton
                size="large"
                onClick={() => removeProductToCart(product.id)}
              >
                <RemoveIcon />
              </IconButton>
              <h3>
                {productsCart.find((item) => item.id === product.id)?.qtd
                  ? productsCart.find((item) => item.id === product.id)?.qtd
                  : 0}
              </h3>
              <IconButton size="large" onClick={() => addProducToCart(product)}>
                <AddIcon />
              </IconButton>
            </div>
          </div>
        );
      })}
      <h1>Total: {toMoney(price)}</h1>
      <button onClick={() => handleBuy()}>Comprar</button>
    </div>
  );
}
