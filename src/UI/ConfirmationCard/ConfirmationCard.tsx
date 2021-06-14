import React from "react";
import classes from'./ConfirmationCard.module.css'
import closeIcon from '../../images/close.svg'
import GrayCard from "../GrayCard/GrayCard";
import NormalGradientButton from "../Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import NormalGradientImageButton from "../Buttons/NormalButtons/NormalGradientImageButton/NormalGradientImageButton";

const ConfirmationCard:React.FC<{
    title:string,
    message:string,
    leftButtonText:string,
    rightButtonText:string,
    leftButtonClickHandler:(...params: any[]) => void,
    rightButtonClickHandler: (...params: any[]) => void,
    onClose: () => void }> = props => {
    return (
        <GrayCard cssClasses={[classes.card]}>
            <div className={classes.titleContainer}>
                <h1>{props.title}</h1>
                <NormalGradientImageButton  buttonColor={''} imageLocation={closeIcon} onClick={props.onClose}/>
            </div>
            <p className={classes.message}>{props.message}</p>
            <div className={classes.buttonsContainer}>
                <NormalGradientButton text={props.leftButtonText} buttonColor={'green'}
                                      onClick={props.leftButtonClickHandler}/>
                <NormalGradientButton text={props.rightButtonText} buttonColor={'pink'}
                                      onClick={props.rightButtonClickHandler}/>
            </div>
        </GrayCard>
    )
}
export default ConfirmationCard;