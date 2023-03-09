import { useContext } from "react";
import { CartContext } from "../../contexts/ShopCartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Cards.styles.scss";
import { IconButton } from "@mui/material";
import { toMoney } from "../../utils/money";

export function Cards({ products }) {
  const {
    productsCart = [],
    addProducToCart,
    removeProductToCart,
  } = useContext(CartContext);

  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="card">
            <img src={product.foto} alt="" className="photo" />

            <div className="info">
              <h1> {product.nome}</h1>
              <p>{product.descricao ? product.descricao : null}</p>
              <p>{toMoney(product.preco)}</p>
            </div>
            <div className="buttons">
              <IconButton
                size="large"
                onClick={() => removeProductToCart(product.id)}
              >
                <RemoveIcon />
              </IconButton>
              <h3>
                {productsCart.find((item) => item.id === product.id)?.amount
                  ? productsCart.find((item) => item.id === product.id)?.amount
                  : 0}
              </h3>
              <IconButton size="large" onClick={() => addProducToCart(product)}>
                <AddIcon />
              </IconButton>
            </div>
          </div>
        );
      })}
    </>
  );
}
