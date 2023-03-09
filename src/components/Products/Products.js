import { useEffect, useState, useContext } from "react";
import { getProducts } from "../../services/service"
import { CartContext } from "../../contexts/ShopCartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Products.styles.scss";
import { IconButton } from "@mui/material";

export function Products() {
  const INITIAL_STATE = [
    {
      nome: "",
      foto: "",
      categoria_id: 0,
      descricao: "",
      id: 1,
      preco: 0,
      amount: 0,
    },
  ];
  const [products, setProducts] = useState(INITIAL_STATE);
  const {
    productsCart = [],
    addProducToCart,
    removeProductToCart,
  } = useContext(CartContext);

  useEffect(() => {
    getProducts(setProducts);
  }, [setProducts]);

  return (
    <div className="container">
        <h1> Produtos </h1>
      {products.map((product) => {
        return (
          <div key={product.id} className="card">
            <img src={product.foto} alt="" className="photo" />

            <div className="info">
              <h1> {product.nome}</h1>
              <p>{product.descricao}</p>
              <p>{product.preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</p>
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
    </div>
  );
}
