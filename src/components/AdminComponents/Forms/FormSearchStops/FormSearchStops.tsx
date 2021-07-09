import React, {useRef} from "react";
import classes from './FormSearchStops.module.css'
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {useDispatch} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {stopsListAction} from "../../../../store/stops-list-slice";
const FormSearchStops:React.FC = () => {
    const dispatch:Dispatch = useDispatch();
    const stopNameRef = useRef<HTMLInputElement>(document.createElement('input'));
    const stopIdRef = useRef<HTMLInputElement>(document.createElement('input'));
    const fetchStop = (body:{}) => {
        fetch('http://localhost:8080/admin/searchStops', {
            method:'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('authToken')
            },
            body:JSON.stringify(body)
        })
            .then(result => {
                return result.json();
            })
            .then(data => {
                dispatch(stopsListAction.addStopResults({
                    results:data
                }));
            })
            .catch(err => {
                console.log(err);
            })
    }
    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const enteredStopName = stopNameRef.current.value,
            enteredStopId = stopIdRef.current.value;
        if(enteredStopName.length > 0){
            //fetch Request with stopName
            fetchStop({
                stopName:enteredStopName
            })
            return;
        }
        if(enteredStopId.length > 0) {
            //fetch request with stop id
            fetchStop({
                stopId:enteredStopId
            })
            return;
        }
    }
    const onAddStopHandler = () => {
        dispatch(stopsListAction.openAdd())
    }
    return (
        <div className={classes.overAllContainer}>
            <h1 className={classes.mainText}>Search Stops</h1>
            <form className={classes.formContainer} onSubmit={onSubmitHandler}>
                <div className={classes.formSubContainer}>
                    <GradientInput type={'text'} color={'red'} placeHolder={'Enter Stop Name'} label={'Stop Name'}
                                   cssClasses={[classes.inputs]} ref={stopNameRef}/>
                    <p className={classes.orText}>OR</p>
                    <GradientInput type={'text'} color={'red'} placeHolder={'Enter Stop ID'} label={'Stop ID'}
                                   cssClasses={[classes.inputs]} ref={stopIdRef}/>
                </div>
                <NormalGradientButton text={'Search'} buttonColor={'red'} cssClassesOnContainer={[classes.searchBtn]}/>
            </form>
            <NormalGradientButton text={'Add New Stop'} buttonColor={'green'} onClick={onAddStopHandler}/>
        </div>
    )
}
export default FormSearchStops;