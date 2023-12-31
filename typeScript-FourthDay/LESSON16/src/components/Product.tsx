import { ProductType } from "../context/ProductsProvider";
import { ReducerAction, ReducerActionType } from "../context/CartProvider";
import { ReactElement } from "react";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTION: ReducerActionType;
  inCart: boolean;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTION,
  inCart,
}: PropsType): ReactElement => {
  //   const img: string = require(`../images/${product.sku}.jpg`);
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;
  console.log(img);

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTION.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? "=> Item in Cart ✔" : null;

  const content = (
    <>
      <article className="product">
        <h3>{product.name}</h3>
        <img src={img} alt="ali" className="product__img" />
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
          {itemInCart}
        </p>
        <button onClick={onAddToCart}>Add To Cart</button>
      </article>
    </>
  );

  return content;
};

export default Product;
