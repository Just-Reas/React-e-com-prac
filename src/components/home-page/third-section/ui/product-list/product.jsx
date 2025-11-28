import ProductItem from "../product-item/product-item";
import styles from "./product.module.scss";

const Product = () => {
  return (
    <div className={styles.slideContainer}>
      <ul className={styles.productsList}>
        <li className={styles.productItem}>
          <ProductItem
            Name="T-shirt with Tape Details"
            Rating="5.0"
            Price="$120"
            OldPrice="$150"
            Discount="-25%"
          />
        </li>
        <li className={styles.productItem}>
          <ProductItem
            Name="T-shirt with Tape Details"
            Rating="5.0"
            Price="$120"
            OldPrice="$150"
            Discount="-25%"
          />
        </li>
        <li className={styles.productItem}>
          <ProductItem
            Name="T-shirt with Tape Details"
            Rating="5.0"
            Price="$120"
            OldPrice="$150"
            Discount="-25%"
          />
        </li>
        <li className={styles.productItem}>
          <ProductItem
            Name="T-shirt with Tape Details"
            Rating="5.0"
            Price="$120"
            OldPrice="$150"
            Discount="-25%"
          />
        </li>
      </ul>
    </div>
  );
};

export default Product;
