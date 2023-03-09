import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/ShopCartContext";
import "./Cart.styles.scss";
import { useNavigate } from "react-router-dom";
import { toMoney } from "../../utils/money";
import { Cards } from "../Cards/Cards";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export function Cart() {
  const { productsCart, clearCart } = useContext(CartContext);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const handleBuy = () => {
    clearCart();
    navigate("/");
    alert("Voce comprou!");
  };
  const handlePrice = () => {
    let ans = 0;
    productsCart.map((item) => (ans += item.amount * item.preco));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="container">
      <h1>Carrinho</h1>
      <Cards products={productsCart} />
      <div className="infos">
        <h1>Total: {toMoney(price)}</h1>
        <Button
          variant="outlined"
          endIcon={<SendIcon />}
          onClick={() => handleBuy()}
          size="medium"
        >
          Comprar
        </Button>
      </div>
    </div>
  );
}
