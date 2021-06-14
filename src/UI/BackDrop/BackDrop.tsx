import React, {useEffect, useState} from "react";
import classes from './BackDrop.module.css'

const BackDrop:React.FC<{visibility:'show' | 'hide',onClick?:() => void}> = props => {
    const [backdropClasses, setBackDropClasses] = useState('');
    useEffect(() => {
        if (props.visibility === "show") {
            setBackDropClasses(`${classes.modal} ${classes.show}`)
        }
        if (props.visibility === 'hide') {
            setBackDropClasses(`${classes.modal} ${classes.hide}`);
        }
    }, [props.visibility])
    const backDropOnClick = () => {
        setBackDropClasses(`${classes.modal} ${classes.hide}`)
        if(props.onClick) {
            props.onClick();
        }
    }
    return (
        <div className={backdropClasses}>
            {props.children}
            <div className={classes.backdrop} onClick={backDropOnClick}/>
        </div>
    )
}
export default BackDrop;