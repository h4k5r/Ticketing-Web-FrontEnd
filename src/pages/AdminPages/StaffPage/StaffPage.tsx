import React from "react";
import classes from './StaffPage.module.css'
import GrayCard from "../../../UI/GrayCard/GrayCard";
import FormSearchStaff from "../../../components/AdminComponents/Forms/FormSearchStaff/FormSearchStaff";
import StaffList from "../../../components/AdminComponents/Lists/StaffList/StaffList";

const StaffPage:React.FC<{}> = () => {
    return(
        <section className={classes.staffSection}>
            <div className={classes.cardContainer}>
                <GrayCard cssClasses={[classes.topCard]}>
                    <FormSearchStaff/>
                </GrayCard>
                <GrayCard cssClasses={[classes.bottomCard]}>
                    <StaffList/>
                </GrayCard>
            </div>
        </section>
    )
}
export default StaffPage