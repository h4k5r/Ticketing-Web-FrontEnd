import React from "react";
import classes from './GrayCard.module.css'
const GrayCard:React.FC<{}> = (props) => {
    return(
        <div className={classes.card}>
            <div className={classes.cardBackground}/>
            {props.children}

        </div>
    )
}
export default GrayCard;