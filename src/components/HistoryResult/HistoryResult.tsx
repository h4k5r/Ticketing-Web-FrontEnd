import React from "react";
import classes from './HistoryResult.module.css';
import blackBus from '../../images/la_bus-1.svg';
import qrCode from  '../../images/carbon_qr-code.svg'

const HistoryResult:React.FC<{busId:string,
    ticketId:string,
    busNumber:string,
    numberOfTickets:string,
    source:string,
    destination:string,
    bookedTime:string,
    hasUsed:boolean}> = props => {
    return (
        <div className={classes.container}>
            <div className={classes.subContainer1}>
                <img src={blackBus} alt={'bus-icon'}/>
                <div className={classes.subContainer2}>
                    <p className={classes.text}>{`Bus ID : ${props.busId}`}</p>
                    <p className={classes.text}>{`Bus Number : ${props.busNumber}`}</p>
                </div>
                <div className={classes.subContainer2}>
                    <p className={classes.text}>{`Ticket ID : ${props.ticketId}`}</p>
                    <p className={classes.text}>{`Number of Tickets : ${props.numberOfTickets}`}</p>
                </div>
                <div className={classes.subContainer2}>
                    <p className={classes.text}>{`Source : ${props.source}`}</p>
                    <p className={classes.text}>{`Destination : ${props.destination
                    }`}</p>
                </div>
                <div className={classes.subContainer2}>
                    <p className={classes.text}>{`Booked Time : ${props.bookedTime}`}</p>
                    <p className={classes.text}>{`have Used : ${props.hasUsed ? 'Yes' : 'No'}`}</p>
                </div>
            </div>
            <button className={classes.qrBtn}><img src={qrCode} alt={'qr-code'}/></button>
            <div className={classes.background}/>
        </div>
    );
}
export default HistoryResult;