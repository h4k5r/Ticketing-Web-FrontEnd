import React from "react";
import classes from './FormProfile.module.css'
import GrayCard from "../../UI/GrayCard/GrayCard";
import GradientInput from "../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

const FormProfile:React.FC<{}> =  () => {
    return(
        <div className={classes.container}>
            <GrayCard cssClasses={[classes.subContainer]}>
                <h1 className={classes.mainText}>Profile Settings</h1>
                <form className={classes.formContainer}>
                    <GradientInput type={'text'} color={'violet'} placeHolder={'Enter Name'} label={'Name'} cssClasses={[classes.nameInput]}/>
                    <NormalGradientButton text={'Update'} buttonColor={'violet'} cssClasses={[classes.updateButton]}/>
                </form>
            </GrayCard>
        </div>


    );
}
export default FormProfile;