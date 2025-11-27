import styles from "./description-table.module.scss";

const DescriptionTable = () =>{
    return(
        <div className={styles.descriptionMenu}>
            <div className={styles.descriptionItem}>
                <div className={styles.descriptionItemHeader}>200+</div>
                <div className={styles.descriptionItemDesc}>International Brands</div>
            </div>
            <div className={styles.descriptionItem}>
                <div className={styles.descriptionItemLine}></div>
            </div>
            <div className={styles.descriptionItem}>
                <div className={styles.descriptionItemHeader}>2,000+</div>
                <div className={styles.descriptionItemDesc}>High-Quality Products</div>
            </div>
            <div className={styles.descriptionItem}>
                <div className={styles.descriptionItemLine}></div>
            </div>
            <div className={styles.descriptionItem}>
                <div className={styles.descriptionItemHeader}>30,000+</div>
                <div className={styles.descriptionItemDesc}>Happy Customers</div>
            </div>
        </div>
    )
}

export default DescriptionTable