import React, {FormEvent} from "react";
import classes from './FormSearchBuses.module.css';
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

const FormSearchBuses:React.FC = () => {
    const onSubmitHandler = (event:FormEvent) => {
        event.preventDefault();
    }
    return (
        <div className={classes.overAllContainer}>
            <h1 className={classes.mainText}>Search Buses</h1>
            <form className={classes.formContainer} onSubmit={onSubmitHandler}>
                <div className={classes.formSubContainer}>
                    <GradientInput type={'text'} color={'red'} placeHolder={'Enter Source Location'}
                                   label={'Source Location'} cssClasses={[classes.grow]}/>
                    <GradientInput type={'text'} color={'red'} placeHolder={'Enter Destination Location'}
                                   label={'Destination Location'} cssClasses={[classes.grow]}/>
                </div>
                <p className={classes.orText}>OR</p>
                <div className={classes.formSubContainer}>
                    <GradientInput type={'text'} color={'red'} placeHolder={'Enter Bus Number'}
                                   label={'Bus Number'} cssClasses={[classes.grow]}/>

                    <NormalGradientButton text={'Search'} buttonColor={'red'} type={'submit'}
                                          cssClassesOnContainer={[classes.grow,classes.searchBtn]}/>
                </div>
            </form>
            <NormalGradientButton text={'Add New Bus'} buttonColor={'green'}/>
        </div>
    )
}
export default FormSearchBuses;