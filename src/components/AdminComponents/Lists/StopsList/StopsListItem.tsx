import React from "react";
import classes from '../ListStyles/ItemStyle.module.css'
import blackBus from '../../../../images/la_bus-1.svg'
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

const StopsListItem:React.FC<{
    stopName:string,
    stopId:string,
    onEditHandler:() => void,
    onDeleteHandler: () => void}> = props => {
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
                <NormalGradientButton text={'Edit Stop'} buttonColor={'violet'} onClick={props.onEditHandler}/>
                <NormalGradientButton text={'Delete Stop'} buttonColor={'pink'} onClick={props.onDeleteHandler}/>
            </div>
        </div>
    )
}
export default StopsListItem;