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
    let convertedButtonClasses = ' ';
    props.cssClassesOnButton?.forEach((className) =>{
        convertedButtonClasses += className+' '
    });
    let topButton;
    switch (props.type) {
        case 'submit':
            topButton = <button type={"submit"} disabled={props.disabled} onClick={props.onClick}
                                className={`${classes.btn} ${colorClass} ${convertedButtonClasses}`}>{props.text}</button>
            break;
        case 'reset':
            topButton =<button type={"reset"} disabled={props.disabled} onClick={props.onClick}
                               className={`${classes.btn} ${colorClass} ${convertedButtonClasses}`}>{props.text}</button>
            break;
        case 'button':
            topButton =<button type={"button"} disabled={props.disabled} onClick={props.onClick}
                               className={`${classes.btn} ${colorClass} ${convertedButtonClasses}`}>{props.text}</button>
            break;
        default:
            topButton =<button disabled={props.disabled} onClick={props.onClick}
                               className={`${classes.btn} ${colorClass} ${convertedButtonClasses}`}>{props.text}</button>
            break
    }
    let convertedContainerClasses = ' '
    props.cssClassesOnContainer?.forEach((className) =>{
        convertedContainerClasses += className+' '
    });
    return (
        <div className={`${classes.container} ${convertedContainerClasses}`} >
            {topButton}
            <button className={`${classes.background} ${colorClass} ${classes.blur}`} onClick={props.onClick}
                    disabled={props.disabled} >{props.text}</button>
        </div>
    );
}
export default NormalGradientButton