import React from "react";
import classes from './FormAddOrEditBus.module.css';
import close from '../../../../images/close.svg'
import GrayCard from "../../../../UI/GrayCard/GrayCard";
import NormalGradientImageButton
    from "../../../../UI/Buttons/NormalButtons/NormalGradientImageButton/NormalGradientImageButton";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

export type stop = {
    name:string,
    id:string
}
const FormAddOrEditBus:React.FC<{mode:'Add' | 'Edit',
    busNumber?:string,
    stops?:stop[],
    onCloseHandler:() => void,
    stopsSetter?:any}> = props => {
    const onSaveHandler = () => {
         if(props.mode === 'Add') {
             //send Post request and create new fields in DB
         }
         if(props.mode === 'Edit') {
             //send Put request and replace the existing Bus
         }
    }
    const onStopsClickHandler = (id:string) => {
        props.stopsSetter((prevState:stop[]) => {
            return prevState.filter((stop) => {
                return id !== stop.id;
            });
        })
    }
    return (
        <GrayCard cssClasses={[classes.overAllContainer]}>
            <div className={classes.titleContainer}>
                <h1>{props.mode} Bus</h1>
                <NormalGradientImageButton buttonColor={''} imageLocation={close} onClick={props.onCloseHandler}/>
            </div>
            <GradientInput type={'text'} value={props.busNumber} color={'red'} placeHolder={'Enter Bus Number'} label={'Bus Number'}
                           cssClasses={[classes.overAllInput]}/>
            <div className={classes.stopsContainer}>
                <p className={classes.stopsText}>Stops</p>
                <div className={classes.stopsSubContainer}>
                    {props.stops?.map((stop) => {
                        return <p key={stop.id} className={classes.stop} onClick={() => onStopsClickHandler(stop.id)}>
                            {stop.name}<img src={close} alt={close}/>
                        </p>
                    })}
                </div>
            </div>
            <form className={classes.formContainer}>
                <h1 className={classes.formTitle}>Add Stops</h1>
                <GradientInput cssClasses={[classes.formText]} type={'text'} color={'red'}
                               placeHolder={'Enter Stop ID'} label={'Stop ID'}/>
                <NormalGradientButton text={'Add Stop'} buttonColor={'red'}
                                      cssClassesOnContainer={[classes.formButton]}/>
            </form>
            <NormalGradientButton text={'Save Bus'} buttonColor={'green'} onClick={onSaveHandler}
                                  cssClassesOnContainer={[classes.overAllButton]}/>
        </GrayCard>
    )
}
export default FormAddOrEditBus;