import React from "react";
import blackBus from '../../../../images/la_bus-1.svg'
import classes from "../ListStyles/ItemStyle.module.css"
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

const StaffListItem:React.FC<{
    staffMail:string,
    staffId:string,
    onChangeHandler: () => void,
    onResetHandlerHandler:() => void,
    onDeleteHandler: () => void }> = props => {
    return (
        <div className={classes.container}>
            <img className={classes.image} src={blackBus} alt={'bus-icon'}/>
            <div className={classes.detailsContainer}>
                <div className={classes.detailsSubContainer}>
                    <p className={classes.text}>Staff mail:</p>
                    <p className={`${classes.text} ${classes.propText}`}>{props.staffMail}</p>
                </div>
                <div className={classes.detailsSubContainer}>
                    <p className={classes.text}>Staff ID:</p>
                    <p className={`${classes.text} ${classes.propText}`}>{props.staffId}</p>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                <NormalGradientButton text={'Change Bus'} buttonColor={'green'} onClick={props.onChangeHandler}/>
                <NormalGradientButton text={'Reset Password'} buttonColor={'violet'} onClick={props.onResetHandlerHandler}/>
                <NormalGradientButton text={'Delete Staff'} buttonColor={'pink'} onClick={props.onDeleteHandler}/>
            </div>
        </div>
    )
}
export default StaffListItem;