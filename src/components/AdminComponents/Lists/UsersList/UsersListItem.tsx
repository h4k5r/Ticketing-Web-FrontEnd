import React from "react";
import classes from '../ListStyles/ItemStyle.module.css'
import blackBus from '../../../../images/la_bus-1.svg'
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

const UsersListItem:React.FC<{
    userId:string,
    mailId?:string,
    phone?:string,
    onEditHandler:() => void,
    onDeleteHandler: () => void}> = props => {
    return (
        <div className={classes.container}>
            <img className={classes.image} src={blackBus} alt={'bus-icon'}/>
            <div className={classes.detailsContainer}>
                <div className={classes.detailsSubContainer}>
                    <p className={classes.text}>User ID:</p>
                    <p className={`${classes.text} ${classes.propText}`}>{props.userId}</p>
                </div>
                <div className={classes.detailsSubContainer}>
                    <p className={classes.text}>
                        {props.mailId? 'Mail Id' : ''}{props.phone? 'Phone Number' : ''}:
                    </p>
                    <p className={`${classes.text} ${classes.propText}`}>
                        {props.mailId? props.mailId:''}{props.phone? props.phone:''}
                    </p>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                <NormalGradientButton text={'Edit Stop'} buttonColor={'violet'} onClick={props.onEditHandler}/>
                <NormalGradientButton text={'Delete Stop'} buttonColor={'pink'} onClick={props.onDeleteHandler}/>
            </div>
        </div>
    )
}
export default UsersListItem;