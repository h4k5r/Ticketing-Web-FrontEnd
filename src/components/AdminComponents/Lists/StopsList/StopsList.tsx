import React from "react";
import classes from '../ListStyles/ListStyle.module.css'
import StopsListItem from "./StopsListItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";
export type stop = {
    name:string,
    _id:string
}
const StopsList:React.FC<{}> = () => {
    const results = useSelector((state:RootState) => state.stopsList.results);
    return (
        <div className={classes.container}>
            <h1 className={classes.mainText}>Stops</h1>
            <div className={classes.subContainer}> {
                results.map((stop) => {
                    console.log(stop)
                    return(<StopsListItem key={stop._id} stopName={stop.name} stopId={stop._id}/>);
                })
            }

            </div>
        </div>
    )
}
export default StopsList;