import React, {useRef} from "react";

import classes from './FormTrack.module.css'

import GrayCard from "../../UI/GrayCard/GrayCard";
import GradientInput from "../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {location} from "../../pages/CommonPages/TrackPage/TrackPage";

const FormTrack:React.FC<{setLocation:React.Dispatch<React.SetStateAction<location>>}> = (props) => {
    const busIdInputRef = useRef(document.createElement('input'));
    const onTrackSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const enteredBusId = busIdInputRef.current.value;
        fetch('http://localhost:8080/user/track', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                busId:enteredBusId
            })
        })
            .then(result => {
                return result.json();
            })
            .then(data => {
                props.setLocation(data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return(
        <div className={classes.trackFormContainer}>
            <GrayCard cssClasses={[classes.card]}>
                <h1 className={classes.heading}>Bus Tracker</h1>
                <form className={classes.trackForm} onSubmit={onTrackSubmitHandler}>
                    <GradientInput type={'text'} color={'green'} placeHolder={'Enter Bus ID to Track'}
                                   label={'Bus ID'} ref={busIdInputRef}/>
                    <NormalGradientButton text={'Track'} buttonColor={'green'}
                                          cssClassesOnContainer={[classes.trackBtn]}/>
                </form>
            </GrayCard>
        </div>
    );
}
export default FormTrack;