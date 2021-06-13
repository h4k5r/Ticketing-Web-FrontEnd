import React from "react";
import classes from './Stops.module.css'
import GrayCard from "../../../UI/GrayCard/GrayCard";
import FormSearchStops from "../../../components/AdminComponents/Forms/FormSearchStops/FormSearchStops";
import StopsList from "../../../components/AdminComponents/Lists/StopsList/StopsList";

const Stops:React.FC<{}> = () => {
    return(
        <section className={classes.stopsSection}>
            <div className={classes.cardContainer}>
                <GrayCard cssClasses={[classes.topCard]}>
                    <FormSearchStops/>
                </GrayCard>
                <GrayCard cssClasses={[classes.bottomCard]}>
                    <StopsList/>
                </GrayCard>
            </div>
        </section>
    )
}
export default Stops;