import React from "react";
import {Link} from "react-router-dom";
import classes from "./LinkGradientButton.module.css";

const LinkGradientButton:React.FC<{
    location:string,
    text:string,
    buttonColor:string, cssClasses?:string[] | undefined}> = (props) => {
    let colorClass:string;
    switch (props.buttonColor){
        case 'green':
            colorClass = classes.green;
            break
        case 'red':
            colorClass = classes.red;
            break;
        case 'violet':
            colorClass = classes.violet;
            break;
        default:
            colorClass = "";
            break;
    }
    return(
        <div className={`${classes.container} ${props.cssClasses}`}>
            <Link className={classes.link} to={props.location}>{props.text}</Link>
            <div className={`${classes.background} ${colorClass}`}/>
            <div className={`${classes.background} ${colorClass} ${classes.blur}`}/>
        </div>
    );
};
export default LinkGradientButton;

