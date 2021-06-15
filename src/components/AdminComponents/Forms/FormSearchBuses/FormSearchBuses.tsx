import React, {FormEvent, useRef} from "react";
import classes from './FormSearchBuses.module.css';
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {useDispatch} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {busesListAction} from "../../../../store/buses-list-slice";

const FormSearchBuses:React.FC = () => {
    const dispatch:Dispatch = useDispatch();
    const sourceRef = useRef<HTMLInputElement>(document.createElement('input'));
    const destinationRef = useRef<HTMLInputElement>(document.createElement('input'));
    const busNumberRef = useRef<HTMLInputElement>(document.createElement('input'));
    const onSubmitHandler = (event:FormEvent) => {
        event.preventDefault();
        const sourceVal = sourceRef.current.value,
            destinationVal = destinationRef.current.value,
            busNumberVal=busNumberRef.current.value;
        console.log(sourceVal,destinationVal)
        if(sourceVal.length > 0 && destinationVal.length > 0) {
            //send fetch request with source and destination if results found return
            console.log('form submitted');
            dispatch(busesListAction.addBusResults({
                results:[
                    {
                        busNumber: 'TN 00 69 0000',
                        busId:'1',
                        assignedAccount:'test@test.com'
                    },
                    {
                        busNumber: 'TN 00 69 0000',
                        busId:'2',
                        assignedAccount:'test@test.com'
                    },
                    {
                        busNumber: 'TN 00 69 0000',
                        busId:'3',
                        assignedAccount:'test@test.com'
                    },
                ]
            }));
            return;
        }
        if(busNumberVal.length > 0) {
            //send fetch request with bus number if result found return
            dispatch(busesListAction.addBusResults({
                results:[
                    {
                        busNumber: 'TN 00 69 0000',
                        busId:'1',
                        assignedAccount:'test@test.com'
                    },
                    {
                        busNumber: 'TN 00 69 0000',
                        busId:'2',
                        assignedAccount:'test@test.com'
                    },
                    {
                        busNumber: 'TN 00 69 0000',
                        busId:'3',
                        assignedAccount:'test@test.com'
                    },
                ]
            }));
            return;
        }
        return
    }
    const onAddBusHandler =  () => {
        dispatch(busesListAction.openAdd())
    }
    return (
        <div className={classes.overAllContainer}>
            <h1 className={classes.mainText}>Search Buses</h1>
            <form className={classes.formContainer} onSubmit={onSubmitHandler}>
                <div className={classes.formSubContainer}>
                    <GradientInput type={'text'} color={'red'} placeHolder={'Enter Source Location'}
                                   ref={sourceRef} label={'Source Location'} cssClasses={[classes.grow]}/>
                    <GradientInput type={'text'} color={'red'} placeHolder={'Enter Destination Location'}
                                   ref={destinationRef} label={'Destination Location'} cssClasses={[classes.grow]}/>
                </div>
                <p className={classes.orText}>OR</p>
                <div className={classes.formSubContainer}>
                    <GradientInput type={'text'} color={'red'} placeHolder={'Enter Bus Number'}
                                   ref={busNumberRef} label={'Bus Number'} cssClasses={[classes.grow]}/>

                    <NormalGradientButton text={'Search'} buttonColor={'red'} type={'submit'}
                                          cssClassesOnContainer={[classes.grow,classes.searchBtn]}/>
                </div>
            </form>
            <NormalGradientButton text={'Add New Bus'} buttonColor={'green'} onClick={onAddBusHandler}/>
        </div>
    )
}
export default FormSearchBuses;