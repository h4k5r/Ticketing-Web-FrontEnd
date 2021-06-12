import React from "react";
import classes from './BusPage.module.css'
import FormSearchBuses from "../../../components/AdminComponents/Forms/FormSearchBuses/FormSearchBuses";
import GrayCard from "../../../UI/GrayCard/GrayCard";

const BusesPage:React.FC<{}> = () => {
    return(
        <section className={classes.busesContainer}>

            <div className={classes.cardContainer}>
                <GrayCard>
                    <FormSearchBuses/>
                </GrayCard>
                <GrayCard>

                </GrayCard>
            </div>
        </section>
    )
}
export default BusesPage