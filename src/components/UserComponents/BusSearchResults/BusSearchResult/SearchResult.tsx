import React, {useState} from "react";
import classes from './Search.module.css'
import blackBus from '../../../../images/la_bus-1.svg'
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";
import fetch from "node-fetch";


const SearchResult: React.FC<{ busId: string, busNumber: string }> = props => {
    const [numberOfTickets, setNumberOfTickets] = useState(1);
    const source = useSelector((state: RootState) => {
        return state.userSearch.source
    });
    const destination = useSelector((state: RootState) => {
        return state.userSearch.destination
    });
    const onIncreaseClicked = () => {
        setNumberOfTickets(prevState => {
            return prevState + 1;
        })
    }
    const onDecreaseClicked = () => {
        setNumberOfTickets(prevState => {
            if (prevState <= 1) {
                return prevState;
            }
            return prevState - 1;
        })
    }
    const onBuyClicked = () => {
        fetch('http://localhost:8080/user/buyTicket',{
            method:'POST',
            headers :{
                'Content-type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('authToken')
            },
            body:JSON.stringify({
                busNumber:props.busNumber,
                source:source,
                destination:destination,
                numberOfTickets:numberOfTickets
            })
        })
            .then(result => {
                return result.json();
            })
            .then(data => {
                if(data.error) {
                    return;
                }

            })
    }
    return (
        <div className={classes.container}>
            <img src={blackBus} alt={'bus-icon'}/>
            <div className={classes.busDetails}>
                <p className={classes.pText}>Bus Number</p>
                <p className={`${classes.pText} ${classes.boldFont}`}>{props.busNumber}</p>
            </div>
            <div className={classes.controls}>
                <button className={classes.controlButtons} onClick={onDecreaseClicked}>-</button>
                <p className={`${classes.pText} ${classes.ticketCount}`}>{numberOfTickets}</p>
                <button className={classes.controlButtons} onClick={onIncreaseClicked}>+</button>
                <NormalGradientButton text={'BuyNow'} buttonColor={'green'}
                                      cssClassesOnContainer={[classes.buyButton]} onClick={onBuyClicked}/>
            </div>
            <div className={classes.background}/>
        </div>
    );
}
export default SearchResult;