import React from "react";
import classes from '../ListStyles/ListStyle.module.css';
import BusesListItem from "./BusesListItem";

type busItem = {
    busNumber:string,
    busId:string,
    assignedAccount:string
}
const busItems:busItem[] = [
    {
        busNumber: 'TN 00 69 0000',
        busId:'1',
        assignedAccount:'test@test.com'
    },
    {
        busNumber: 'TN 00 69 0000',
        busId:'2',
        assignedAccount:'test@test.com'
    },
    {
        busNumber: 'TN 00 69 0000',
        busId:'3',
        assignedAccount:'test@test.com'
    },
]

const BusesList:React.FC<{}> = () => {

    return (
        <div className={classes.container}>

            <h1 className={classes.mainText}>Buses List</h1>
            <div className={classes.subContainer}>
                {
                    busItems.map((busItem) => {
                        return <BusesListItem key={busItem.busId} busNumber={busItem.busNumber} busId={busItem.busId}
                                              assignedAccount={busItem.assignedAccount}/>
                    })
                }
            </div>
        </div>
    )
}
export default BusesList;