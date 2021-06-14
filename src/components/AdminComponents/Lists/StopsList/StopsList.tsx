import React from "react";
import classes from '../ListStyles/ListStyle.module.css'
import StopsListItem from "./StopsListItem";

const StopsList:React.FC<{}> = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.mainText}>Stops</h1>
            <div className={classes.subContainer}>
                <StopsListItem stopName={'Srirangam'} stopId={'z12xc3voiuy67iuyiL'}/>
                <StopsListItem stopName={'Srirangam'} stopId={'z12xc3voiuy67iuyiL'}/>
                <StopsListItem stopName={'Srirangam'} stopId={'z12xc3voiuy67iuyiL'}/>
                <StopsListItem stopName={'Srirangam'} stopId={'z12xc3voiuy67iuyiL'}/>
            </div>
        </div>
    )
}
export default StopsList;