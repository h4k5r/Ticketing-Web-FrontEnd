import React, {useState} from "react";
import classes from './TextInput.module.css'
const TextInput:React.FC<{type:string,color:string,placeHolder:string,label:string,cssClasses?: string[] | undefined}> = props => {
    const [InputClasses,setInputClasses] = useState(`${classes.background}`);

    let colorClass:string;
    switch (props.color){
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
    const onFocusHandler: () => void = () => {
        setInputClasses(`${classes.background} ${colorClass}`)
    }
    const onBlurHandler: () => void = () => {
        setInputClasses(`${classes.background}`)
    }
    return (
        <div className={`${classes.inputContainer} ${props.cssClasses}`}>
            <label className={classes.labelText}>{props.label}</label>
            <div className={classes.inputSubContainer}>
                <input onFocus={onFocusHandler} onBlur={onBlurHandler} className={classes.normal} type={props.type}
                       placeholder={props.placeHolder}/>
                <div className={InputClasses}/>
            </div>

        </div>
    );
}
export default TextInput