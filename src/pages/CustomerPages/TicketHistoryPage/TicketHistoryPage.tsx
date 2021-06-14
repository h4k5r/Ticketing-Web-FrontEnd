import React from "react";
import classes from './TicketHistory.module.css'
import HistoryResults, {ticketHistory} from "../../../components/HistoryResults/HistoryResults";
import GrayCard from "../../../UI/GrayCard/GrayCard";

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
const TicketHistoryPage :React.FC<{}> = () => {
    return (
        <GrayCard cssClasses={[classes.container]}>
            <HistoryResults history={history}/>
        </GrayCard>
    )
}
export default TicketHistoryPage;