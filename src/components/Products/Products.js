import { useEffect, useState } from "react";
import { getProducts } from "../../services/service";
import "./Products.styles.scss";
import { Cards } from "../Cards/Cards";

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

  useEffect(() => {
    getProducts(setProducts);
  }, [setProducts]);

  return (
    <div className="container">
      <h1> Produtos </h1>
      <Cards products={products} />
    </div>
  );
}
