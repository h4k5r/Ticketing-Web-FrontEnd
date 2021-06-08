import React from "react";
import classes from './Search.module.css'
import blackBus from '../../images/la_bus-1.svg'

const SearchResult:React.FC<{busId:string,busNumber:string,approxTime:string}> = props => {
    return (
        <div className={classes.container}>
            <img src={blackBus} alt={'bus-icon'}/>
            <div className={classes.busDetails}>
                <p className={`${classes.pText} ${classes.boldFont}`}>{props.busNumber}</p>
                <div className={classes.busTime}>
                    <p className={classes.pText}>Approx Arrival Time</p>
                    <p className={`${classes.pText} ${classes.boldFont}`}>{` `}{props.approxTime}</p>
                </div>
            </div>
            <div className={classes.controls}>
                <button className={classes.controlButtons}>-</button>
                <p className={`${classes.pText} ${classes.ticketCount}`}>1</p>
                <button className={classes.controlButtons}>+</button>
                <button className={classes.buyButton}>Buy Now</button>
            </div>
            <div className={classes.background}/>
        </div>
    );
}
export default SearchResult;