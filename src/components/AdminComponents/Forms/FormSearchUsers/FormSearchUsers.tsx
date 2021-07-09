import React, {FormEvent, useRef} from "react";
import classes from './FormSearchUsers.module.css'
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {Dispatch} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {userListAction} from "../../../../store/users-list-slice";
import fetch from "node-fetch";

const FormSearchUsers:React.FC = () => {
    const dispatch:Dispatch = useDispatch();
    const emailRef = useRef<HTMLInputElement>(document.createElement('input'));
    const phoneRef = useRef<HTMLInputElement>(document.createElement('input'));
    const getUser = (body:{userEmail?:string,userPhone?:string}) => {
        return fetch('http://localhost:8080/admin/searchUser',{
            method:'POST',
            headers: {
                'Content-type':'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            },
            body:JSON.stringify(body),
        })
            .then(result => {
                return result.json();
            })
    }
    const onSubmitHandler = (event:FormEvent) => {
        event.preventDefault();
        const enteredEmail = emailRef.current.value,
            enteredPhone = phoneRef.current.value;
        if(enteredEmail.trim().length > 0) {
            //send Request to fetch user id with email
            getUser({
                userEmail:enteredEmail
            }).then(data => {
                dispatch(userListAction.setResultWithEmail({
                    userId:data.userId,
                    email:data.userEmail
                }));
            })

            return
        }
        if(enteredPhone.trim().length > 0) {
            //send Request to fetch user id with phone
            getUser({
                userPhone:enteredPhone
            }).then(data => {
                dispatch(userListAction.setResultWithPhone({
                    userId:data.userId,
                    phone:data.phone
                }));
            })

            return;
        }
        return;
    }
    const onAddUserHandler = () => {
        dispatch(userListAction.openAdd())
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
            <NormalGradientButton text={'Add New User'} buttonColor={'green'} onClick={onAddUserHandler}/>
        </div>
    )
}
export default FormSearchUsers;