import React from "react";
import classes from './BusesPage.module.css'
import FormSearchBuses from "../../../components/AdminComponents/Forms/FormSearchBuses/FormSearchBuses";
import GrayCard from "../../../UI/GrayCard/GrayCard";
import BusesList from "../../../components/AdminComponents/Lists/BusesList/BusesList";

const BusesPage:React.FC<{}> = () => {
    return(
        <section className={classes.busesContainer}>
            <div className={classes.subContainer}>
                <GrayCard cssClasses={[classes.topCard]}>
                    <FormSearchBuses/>
                </GrayCard>
                <GrayCard cssClasses={[classes.bottomCard]}>
                    <BusesList/>
                </GrayCard>
            </div>
        </section>
    )
}
export default BusesPage