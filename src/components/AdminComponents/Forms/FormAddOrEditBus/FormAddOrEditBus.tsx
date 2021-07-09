import React, {useEffect, useRef, useState} from "react";
import classes from './FormAddOrEditBus.module.css';
import close from '../../../../images/close.svg'
import GrayCard from "../../../../UI/GrayCard/GrayCard";
import NormalGradientImageButton
    from "../../../../UI/Buttons/NormalButtons/NormalGradientImageButton/NormalGradientImageButton";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import fetch from "node-fetch";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";

export type stop = {
    name: string,
    _id: string
}
const FormAddOrEditBus: React.FC<{
    mode: 'Add' | 'Edit',
    onCloseHandler: () => void,
}> = props => {
    const selectedBusId = useSelector((state: RootState) => state.busesList.selectedBusId);
    const [busNumber, setBusNumber] = useState<string>('')
    const [stops, setStops] = useState<stop[]>([])
    const busNumberInputRef = useRef(document.createElement('input'))
    const {mode} = props;
    useEffect(() => {
        if (mode === 'Edit' && selectedBusId) {
            //send request to fetch Data
            console.log(selectedBusId)
            console.log(`sending request with busId ${selectedBusId}`);
            fetch(`http://localhost:8080/admin/searchBus/${selectedBusId}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
                }
            })
                .then(result => {
                    return result.json();
                })
                .then(data => {
                    setBusNumber(data.busNumber)
                    setStops(data.stops);
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }, [mode, selectedBusId]);

    const stopIdInputRef = useRef(document.createElement('input'));
    const saveBus = (link: string, body: {}, method: 'POST' | 'PUT') => {
        return fetch(link, {
            method: method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            },
            body: JSON.stringify(body)
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                console.log(data)
                props.onCloseHandler();
            })

    }
    const onSaveHandler = () => {
        if (props.mode === 'Add') {
            //send Post request and create new fields in DB
            saveBus('http://localhost:8080/admin/addNewBus', {
                busNumber: busNumberInputRef.current.value,
                stops: stops
            }, 'POST').catch(err => {
                console.log(err)
            })
        }
        if (props.mode === 'Edit') {
            //send Put request and replace the existing Bus
            saveBus('http://localhost:8080/admin/editBus', {
                _id: selectedBusId,
                busNumber: busNumberInputRef.current.value,
                stops: stops
            }, 'PUT').catch(err => {
                console.log(err)
            })
        }
    }
    const onAddStopHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredStopId = stopIdInputRef.current.value;
        fetch(`http://localhost:8080/admin/searchStop/${enteredStopId}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            }
        })
            .then(result => {
                return result.json();
            })
            .then(data => {
                setStops(prevState => {
                    const existingStop = prevState.find(stop => {
                        return stop._id === data._id
                    })
                    if (existingStop) {
                        return [...prevState]
                    }
                    return [...prevState, data]
                })
                console.log(stops);
            })
            .catch(err => {
                console.log(err)
            })

    }
    const onStopsClickHandler = (id: string) => {
        setStops((prevState: stop[]) => {
            return prevState.filter((stop) => {
                return id !== stop._id;
            });
        })
    }
    const onBusNumberChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBusNumber(event.target.value);
    }
    return (
        <GrayCard cssClasses={[classes.overAllContainer]}>
            <div className={classes.titleContainer}>
                <h1>{props.mode} Bus</h1>
                <NormalGradientImageButton buttonColor={''} imageLocation={close} onClick={props.onCloseHandler}/>
            </div>
            <GradientInput type={'text'} value={busNumber} color={'red'} placeHolder={'Enter Bus Number'}
                           label={'Bus Number'} cssClasses={[classes.overAllInput]}
                           onChangeHandler={onBusNumberChangeHandler} ref={busNumberInputRef}/>
            <div className={classes.stopsContainer}>
                <p className={classes.stopsText}>Stops</p>
                <div className={classes.stopsSubContainer}>
                    {stops.map((stop) => {
                        return <p key={stop._id} className={classes.stop} onClick={() => onStopsClickHandler(stop._id)}>
                            {stop.name}<img src={close} alt={close}/>
                        </p>
                    })}
                </div>
            </div>
            <form className={classes.formContainer} onSubmit={onAddStopHandler}>
                <h1 className={classes.formTitle}>Add Stops</h1>
                <GradientInput cssClasses={[classes.formText]} type={'text'} color={'red'}
                               placeHolder={'Enter Stop ID'} label={'Stop ID'} ref={stopIdInputRef}/>
                <NormalGradientButton text={'Add Stop'} buttonColor={'red'}
                                      cssClassesOnContainer={[classes.formButton]}/>
            </form>
            <NormalGradientButton text={'Save Bus'} buttonColor={'green'} onClick={onSaveHandler}
                                  cssClassesOnContainer={[classes.overAllButton]}/>
        </GrayCard>
    )
}
export default FormAddOrEditBus;