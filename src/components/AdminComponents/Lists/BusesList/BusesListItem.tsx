import React from "react";
import classes from '../ListStyles/ItemStyle.module.css'
import blackBus from '../../../../images/la_bus-1.svg'
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
const  BusesListItem:React.FC<{
    busNumber:string,
    busId:string,
    assignedAccount:string,
    onEditHandler:() => void,
    onDeleteHandler: () => void}> = props => {
    return(
        <div className={classes.container}>
            <img className={classes.image} src={blackBus} alt={'bus-icon'}/>
            <div className={classes.detailsContainer}>
                <div className={classes.detailsSubContainer}>
                    <p className={classes.text}>Bus Number:</p>
                    <p className={`${classes.text} ${classes.propText}`}>{props.busNumber}</p>
                </div>
                <div className={classes.detailsSubContainer}>
                    <p className={classes.text}>Bus ID:</p>
                    <p className={`${classes.text} ${classes.propText}`}>{props.busId}</p>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                <NormalGradientButton text={'Delete Bus'} buttonColor={'green'} onClick={props.onEditHandler}/>
                <NormalGradientButton text={'Edit Bus'} buttonColor={'pink'} onClick={props.onDeleteHandler}/>
            </div>
        </div>
    )
}
export default BusesListItem;