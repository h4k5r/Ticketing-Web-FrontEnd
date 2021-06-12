import React from "react";
import classes from './FormSearchStaff.module.css'
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
const FormSearchStaff:React.FC = () => {
    return (
        <div className={classes.overAllContainer}>
            <h1 className={classes.mainText}>Search Staff</h1>
            <form className={classes.formContainer}>
                <GradientInput type={'text'} color={'red'} placeHolder={'Enter Email'} label={'Email'}
                               cssClasses={[classes.grow]}/>
                <p className={classes.middleSpace}>0_0</p>
                <NormalGradientButton text={'search'} buttonColor={'red'}
                                      cssClassesOnContainer={[classes.grow]}/>
            </form>
            <NormalGradientButton text={'Add Staff'} buttonColor={'green'}/>
        </div>
    )
}
export default FormSearchStaff;