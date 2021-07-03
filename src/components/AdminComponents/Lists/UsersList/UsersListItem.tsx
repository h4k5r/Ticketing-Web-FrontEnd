import React from "react";
import classes from '../ListStyles/ItemStyle.module.css'
import blackBus from '../../../../images/la_bus-1.svg'
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {useDispatch} from "react-redux";
import {userListAction} from "../../../../store/users-list-slice";

const UsersListItem:React.FC<{
    userId:string,
    mailId?:string,
    phone?:string}> = props => {
    const dispatch = useDispatch();
    const onHistoryHandler = () => {
        dispatch(userListAction.openHistory({userId:props.userId}))
    }
    const onResetHandler = () => {
        dispatch(userListAction.openReset({userId:props.userId}));
    }
    const onDeleteHandler = () => {
        dispatch(userListAction.openDelete({userId:props.userId}));
    }
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
                <NormalGradientButton text={'View History'} buttonColor={'green'} onClick={onHistoryHandler}/>
                {props.phone? '' : <NormalGradientButton text={'Reset Password'} buttonColor={'violet'} onClick={onResetHandler}/>}
                <NormalGradientButton text={'Delete User'} buttonColor={'pink'} onClick={onDeleteHandler}/>
            </div>
        </div>
    )
}
export default UsersListItem;