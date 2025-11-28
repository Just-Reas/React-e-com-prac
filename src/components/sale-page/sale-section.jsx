import Product from "../home-page/third-section/ui/product-list/product";
import styles from "./sale-section.module.scss";

const SaleSection = () => {
  return (
    <div className={styles.saleInner}>
      <div className="containerSup">
        <div className={styles.saleText}>PRODUCTS ON SALE</div>
        <div className={styles.saleContainer}>
        </div>
      </div>
    </div>
  );
};

export default SaleSection;
