import styles from "./description-text.module.scss";

const DescriptionText = () =>{
    return(
        <div className={styles.descriptionInner}>
            <div className={styles.descriptionHeader}>
                <h1>FIND CLOTHES<br></br>THAT MATCHES<br></br>YOUR STYLE</h1>
            </div>
            <div className={styles.descriptionDesc}>
                <div>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
            </div>
        </div>
    )
}

export default DescriptionText