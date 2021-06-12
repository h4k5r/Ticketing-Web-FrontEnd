import React from "react";
import classes from './Stops.module.css'
import GrayCard from "../../../UI/GrayCard/GrayCard";
import FormSearchStops from "../../../components/AdminComponents/Forms/FormSearchStops/FormSearchStops";

const Stops:React.FC<{}> = () => {
    return(
        <section className={classes.stopsSection}>
            <div className={classes.cardContainer}>
                <GrayCard>
                    <FormSearchStops/>
                </GrayCard>
                <GrayCard>
                    
                </GrayCard>
            </div>
        </section>
    )
}
export default Stops;