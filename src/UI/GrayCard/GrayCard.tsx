import React from "react";
import classes from './GrayCard.module.css'
const GrayCard:React.FC<{cssClasses?:string[]}> = (props) => {
    return(
        <div className={`${classes.card} ${props.cssClasses}`}>

            {props.children}
            <div className={classes.cardBackground}/>

        </div>
    )
}
export default GrayCard;