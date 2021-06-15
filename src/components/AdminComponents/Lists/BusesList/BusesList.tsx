import React from "react";
import classes from '../ListStyles/ListStyle.module.css';
import BusesListItem from "./BusesListItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";

export type busItem = {
    busNumber:string,
    busId:string,
    assignedAccount:string
}

const BusesList:React.FC<{}> = () => {
    const buses:busItem[] = useSelector((state:RootState) => state.busesList.results);
    return (
        <div className={classes.container}>

            <h1 className={classes.mainText}>Buses List</h1>
            <div className={classes.subContainer}>
                {
                    buses.map((busItem) => {
                        return <BusesListItem key={busItem.busId} busNumber={busItem.busNumber} busId={busItem.busId}
                                              assignedAccount={busItem.assignedAccount}/>
                    })
                }
            </div>
        </div>
    )
}
export default BusesList;