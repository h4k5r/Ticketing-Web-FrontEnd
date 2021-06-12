import React from "react";
import classes from './StaffPage.module.css'
import GrayCard from "../../../UI/GrayCard/GrayCard";
import FormSearchStaff from "../../../components/AdminComponents/Forms/FormSearchStaff/FormSearchStaff";

const StaffPage:React.FC<{}> = () => {
    return(
        <section className={classes.staffContainer}>
            <div className={classes.cardContainer}>
                <GrayCard>
                    <FormSearchStaff/>
                </GrayCard>
                <GrayCard>

                </GrayCard>
            </div>
        </section>
    )
}
export default StaffPage