import React from "react";
import classes from'./FormAddOrEditBus.module.css';
import close from '../../../../images/close.svg'
import GrayCard from "../../../../UI/GrayCard/GrayCard";
import NormalGradientImageButton
    from "../../../../UI/Buttons/NormalButtons/NormalGradientImageButton/NormalGradientImageButton";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

const FormAddOrEditBus:React.FC<{mode:string,busNumber?:string,stops?:[],onSaveHandler:() => void}> = props => {
    return (
        <GrayCard cssClasses={[classes.overAllContainer]}>
            <div className={classes.titleContainer}>
                <h1>{props.mode} Bus</h1>
                <NormalGradientImageButton buttonColor={''} imageLocation={close} />
            </div>
            <GradientInput type={'text'} value={props.busNumber} color={'red'} placeHolder={'Enter Bus Number'} label={'Bus Number'}
                           cssClasses={[classes.overAllInput]}/>
            <div className={classes.stopsContainer}>
                <p className={classes.stopsText}>Stops</p>
                <div className={classes.stopsSubContainer}>
                    <p className={classes.stop}>stop 1<img src={close} alt={close}/></p>
                    <p className={classes.stop}>stop 1<img src={close} alt={close}/></p>
                    <p className={classes.stop}>stop 1<img src={close} alt={close}/></p>
                    <p className={classes.stop}>stop 1<img src={close} alt={close}/></p>

                </div>
            </div>
            <form className={classes.formContainer}>
                <h1 className={classes.formTitle}>Add Stops</h1>
                <GradientInput cssClasses={[classes.formText]} type={'text'} color={'red'}
                               placeHolder={'Enter Stop ID'} label={'Stop ID'}/>
                <NormalGradientButton text={'Add Stop'} buttonColor={'red'}
                                      cssClassesOnContainer={[classes.formButton]}/>
            </form>
            <NormalGradientButton text={'Save Bus'} buttonColor={'green'} onClick={props.onSaveHandler}
                                  cssClassesOnContainer={[classes.overAllButton]}/>
        </GrayCard>
    )
}
export default FormAddOrEditBus;