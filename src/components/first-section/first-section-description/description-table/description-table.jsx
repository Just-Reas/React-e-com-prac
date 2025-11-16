import styles from "./description-table.module.scss";

const DescriptionTable = () =>{
    return(
        <ul className={styles.descriptionMenu}>
            <li className={styles.descriptionItem}>
                <div className={styles.descriptionItemHeader}>200+</div>
                <div className={styles.descriptionItemDesc}>International Brands</div>
            </li>
            <li className={styles.descriptionItem}>
                <div className={styles.descriptionItemLine}></div>
            </li>
            <li className={styles.descriptionItem}>
                <div className={styles.descriptionItemHeader}>2,000+</div>
                <div className={styles.descriptionItemDesc}>High-Quality Products</div>
            </li>
            <li className={styles.descriptionItem}>
                <div className={styles.descriptionItemLine}></div>
            </li>
            <li className={styles.descriptionItem}>
                <div className={styles.descriptionItemHeader}>30,000+</div>
                <div className={styles.descriptionItemDesc}>Happy Customers</div>
            </li>
        </ul>
    )
}

export default DescriptionTable