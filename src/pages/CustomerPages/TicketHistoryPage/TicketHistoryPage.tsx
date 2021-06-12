import React from "react";
import classes from './TicketHistory.module.css'
import HistoryResults from "../../../components/HistoryResults/HistoryResults";
import GrayCard from "../../../UI/GrayCard/GrayCard";

const TicketHistoryPage :React.FC<{}> = () => {
    return (
        <GrayCard cssClasses={[classes.container]}>
            <HistoryResults/>
        </GrayCard>
    )
}
export default TicketHistoryPage;