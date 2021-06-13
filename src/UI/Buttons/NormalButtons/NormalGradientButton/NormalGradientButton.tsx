import React from "react";
import classes from './NormalGradientButton.module.css'

const NormalGradientButton:React.FC<{
    text:string,buttonColor:string,
    cssClassesOnContainer?:string[],
    cssClassesOnButton?:string[],
    type?:string,
    disabled?:boolean,
    onClick?: () => void } > = props => {
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
        case 'pink':
            colorClass = classes.pink;
            break;
        default:
            colorClass = "";
            break;
    }
    let topButton;
    switch (props.type) {
        case 'submit':

            topButton = <button type={"submit"} disabled={props.disabled}
                                className={`${classes.btn} ${colorClass} ${props.cssClassesOnButton}`}>{props.text}</button>
            break;
        case 'reset':
            topButton =<button type={"reset"} disabled={props.disabled}
                               className={`${classes.btn} ${colorClass} ${props.cssClassesOnButton}`}>{props.text}</button>
            break;
        case 'button':
            topButton =<button type={"button"} disabled={props.disabled}
                               className={`${classes.btn} ${colorClass} ${props.cssClassesOnButton}`}>{props.text}</button>
            break;
        default:
            topButton =<button disabled={props.disabled}
                               className={`${classes.btn} ${colorClass} ${props.cssClassesOnButton}`}>{props.text}</button>
            break
    }
    return (
        <div className={`${classes.container} ${props.cssClassesOnContainer}`}>
            {topButton}
            <button className={`${classes.background} ${colorClass} ${classes.blur}`}
                    disabled={props.disabled} onClick={props.onClick}>{props.text}</button>
        </div>
    );
}
export default NormalGradientButton