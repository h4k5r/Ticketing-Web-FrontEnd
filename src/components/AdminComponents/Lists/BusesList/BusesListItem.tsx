import React from "react";
import classes from '../ListStyles/ItemStyle.module.css'
import blackBus from '../../../../images/la_bus-1.svg'
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {useDispatch} from "react-redux";
import {busesListAction} from "../../../../store/buses-list-slice";
import {Dispatch} from "@reduxjs/toolkit";
const  BusesListItem:React.FC<{
    busNumber:string,
    busId:string,
    assignedAccount:string,
    }> = props => {
    const dispatch:Dispatch = useDispatch();
    const onEditHandler = () => {
        dispatch(busesListAction.openEdit({busId:props.busId}));
    }
    const onDeleteHandler = () => {
        dispatch(busesListAction.openDelete({busId:props.busId}));
    }
    return(
        <div className={classes.container}>
            <img className={classes.image} src={blackBus} alt={'bus-icon'}/>
            <div className={classes.detailsContainer}>
                <div className={classes.detailsSubContainer}>
                    <p className={classes.text}>Bus Number:</p>
                    <p className={`${classes.text} ${classes.propText}`}>{props.busNumber}</p>
                    &nbsp;&nbsp;
                    <p className={classes.text}>Assigned Account :</p>
                    <p className={`${classes.text} ${classes.propText}`}>{props.assignedAccount}</p>
                </div>
                <div className={classes.detailsSubContainer}>
                    <p className={classes.text}>Bus ID:</p>
                    <p className={`${classes.text} ${classes.propText}`}>{props.busId}</p>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                <NormalGradientButton text={'Edit Bus'} buttonColor={'violet'} onClick={onEditHandler}/>
                <NormalGradientButton text={'Delete Bus'} buttonColor={'pink'} onClick={onDeleteHandler}/>
            </div>
        </div>
    )
}
export default BusesListItem;