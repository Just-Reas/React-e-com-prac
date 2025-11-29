import Button from "../../../first-section/ui/text-button";
import ProductItem from "../product-item/product-item";
import styles from "./product-component.module.scss";
const ProductComponent = (props) => {
  const { saleClick, children } = props;
  return (
    <div className={styles.inner}>
      <div className="containerSup">
        <div className={styles.productsWindow}>
          <div className={styles.text}>{children}</div>
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
          <Button onClick={saleClick} className="product">
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
