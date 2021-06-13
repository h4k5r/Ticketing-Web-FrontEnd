import React from "react";
import classes from '../ListStyles/ListStyle.module.css';
import BusesListItem from "./BusesListItem";

const BusesList:React.FC<{}> = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.mainText}>Buses List</h1>
            <div className={classes.subContainer}>
                <BusesListItem busNumber={'TN 00 AS 0000'} busId={'opui312sdfg9mnbqLwopu8sd'}
                               assignedAccount={'test@test.com'}
                               onEditHandler={() => {}} onDeleteHandler={() => {}}/>
                <BusesListItem busNumber={'TN 00 AS 0000'} busId={'opui312sdfg9mnbqLwopu8sd'}
                               assignedAccount={'test@test.com'}
                               onEditHandler={() => {}} onDeleteHandler={() => {}}/>
                <BusesListItem busNumber={'TN 00 AS 0000'} busId={'opui312sdfg9mnbqLwopu8sd'}
                               assignedAccount={'test@test.com'}
                               onEditHandler={() => {}} onDeleteHandler={() => {}}/>
            </div>
        </div>
    )
}
export default BusesList;