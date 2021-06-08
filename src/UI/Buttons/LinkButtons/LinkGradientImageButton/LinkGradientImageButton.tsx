import React from "react";
import { Link } from "react-router-dom";

import classes from './LinkGradientImageButton.module.css'

const LinkGradientImageButton:React.FC<
    {
        location:string,
        text:string,
        buttonColor:string,
        imageLocation:string}> = (props) => {
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
    return (
        <div className={classes.container}>
            <Link className={classes.link} to={props.location}>
                <img className={classes.btnImg} src={props.imageLocation} alt={props.text}/>
                <p className={classes.btnText}>{props.text}</p>
            </Link>
            <div className={`${classes.background} ${colorClass}`}/>
            <div className={`${classes.background} ${colorClass} ${classes.blur}`}/>
        </div>
    )
}
export default LinkGradientImageButton;