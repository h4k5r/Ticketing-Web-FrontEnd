import React, {useEffect, useState} from "react";
import classes from './BusesPage.module.css'
import FormSearchBuses from "../../../components/AdminComponents/Forms/FormSearchBuses/FormSearchBuses";
import GrayCard from "../../../UI/GrayCard/GrayCard";
import BusesList from "../../../components/AdminComponents/Lists/BusesList/BusesList";
import BackDrop from "../../../UI/BackDrop/BackDrop";
import {busesListAction} from "../../../store/buses-list-slice";
import {Dispatch} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {Fragment} from "react";
import ConfirmationCard from "../../../UI/ConfirmationCard/ConfirmationCard";
import FormAddOrEditBus, {stop} from "../../../components/AdminComponents/Forms/FormAddOrEditBus/FormAddOrEditBus";
import {RootState} from "../../../store";
import fetch from "node-fetch";

const BusesPage: React.FC<{}> = () => {
    const dispatch: Dispatch = useDispatch();
    const isAddOpen = useSelector((state: RootState) => state.busesList.isAddOpen);
    const isEditOpen = useSelector((state: RootState) => state.busesList.isEditOpen);
    const isDeleteOpen = useSelector((state: RootState) => state.busesList.isDeleteOpen);
    const busId = useSelector((state: RootState) => state.busesList.selectedBusId);
    const [busNumber, setBusNumber] = useState<string>('');
    const [stops, setStops] = useState<stop[]>([])

    useEffect(() => {
        if (isEditOpen) {
            //send request to fetch Data
            console.log(`sending request with busId ${busId}`);
            fetch(`http://localhost:8080/admin/searchBus/${busId}`)
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
    }, [isEditOpen, busId]);
    const deleteBusHandler = () => {
        //send delete request to serve with busId
        fetch(`http://localhost:8080/admin/deleteBus/${busId}`,{
            method:'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(result => {
                return result.json();
            })
            .then(data => {
                setBusNumber(data.busNumber)
                setStops(data.stops);
                onCloseHandler();
            })
            .catch(err => {
                console.log(err)
            });
    }
    const onCloseHandler = () => dispatch(busesListAction.closeAll())
    return (
        <Fragment>
            <BackDrop visibility={`${isAddOpen ? 'show' : 'hide'}`}>
                <FormAddOrEditBus mode={'Add'} onCloseHandler={onCloseHandler}/>
            </BackDrop>
            <BackDrop visibility={`${isEditOpen ? 'show' : 'hide'}`}
                      onClick={onCloseHandler}>
                <FormAddOrEditBus mode={'Edit'} onCloseHandler={onCloseHandler} busNumber={busNumber} _id={busId}
                                  stops={stops} stopsSetter={setStops} busNumberSetter={setBusNumber}/>
            </BackDrop>
            <BackDrop visibility={`${isDeleteOpen ? 'show' : 'hide'}`}
                      onClick={onCloseHandler}>
                <ConfirmationCard title={'Delete Bus'} message={'Are you sure do you want to delete the bus'}
                                  leftButtonText={'No'} rightButtonText={'yes'}
                                  leftButtonClickHandler={onCloseHandler}
                                  rightButtonClickHandler={deleteBusHandler}
                                  onClose={onCloseHandler}/>

            </BackDrop>
            <section className={classes.busesContainer}>
                <div className={classes.subContainer}>
                    <GrayCard cssClasses={[classes.topCard]}>
                        <FormSearchBuses/>
                    </GrayCard>
                    <GrayCard cssClasses={[classes.bottomCard]}>
                        <BusesList/>
                    </GrayCard>
                </div>
            </section>
        </Fragment>

    )
}
export default BusesPage