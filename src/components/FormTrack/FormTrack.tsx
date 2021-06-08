import React from "react";

import classes from './FormTrack.module.css'

import GrayCard from "../../UI/GrayCard/GrayCard";
import TextInput from "../../UI/TextInput/TextInput";
import NormalGradientButton from "../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

const FormTrack:React.FC<{}> = () => {
    return(
        <div className={classes.trackFormContainer}>
            <GrayCard cssClasses={[classes.card]}>
                <h1 className={classes.heading}>Bus Tracker</h1>
                <form className={classes.trackForm}>
                    <TextInput type={'text'} color={'green'} placeHolder={'Enter Bus ID to Track'} label={'Bus ID'}/>
                    <NormalGradientButton text={'Track'} buttonColor={'green'} cssClasses={[classes.trackBtn]}/>
                </form>
            </GrayCard>
        </div>
    );
}
export default FormTrack