import styles from "./arrivals.module.scss";
import GlobalArrivals from "./ui/global-arrivals";

const ArrivalsSection = () =>{
    return(
        <div className={styles.arrivalsInner}>
            <div className="containerSup">
                <div className={styles.arrivalsBox}>
                    <div className={styles.arrivalsText}>NEW ARRIVALS</div>
                    <GlobalArrivals />
                </div>
            </div>
        </div>
    )
}

export default ArrivalsSection