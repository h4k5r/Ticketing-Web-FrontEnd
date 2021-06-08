import React from "react";
import classes from "./NormalGradientImageButton.module.css";

const NormalGradientImageButton:React.FC<{
    text:string,
    buttonColor:string,
    imageLocation:string,
    cssClasses?:string[]}> = props => {

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
        <div className={`${classes.container} ${props.cssClasses}`}>
            <button className={`${classes.btn} ${colorClass}`}>
                <img className={classes.image} src={props.imageLocation} alt={props.text}/>
                <p className={classes.text}>{props.text}</p>
            </button>
            <button className={`${classes.background} ${colorClass} ${classes.blur}`}>
                <img className={classes.image} src={props.imageLocation} alt={props.text}/>
                <p className={classes.text}>{props.text}</p>
            </button>
        </div>
    );
}
export default NormalGradientImageButton;