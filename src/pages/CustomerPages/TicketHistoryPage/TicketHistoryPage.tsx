import React, {useEffect, useState} from "react";
import classes from './TicketHistory.module.css'
import HistoryResults, {ticketHistory} from "../../../components/HistoryResults/HistoryResults";
import GrayCard from "../../../UI/GrayCard/GrayCard";

const TicketHistoryPage :React.FC<{}> = () => {
    const [history,setHistory] = useState<ticketHistory[]>([]);
    useEffect(() => {
        fetch('http://localhost:8080/user/getHistory')
            .then(result => {
                return result.json()
            })
            .then(data => {
                setHistory(data);
            })
            .catch(err => {
                console.log(err)
            })
    },[]);
    return (
        <GrayCard cssClasses={[classes.container]}>
            <HistoryResults history={history}/>
        </GrayCard>
    )
}
export default TicketHistoryPage;