import React, {FormEvent, useRef} from "react";
import classes from './FormSearchUsers.module.css'
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {Dispatch} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {userListAction} from "../../../../store/users-list-slice";

const FormSearchUsers:React.FC = () => {
    const dispatch:Dispatch = useDispatch();
    const emailRef = useRef<HTMLInputElement>(document.createElement('input'));
    const phoneRef = useRef<HTMLInputElement>(document.createElement('input'));
    const onSubmitHandler = (event:FormEvent) => {
        event.preventDefault();
        const email = emailRef.current.value,
            phone = phoneRef.current.value;
        console.log(email,phone)
        if(email.trim().length > 0) {
            //send Request to fetch user id with email
            dispatch(userListAction.setResultWithEmail({
                userId:'sdfsdfs',
                email:'test@test.com'
            }));
            return
        }
        if(phone.trim().length > 0) {
            //send Request to fetch user id with phone
            dispatch(userListAction.setResultWithPhone({
                userId:'sdfsdfs',
                phone:'123456780'
            }));
            return;
        }
        return;
    }
    return (
        <div className={classes.overAllContainer}>
            <h1 className={classes.mainText}>Search users</h1>
            <form className={classes.fomContainer} onSubmit={onSubmitHandler}>
                <GradientInput cssClasses={[classes.textInputs]} type={'text'} color={'red'}
                               placeHolder={'Enter Email'} label={'Email'} ref={emailRef}/>
                <p className={classes.orText}>OR</p>
                <GradientInput cssClasses={[classes.textInputs]} type={'text'} color={'red'}
                               placeHolder={'Enter Phone Number'} label={'Phone Number'} ref={phoneRef}/>
                <NormalGradientButton text={'Search'} buttonColor={'red'} type={'submit'}
                                      cssClassesOnButton={[classes.searchBtn]}
                                      cssClassesOnContainer={[classes.searchBtnContainer]}/>
            </form>
            <NormalGradientButton text={'Add New User'} buttonColor={'green'}/>
        </div>
    )
}
export default FormSearchUsers;