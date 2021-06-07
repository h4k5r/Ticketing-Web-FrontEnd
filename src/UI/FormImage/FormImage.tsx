import React from "react";
import busGlow from "../../images/Bus logo.svg"
import classes from "./FormImage.module.css"

const FormImage:React.FC<{}> = () => {
    return (
        <div className={`${classes.common}`}>
            <img className={classes.busImage} src={busGlow} alt={'bus-illustration'}/>
            <div className={`${classes.headingContainer} }`}>
                <h1 className={classes.heading}>New Age Ticketing System for</h1>
                <h1 className={classes.heading}>Public Buses</h1>
            </div>
            <div className={`${classes.subTextContainer}`}>
                <p className={classes.subText}>Make your travel hassle free and elegant</p>
                <p className={classes.subText}>with our App.</p>
            </div>
        </div>
    );
}
export default FormImage