import React, {useEffect, useState} from "react";
import classes from './BusesPage.module.css'
import FormSearchBuses from "../../../components/AdminComponents/Forms/FormSearchBuses/FormSearchBuses";
import GrayCard from "../../../UI/GrayCard/GrayCard";
import BusesList from "../../../components/AdminComponents/Lists/BusesList/BusesList";
import BackDrop from "../../../UI/BackDrop/BackDrop";
import {busesListAction, busListType} from "../../../store/buses-list-slice";
import {Dispatch} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import { Fragment } from "react";
import ConfirmationCard from "../../../UI/ConfirmationCard/ConfirmationCard";
import FormAddOrEditBus, {stop} from "../../../components/AdminComponents/Forms/FormAddOrEditBus/FormAddOrEditBus";

const BusesPage:React.FC<{}> = () => {
    const dispatch:Dispatch = useDispatch();
    const isEditOpen = useSelector<{busesList:busListType}>(state => state.busesList.isEditOpen);
    const isDeleteOpen = useSelector<{busesList:busListType}>(state => state.busesList.isDeleteOpen);
    const busId = useSelector<{busesList:busListType}>(state => state.busesList.selectedBusId);
    const [busNumber,setBusNumber] = useState<string>('');
    const [stops,setStops] = useState<stop[]>([])

    useEffect(() => {
        if(isEditOpen){
            //send request to fetch Data
            console.log(`sending request with busId ${busId}`);
            setBusNumber('TN 00 69 0000')
            setStops([
                {id:'1',name:'test'},
                {id:'2',name:'test'},
                {id:'3',name:'test'},
            ])

        }
    },[isEditOpen,busId]);
    const deleteBusHandler = () => {
        //send delete request to serve with busId
    }
    const onCloseHandler = () => dispatch(busesListAction.closeAll())
    return(
        <Fragment>
            <BackDrop visibility={`${isEditOpen?'show':'hide'}`}
                      onClick={onCloseHandler}>
                <FormAddOrEditBus mode={'Edit'} onCloseHandler={onCloseHandler} busNumber={busNumber}
                                  stops={stops} stopsSetter={setStops} busNumberSetter={setBusNumber}/>
            </BackDrop>
            <BackDrop visibility={`${isDeleteOpen?'show':'hide'}`}
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