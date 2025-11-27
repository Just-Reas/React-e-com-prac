import DescriptionTable from "./description-table/description-table";
import DescriptionText from "./description-text/description-text";
import Button from "./description-text/description-text-button/description-text-button";
import styles from "./first-section-description.module.scss";

const FirstSectionDescription = () =>{
    return(
        <div className={styles.headerInner}>
            <DescriptionText/>
            <Button children="Shop Now" className="buttonMain"/>
            <DescriptionTable/>
        </div>
    )
}

export default FirstSectionDescription