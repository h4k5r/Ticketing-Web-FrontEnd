import React, {useRef} from "react";
import classes from './FormSearchStaff.module.css'
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {useDispatch} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {staffListAction} from "../../../../store/staff-list-slice";
import fetch from "node-fetch";
const FormSearchStaff:React.FC = () => {
    const dispatch:Dispatch = useDispatch();
    const staffEmailRef = useRef<HTMLInputElement>(document.createElement('input'));
    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const enteredStaffEmail = staffEmailRef.current.value;
        if (enteredStaffEmail.trim().length > 0) {
            //send fetch request to get staff details
            fetch("http://localhost:8080/admin/searchStaffs",{
                method:"POST",
                headers:{
                    'Content-type':'application/json',
                    'Authorization': 'Bearer '+localStorage.getItem('authToken')
                },
                body:JSON.stringify({
                    staffEmail: enteredStaffEmail
                })
            })
                .then(result => {
                    if(result.status === 404) {
                        return Promise.reject('No Staff Found')
                    }
                    return result.json();
                })
                .then(data => {
                    console.log(data)
                    if(data.error) {
                        return Promise.reject(data.errorMessage);
                    }
                    dispatch(staffListAction.setResult(
                        {
                            result:{
                                mail:data.staffEmail,
                                id:data._id
                            }
                        })
                    );
                })
                .catch(err => {
                    console.log(err)
                })

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