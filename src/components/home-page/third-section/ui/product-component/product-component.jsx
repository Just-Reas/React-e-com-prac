import Button from "../../../first-section/ui/text-button";
import ProductItem from "../product-item/product-item";
import Product from "../product-list/product";
import styles from "./product-component.module.scss";
const ProductComponent = (props) => {
  const {
    saleClick, 
    children
   } = props;
  return (
    <div className={styles.inner}>
      <div className="containerSup">
        <div className={styles.productsWindow}>
          <div className={styles.text}>{children}</div>
          <Product />
          <Button onClick={saleClick} className="product">View All</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
