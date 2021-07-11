import React, {useEffect, useState} from "react";
import classes from './TicketHistory.module.css'
import HistoryResults, {ticketHistory} from "../../../components/HistoryResults/HistoryResults";
import GrayCard from "../../../UI/GrayCard/GrayCard";
import {useDispatch} from "react-redux";
import {uiAction} from "../../../store/ui-slice";

const TicketHistoryPage :React.FC<{}> = () => {
    const [history,setHistory] = useState<ticketHistory[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(uiAction.closeMobileMenu());
    },[dispatch]);

    useEffect(() => {
        fetch('http://localhost:8080/user/getHistory',{
            headers: {
                'Content-type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem('authToken')
            }
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                if(data.error) {
                    return;
                }
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