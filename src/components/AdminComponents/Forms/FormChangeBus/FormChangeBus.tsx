import React, {useRef} from "react";
import classes from './FormChangeBus.module.css';
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
    staffId: string,
    busNumber?: string,
    onCloseHandler: () => void,
    busNumberSetter?: React.Dispatch<React.SetStateAction<string>>
}> = props => {
    const busNumberInputRef = useRef(document.createElement('input'));
    const saveData = (body: {
        staffId: string,
        mode: 'change' | 'remove',
        busNumber?: string
    }) => {
        return fetch('http://localhost:8080/admin/changeBus', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(result => {
                return result.json()
            })
    }
    const onSaveHandler = () => {
        const enteredBusNumber = busNumberInputRef.current.value;
        saveData({staffId: props.staffId, mode: 'change', busNumber: enteredBusNumber})
            .then(data => {
                console.log(data)
                props.onCloseHandler();
            })
            .catch(err => {
                console.log(err)
            })
    }
    const onRemoveBusHandler = () => {
        saveData({staffId: props.staffId, mode: 'remove'})
            .then(data => {
                console.log(data)
                props.onCloseHandler();
            })
            .catch(err => {
                console.log(err)
            })
    }
    const busNumberChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.busNumberSetter) {
            props.busNumberSetter(event.target.value);
        }
    }
    return (
        <GrayCard cssClasses={[classes.overAllContainer]}>
            <div className={classes.titleContainer}>
                <h1>Change Bus</h1>
                <NormalGradientImageButton buttonColor={''} imageLocation={close} onClick={props.onCloseHandler}/>
            </div>
            <GradientInput type={'text'} value={props.busNumber} color={'red'} placeHolder={'Enter Bus Number'}
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