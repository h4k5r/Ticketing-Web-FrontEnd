import React, {useRef} from "react";
import classes from './FormSearchStaff.module.css'
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {useDispatch} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {staffListAction} from "../../../../store/staff-list-slice";
const FormSearchStaff:React.FC = () => {
    const dispatch:Dispatch = useDispatch();
    const staffEmailRef = useRef<HTMLInputElement>(document.createElement('input'));
    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const staffEmail = staffEmailRef.current.value;
        if (staffEmail.trim().length > 0) {
            //send fetch request to get staff details
            dispatch(staffListAction.setResult(
                {
                    result:{
                        mail:'test@test.com',
                        id:'igudsfiug'
                    }
                })
            )
        }
    }
    const onAddHandler = () => {
        dispatch(staffListAction.openAdd());
    }
    return (
        <div className={classes.overAllContainer}>
            <h1 className={classes.mainText}>Search Staff</h1>
            <form className={classes.formContainer} onSubmit={onSubmitHandler}>
                <GradientInput type={'email'} color={'red'} placeHolder={'Enter Email'} label={'Email'}
                               cssClasses={[classes.grow]} ref={staffEmailRef}/>
                <p className={classes.middleSpace}>0_0</p>
                <NormalGradientButton text={'search'} buttonColor={'red'}
                                      cssClassesOnContainer={[classes.grow]}/>
            </form>
            <NormalGradientButton text={'Add Staff'} buttonColor={'green'} onClick={onAddHandler}/>
        </div>
    )
}
export default FormSearchStaff;