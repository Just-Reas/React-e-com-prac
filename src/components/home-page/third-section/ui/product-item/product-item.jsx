import styles from "./product-item.module.scss";

const ProductItem = (props) =>{
    const{
        Name='',
        Rating,
        Price,
        OldPrice,
        Discount
    } = props
    return(
        <a href="#">
        <div className={styles.box}>
            <div className={styles.pic}>
                <img className={styles.picPng} src="./product.png" alt="product" />
            </div>
            <div href="#" className={styles.name}>{Name}</div>
            <div className={styles.rating}>
                <div className={styles.ratingStars}>
                    <img className={styles.star} src="./star.png" alt="star" />
                    <img className={styles.star} src="./star.png" alt="star" />
                    <img className={styles.star} src="./star.png" alt="star" />
                    <img className={styles.star} src="./star.png" alt="star" />
                    <img className={styles.star} src="./star.png" alt="star" />
                </div>
                <div className={styles.ratingNum}>{Rating}/5</div>
            </div>
            <div className={styles.price}>
                <div className={styles.priceTotal}>{Price}</div>
                <div className={styles.priceOld}>{OldPrice}</div>
                <div className={styles.priceDiscount}>{Discount}</div>
            </div>
        </div>
        </a>
    )
}

export default ProductItem