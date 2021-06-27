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
    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const stopNameValue = stopNameRef.current.value,
            stopIdValue = stopIdRef.current.value;
        if(stopNameValue.length > 0){
            //fetch Request with stopName
            dispatch(stopsListAction.addStopResults({
                results:[
                    {
                        stopName:'stop 1',
                        stopId:'1'
                    },
                    {
                        stopName:'stop 2',
                        stopId:'2'
                    },
                    {
                        stopName:'stop 3',
                        stopId:'3'
                    },
                ]
            }));
            return;
        }
        if(stopIdValue.length > 0) {
            //fetch request with stop id
            dispatch(stopsListAction.addStopResults({
                results:[
                    {
                        stopName:'stop 1',
                        stopId:'1'
                    },
                    {
                        stopName:'stop 2',
                        stopId:'2'
                    },
                    {
                        stopName:'stop 3',
                        stopId:'3'
                    },
                ]
            }));
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