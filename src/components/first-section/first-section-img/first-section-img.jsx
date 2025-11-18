import styles from "./first-section-img.module.scss";

const FirstSectionImg = () =>{
    return(
        <div className={styles.imgContainer}>
            <img className={styles.imgMain} src="./first-section.jpg" alt="first-img" />
        </div>
    )
}

export default FirstSectionImg