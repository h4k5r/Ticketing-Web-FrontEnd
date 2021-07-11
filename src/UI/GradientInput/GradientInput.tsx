import React, { useState} from "react";
import classes from './GradientInput.module.css'
const GradientInput = React.forwardRef<HTMLInputElement,{type:string,
    color:string,
    placeHolder:string,
    label:string,
    value?:any,
    cssClasses?: string[],
    onBlurHandler?:(e:React.FocusEvent<HTMLInputElement>) => void,
    onChangeHandler?: (e:React.ChangeEvent<HTMLInputElement>) => void }>((props,
                                                                          ref) => {
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
        const onBlurHandler: (e:React.FocusEvent<HTMLInputElement>) => void = (e) => {
            setInputClasses(`${classes.background}`);
            const x:React.FocusEventHandler<HTMLInputElement> | undefined = props.onBlurHandler;
            if (x) {
                x(e);
            }
        }
        return (
            <div className={`${classes.inputContainer} ${props.cssClasses}`}>
                <label className={classes.labelText}>{props.label}</label>
                <div className={classes.inputSubContainer}>
                    <input value={props.value} ref={ref} onFocus={onFocusHandler} onBlur={onBlurHandler} onChange={props.onChangeHandler}
                           className={classes.normal} type={props.type} placeholder={props.placeHolder}/>
                    <div className={InputClasses}/>
                </div>
            </div>
        );
});
export default GradientInput