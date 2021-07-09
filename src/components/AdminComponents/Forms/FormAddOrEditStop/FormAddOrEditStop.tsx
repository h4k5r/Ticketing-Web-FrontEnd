import React, {useRef} from "react";
import classes from './FormAddOrEditStop.module.css';
import close from '../../../../images/close.svg'
import GrayCard from "../../../../UI/GrayCard/GrayCard";
import NormalGradientImageButton
    from "../../../../UI/Buttons/NormalButtons/NormalGradientImageButton/NormalGradientImageButton";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import fetch from "node-fetch";

export type stop = {
    name: string,
    id: string
}
const FormAddOrEditBus: React.FC<{
    mode: 'Add' | 'Edit',
    _id?: string,
    stopName?: string,
    onCloseHandler: () => void,
    stopNameSetter?: React.Dispatch<React.SetStateAction<string>>
}> = props => {
    const stopNameInputRef = useRef(document.createElement('input'));
    const saveStop = (link: string, method: 'POST' | 'PUT', body: {}) => {
        fetch(link, {
            method: method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('authToken')
            },
            body: JSON.stringify(body)
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                console.log(data)
                props.onCloseHandler();
            })
    }
    const onSaveHandler = () => {
        if (props.mode === 'Add') {
            //send Post request and create new fields in DB
            const enteredStopName = stopNameInputRef.current.value;
            saveStop('http://localhost:8080/admin/addNewStop','POST',{
                stopName:enteredStopName
            })
        }
        if (props.mode === 'Edit') {
            //send Put request and replace the existing Bus
            const enteredStopName = stopNameInputRef.current.value;
            saveStop('http://localhost:8080/admin/editStop','PUT',{
                _id:props._id,
                stopName:enteredStopName
            })
        }
    }
    const busNumberChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.stopNameSetter) {
            props.stopNameSetter(event.target.value);
        }
    }
    return (
        <GrayCard cssClasses={[classes.overAllContainer]}>
            <div className={classes.titleContainer}>
                <h1>{props.mode} Stop</h1>
                <NormalGradientImageButton buttonColor={''} imageLocation={close} onClick={props.onCloseHandler}/>
            </div>
            <GradientInput type={'text'} value={props.stopName} color={'red'} placeHolder={'Enter Stop Name'}
                           label={'Stop Name'} cssClasses={[classes.overAllInput]}
                           onChangeHandler={busNumberChangeHandler} ref={stopNameInputRef}/>

            <NormalGradientButton text={'Save Stop'} buttonColor={'green'} onClick={onSaveHandler}
                                  cssClassesOnContainer={[classes.overAllButton]}/>
        </GrayCard>
    )
}
export default FormAddOrEditBus;