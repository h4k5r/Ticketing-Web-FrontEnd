import React, {useEffect, useRef, useState} from "react";
import classes from './FormChangeBus.module.css';
import close from '../../../../images/close.svg'
import GrayCard from "../../../../UI/GrayCard/GrayCard";
import NormalGradientImageButton
    from "../../../../UI/Buttons/NormalButtons/NormalGradientImageButton/NormalGradientImageButton";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import fetch from "node-fetch";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";

export type stop = {
    name: string,
    id: string
}
const FormAddOrEditBus: React.FC<{
    onCloseHandler: () => void
}> = props => {
    const [busNumber, setBusNumber] = useState<string>();
    const selectedStaffId = useSelector((state: RootState) => state.staffList.selectedStaffId);
    const busNumberInputRef = useRef(document.createElement('input'));
    useEffect(() => {
        //fetch bus Number from server
        if (selectedStaffId.length > 0) {
            fetch(`http://localhost:8080/admin/getAssignedBus/${selectedStaffId}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
                }
            })
                .then(result => {
                    return result.json();
                })
                .then(data => {
                    setBusNumber(data.staff.assignedBus)
                })
        }
    }, [selectedStaffId])
    const saveData = (body: {
        staffId: string,
        mode: 'change' | 'remove',
        busNumber?: string
    }) => {
        return fetch('http://localhost:8080/admin/changeBus', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('authToken')
            },
            body: JSON.stringify(body)
        })
            .then(result => {
                return result.json()
            })
    }
    const onSaveHandler = () => {
        const enteredBusNumber = busNumberInputRef.current.value;
        saveData({staffId: selectedStaffId, mode: 'change', busNumber: enteredBusNumber})
            .then(data => {
                console.log(data)
                props.onCloseHandler();
            })
            .catch(err => {
                console.log(err)
            })
    }
    const onRemoveBusHandler = () => {
        saveData({staffId: selectedStaffId, mode: 'remove'})
            .then(data => {
                console.log(data)
                props.onCloseHandler();
            })
            .catch(err => {
                console.log(err)
            })
    }
    const busNumberChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBusNumber(event.target.value);
    }
    return (
        <GrayCard cssClasses={[classes.overAllContainer]}>
            <div className={classes.titleContainer}>
                <h1>Change Bus</h1>
                <NormalGradientImageButton buttonColor={''} imageLocation={close} onClick={props.onCloseHandler}/>
            </div>
            <GradientInput type={'text'} value={busNumber} color={'red'} placeHolder={'Enter Bus Number'}
                           label={'Bus Number'} cssClasses={[classes.overAllInput]} ref={busNumberInputRef}
                           onChangeHandler={busNumberChangeHandler}/>
            <NormalGradientButton text={'Remove Bus'} buttonColor={'pink'} onClick={onRemoveBusHandler}
                                  cssClassesOnContainer={[classes.overAllButton]}/>
            <NormalGradientButton text={'Save Staff'} buttonColor={'green'} onClick={onSaveHandler}
                                  cssClassesOnContainer={[classes.overAllButton]}/>
        </GrayCard>
    )
}
export default FormAddOrEditBus;