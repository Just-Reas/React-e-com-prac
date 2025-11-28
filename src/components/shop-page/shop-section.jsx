import styles from "./shop-section.module.scss";

const ShopSection = () => {
  return (
    <div className={styles.shopInner}>
      <div className="containerSup">
        <div className={styles.shopText}>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </div>
        <div className={styles.shopTableBox}>
            <a href="#" className={styles.shopTableMen}>
                <div className={styles.menText}>Men</div>
                <img className={styles.shopTableMenPng} src="./shop-page/men.png" alt="men" />
            </a>
            <a href="#" className={styles.shopTableWomen}>
                <img className={styles.shopTableWomenPng} src="./shop-page/women.png" alt="women" />
                <div className={styles.womenText}>Women</div>
            </a>
            <a href="#" className={styles.shopTableOuterwear}>
                <div className={styles.outerwearText}>Outerwear</div>
                <img className={styles.shopTableOuterwearPng} src="./shop-page/outerwear.png" alt="outerwear" />
            </a>
            <a href="#" className={styles.shopTableOutfits}>
                <div className={styles.outerwearText}>Outfits</div>
                <img className={styles.shopTableOutfitsPng} src="./shop-page/outfits.png" alt="outfits" />
            </a>
            <a href="#" className={styles.shopTableShoes}>
                <div className={styles.outerwearText}>Shoes</div>
                <img className={styles.shopTableShoesPng} src="./shop-page/shoes.png" alt="Shoes" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
