import React from "react";
import classes from './NormalGradientButton.module.css'

const NormalGradientButton:React.FC<{text:string,buttonColor:string,cssClasses?:string[]}> = props => {
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
            <button className={`${classes.btn} ${colorClass}`}>{props.text}</button>
            <button className={`${classes.background} ${colorClass} ${classes.blur}`}>{props.text}</button>
        </div>
    );
}
export default NormalGradientButton