import React from "react";
import blackBus from '../../../../images/la_bus-1.svg'
import classes from "../ListStyles/ItemStyle.module.css"
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {useDispatch} from "react-redux";
import {staffListAction} from "../../../../store/staff-list-slice";

const StaffListItem:React.FC<{
    staffMail:string,
    staffId:string}> = props => {
    const dispatch = useDispatch();
    const onChangeBusHandler = () => {
        dispatch(staffListAction.openChangeBus({staffId:props.staffId}));
    }
    const onResetPasswordHandler = () => {
        dispatch(staffListAction.openReset({staffId:props.staffId}))
    }
    const onDeleteHandler = () => {
        dispatch(staffListAction.openDelete({staffId:props.staffId}))
    }
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
                <NormalGradientButton text={'Change Bus'} buttonColor={'green'} onClick={onChangeBusHandler}/>
                <NormalGradientButton text={'Reset Password'} buttonColor={'violet'} onClick={onResetPasswordHandler}/>
                <NormalGradientButton text={'Delete Staff'} buttonColor={'pink'} onClick={onDeleteHandler}/>
            </div>
        </div>
    )
}
export default StaffListItem;