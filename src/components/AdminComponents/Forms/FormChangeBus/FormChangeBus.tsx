import React from "react";
import classes from './FormChangeBus.module.css';
import close from '../../../../images/close.svg'
import GrayCard from "../../../../UI/GrayCard/GrayCard";
import NormalGradientImageButton
    from "../../../../UI/Buttons/NormalButtons/NormalGradientImageButton/NormalGradientImageButton";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

export type stop = {
    name:string,
    id:string
}
const FormAddOrEditBus:React.FC<{
    busNumber?:string,
    onCloseHandler:() => void,
    busNumberSetter?: React.Dispatch<React.SetStateAction<string>>}> = props => {
    const onSaveHandler = () => {

    }
    const onRemoveBusHandler = () => {

    }
    const busNumberChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(props.busNumberSetter) {
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
                           label={'Bus Number'} cssClasses={[classes.overAllInput]}
                           onChangeHandler={busNumberChangeHandler}/>
            <NormalGradientButton text={'Remove Bus'} buttonColor={'pink'} onClick={onRemoveBusHandler}
                                  cssClassesOnContainer={[classes.overAllButton]}/>
            <NormalGradientButton text={'Save Staff'} buttonColor={'green'} onClick={onSaveHandler}
                                  cssClassesOnContainer={[classes.overAllButton]}/>
        </GrayCard>
    )
}
export default FormAddOrEditBus;