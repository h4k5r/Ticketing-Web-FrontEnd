import React from "react";
import classes from '../ListStyles/ItemStyle.module.css'
import blackBus from '../../../../images/la_bus-1.svg'
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {useDispatch} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {stopsListAction} from "../../../../store/stops-list-slice";

const StopsListItem:React.FC<{
    stopName:string,
    stopId:string}> = props => {
    const dispatch:Dispatch = useDispatch();
    const onEditHandler =  () => {
        dispatch(stopsListAction.openEdit({stopId:props.stopId}));
    }
    const onDeleteHandler = () => {
        dispatch(stopsListAction.openDelete({stopId:props.stopId}));
    }

    return (
        <div className={classes.container}>
            <img className={classes.image} src={blackBus} alt={'bus-icon'}/>
            <div className={classes.detailsContainer}>
                <div className={classes.detailsSubContainer}>
                    <p className={classes.text}>Stop Name:</p>
                    <p className={`${classes.text} ${classes.propText}`}>{props.stopName}</p>
                </div>
                <div className={classes.detailsSubContainer}>
                    <p className={classes.text}>Stop ID:</p>
                    <p className={`${classes.text} ${classes.propText}`}>{props.stopId}</p>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                <NormalGradientButton text={'Edit Stop'} buttonColor={'violet'} onClick={onEditHandler}/>
                <NormalGradientButton text={'Delete Stop'} buttonColor={'pink'} onClick={onDeleteHandler}/>
            </div>
        </div>
    )
}
export default StopsListItem;