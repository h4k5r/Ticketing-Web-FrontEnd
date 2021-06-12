import React from "react";

import classes from './FormTrack.module.css'

import GrayCard from "../../UI/GrayCard/GrayCard";
import GradientInput from "../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

const FormTrack:React.FC<{}> = () => {
    return(
        <div className={classes.trackFormContainer}>
            <GrayCard cssClasses={[classes.card]}>
                <h1 className={classes.heading}>Bus Tracker</h1>
                <form className={classes.trackForm}>
                    <GradientInput type={'text'} color={'green'} placeHolder={'Enter Bus ID to Track'} label={'Bus ID'}/>
                    <NormalGradientButton text={'Track'} buttonColor={'green'} cssClassesOnContainer={[classes.trackBtn]}/>
                </form>
            </GrayCard>
        </div>
    );
}
export default FormTrack