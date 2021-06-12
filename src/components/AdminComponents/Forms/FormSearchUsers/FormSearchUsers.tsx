import React, {FormEvent} from "react";
import classes from './FormSearchUsers.module.css'
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

const FormSearchUsers:React.FC = () => {
    const onSubmitHandler = (event:FormEvent) => {
        event.preventDefault()
    }
    return (
        <div className={classes.overAllContainer}>
            <h1 className={classes.mainText}>Search users</h1>
            <form className={classes.fomContainer} onSubmit={onSubmitHandler}>
                <GradientInput cssClasses={[classes.textInputs]} type={'text'} color={'red'} placeHolder={'Enter Email'} label={'Email'}/>
                <p className={classes.orText}>OR</p>
                <GradientInput cssClasses={[classes.textInputs]} type={'text'} color={'red'} placeHolder={'Enter Phone Number'} label={'Phone Number'}/>
                <NormalGradientButton text={'Search'} buttonColor={'red'} type={'submit'}
                                      cssClassesOnButton={[classes.searchBtn]} cssClassesOnContainer={[classes.searchBtnContainer]}/>
            </form>
            <NormalGradientButton text={'Add New User'} buttonColor={'green'}/>
        </div>
    )
}
export default FormSearchUsers;