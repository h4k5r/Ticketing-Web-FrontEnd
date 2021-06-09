import React from "react";
import classes from './HistoryResults.module.css';
import HistoryResult from "../HistoryResult/HistoryResult";

const HistoryResults:React.FC<{}> = () => {
    type ticketHistory = {
        busId:string,
        ticketId:string,
        busNumber:string,
        numberOfTickets:string,
        source:string,
        destination:string,
        bookedTime:string,
        hasUsed:boolean
    }
    const history:ticketHistory[] = [
        {
            busId:'0000',
            ticketId:'00001',
            busNumber:'0000',
            source:'srirangam',
            destination:'tolgate',
            numberOfTickets:'5',
            bookedTime:'12:00',
            hasUsed:true
        },
        {
            busId:'0000',
            ticketId:'00002',
            busNumber:'0000',
            source:'srirangam',
            destination:'tolgate',
            numberOfTickets:'5',
            bookedTime:'12:00',
            hasUsed:true
        },
        {
            busId:'0000',
            ticketId:'00003',
            busNumber:'0000',
            source:'srirangam',
            destination:'tolgate',
            numberOfTickets:'5',
            bookedTime:'12:00',
            hasUsed:true
        },
        {
            busId:'0000',
            ticketId:'00004',
            busNumber:'0000',
            source:'srirangam',
            destination:'tolgate',
            numberOfTickets:'5',
            bookedTime:'12:00',
            hasUsed:true
        },
        {
            busId:'0000',
            ticketId:'00005',
            busNumber:'0000',
            source:'srirangam',
            destination:'tolgate',
            numberOfTickets:'5',
            bookedTime:'12:00',
            hasUsed:true
        },
    ];
    return(
        <div className={classes.container}>
            <h1 className={classes.mainText}>History results</h1>
            <div className={classes.subContainer}>
                {history.map((ticketHistory) => {
                    return(
                        <HistoryResult key={ticketHistory.ticketId} busId={ticketHistory.busId} ticketId={ticketHistory.ticketId}
                                       busNumber={ticketHistory.busNumber} numberOfTickets={ticketHistory.numberOfTickets}
                                       source={ticketHistory.source} destination={ticketHistory.destination}
                                       bookedTime={ticketHistory.bookedTime} hasUsed={ticketHistory.hasUsed}/>
                    )
                })}
                <HistoryResult busId={'0000'} ticketId={'0006'} busNumber={'0000'}
                               source={'srirangam'} destination={'tolgate'}
                               numberOfTickets={'5'} bookedTime={'12:00'} hasUsed={true}/>
                <HistoryResult busId={'0000'} ticketId={'0007'} busNumber={'0000'}
                               source={'srirangam'} destination={'tolgate'}
                               numberOfTickets={'5'} bookedTime={'12:00'} hasUsed={true}/>
            </div>
        </div>
    )
}
export default HistoryResults;