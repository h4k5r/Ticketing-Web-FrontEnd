import React from "react";
import classes from './FormSearchStops.module.css'
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
const FormSearchStops:React.FC = () => {
    return (
        <div className={classes.overAllContainer}>
            <h1 className={classes.mainText}>Search Stops</h1>
            <form className={classes.formContainer}>
                <div className={classes.formSubContainer}>
                    <GradientInput type={'text'} color={'red'} placeHolder={'Enter Stop Name'} label={'Stop Name'}
                                   cssClasses={[classes.inputs]}/>
                    <p className={classes.orText}>OR</p>
                    <GradientInput type={'text'} color={'red'} placeHolder={'Enter Stop ID'} label={'Stop ID'}
                                   cssClasses={[classes.inputs]}/>
                </div>
                <NormalGradientButton text={'Search'} buttonColor={'red'} cssClassesOnContainer={[classes.searchBtn]}/>
            </form>
            <NormalGradientButton text={'Add New Stop'} buttonColor={'green'}/>
        </div>
    )
}
export default FormSearchStops;