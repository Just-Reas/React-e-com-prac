import styles from "./sale-section.module.scss";
import GlobalSale from "./ui/global-product/global-products";

const SaleSection = () => {
  return (
    <div className={styles.saleInner}>
      <div className="containerSup">
        <div className={styles.saleBox}>
          <div className={styles.saleText}>PRODUCTS ON SALE</div>
          <GlobalSale />
        </div>
      </div>
    </div>
  );
};

export default SaleSection;
