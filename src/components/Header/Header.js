import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.styles.scss";

import { CartContext } from "../../contexts/ShopCartContext";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
export function Header() {
  const { productsCart } = useContext(CartContext);
  var total = productsCart?.length;
  const navigate = useNavigate();
  return (
    <header className="header">
      <a href="/">
        <h1>Challenge</h1>
      </a>
      <IconButton onClick={() => navigate("/cart")}>
        <Badge color="secondary" badgeContent={total}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </header>
  );
}
