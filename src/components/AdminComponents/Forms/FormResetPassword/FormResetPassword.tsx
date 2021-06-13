import React from "react";
import classes from './FormResetPassword.module.css'
import close from '../../../../images/close.svg'
import GrayCard from "../../../../UI/GrayCard/GrayCard";
import NormalGradientImageButton
    from "../../../../UI/Buttons/NormalButtons/NormalGradientImageButton/NormalGradientImageButton";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

const FormResetPassword:React.FC<{email:string,onReset:() => void,onClose:() => void}> = (props) => {
    return (
        <GrayCard cssClasses={[classes.overAllContainer]}>
            <div className={classes.titleContainer}>
                <h1>Reset password</h1>
                <NormalGradientImageButton buttonColor={''} imageLocation={close} onClick={props.onClose}/>
            </div>
            <div className={classes.forContainer}>
                <p>Reset Password for: </p>
                <p>{props.email}</p>
            </div>
            <form className={classes.inputsContainer}>
                <GradientInput type={'password'} color={'red'}
                               placeHolder={'Enter Password'} label={'Password'}/>
                <GradientInput type={'password'} color={'red'}
                               placeHolder={'Enter Confirm Password'} label={'Confirm Password'}/>
                <NormalGradientButton text={'Reset'} buttonColor={'violet'} onClick={props.onReset}
                                      cssClassesOnContainer={[classes.resetButton]}/>
            </form>
        </GrayCard>
    );
}
export default FormResetPassword