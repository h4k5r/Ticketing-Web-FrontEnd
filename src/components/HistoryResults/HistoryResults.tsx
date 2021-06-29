import React from "react";
import classes from './HistoryResults.module.css';
import close from'../../images/close.svg'
import HistoryResult from "../HistoryResult/HistoryResult";
export type ticketHistory = {
    busId:string,
    ticketId:string,
    busNumber:string,
    numberOfTickets:string,
    source:string,
    destination:string,
    bookedTime:string,
    hasUsed:boolean
}
const HistoryResults:React.FC<{history:ticketHistory[],close?:boolean,closeHandler?: () => void}> = (props) => {

    return(
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <h1 className={classes.mainText}>History results</h1>
                {props.close  && <img src={close} onClick={props.closeHandler} alt={'close'}/>}
            </div>
            <div className={classes.subContainer}>
                {props.history.map((ticketHistory) => {
                    return(
                        <HistoryResult key={ticketHistory.ticketId} busId={ticketHistory.busId} ticketId={ticketHistory.ticketId}
                                       busNumber={ticketHistory.busNumber} numberOfTickets={ticketHistory.numberOfTickets}
                                       source={ticketHistory.source} destination={ticketHistory.destination}
                                       bookedTime={ticketHistory.bookedTime} hasUsed={ticketHistory.hasUsed}/>
                    )
                })}
            </div>
        </div>
    )
}
export default HistoryResults;