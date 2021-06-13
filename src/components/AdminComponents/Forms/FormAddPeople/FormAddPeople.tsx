import React from "react";
import classes from './FormAddPeople.module.css'
import close from '../../../../images/close.svg';
import GrayCard from "../../../../UI/GrayCard/GrayCard";
import NormalGradientImageButton
    from "../../../../UI/Buttons/NormalButtons/NormalGradientImageButton/NormalGradientImageButton";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

const FormAddPeople:React.FC<{type:'User' | 'Staff',onCloseHandler:() => void}> = props => {
    return(
        <GrayCard cssClasses={[classes.overAllContainer]}>
            <div className={classes.titleContainer}>
                <h1>Add New {props.type}</h1>
                <NormalGradientImageButton buttonColor={''} imageLocation={close} onClick={props.onCloseHandler}/>
            </div>
            <form className={classes.formContainer}>
                <GradientInput type={'email'} color={'red'} placeHolder={'Enter Email Address'} label={'Email'}/>
                <GradientInput type={'password'} color={'red'} placeHolder={'Enter Password'} label={'Password'}/>
                <GradientInput type={'password'} color={'red'} placeHolder={'Enter Confirm  Password'} label={'Confirm Password'}/>
                <NormalGradientButton text={'Add User'} buttonColor={'green'} cssClassesOnContainer={[classes.addBtn]}/>
            </form>
        </GrayCard>
    )
}
export default FormAddPeople;