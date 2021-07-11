import React, {useEffect, useState} from "react";
import classes from './Stops.module.css'
import GrayCard from "../../../UI/GrayCard/GrayCard";
import FormSearchStops from "../../../components/AdminComponents/Forms/FormSearchStops/FormSearchStops";
import StopsList from "../../../components/AdminComponents/Lists/StopsList/StopsList";
import {Fragment} from "react";
import BackDrop from "../../../UI/BackDrop/BackDrop";
import FormAddOrEditStop from "../../../components/AdminComponents/Forms/FormAddOrEditStop/FormAddOrEditStop";
import {useDispatch, useSelector} from "react-redux";
import {stopsListAction} from "../../../store/stops-list-slice";
import ConfirmationCard from "../../../UI/ConfirmationCard/ConfirmationCard";
import {RootState} from "../../../store";
import fetch from "node-fetch";
import {uiAction} from "../../../store/ui-slice";

const Stops: React.FC<{}> = () => {
    const [stopName, setStopName] = useState('')
    const dispatch = useDispatch();
    const isAddOpen = useSelector((state: RootState) => state.stopsList.isAddOpen);
    const isEditOpen = useSelector((state: RootState) => state.stopsList.isEditOpen);
    const isDeleteOpen = useSelector((state: RootState) => state.stopsList.isDeleteOpen);
    const stopId = useSelector((state: RootState) => state.stopsList.selectedStopId);
    useEffect(() => {
        dispatch(uiAction.closeMobileMenu());
    },[dispatch]);
    useEffect(() => {
        if (isEditOpen) {
            //fetch stop Name
            fetch(`http://localhost:8080/admin/searchStop/${stopId}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
                }
            })
                .then(result => {
                    return result.json();
                })
                .then(data => {
                    setStopName(data.name)
                })
                .catch(err => {
                    console.log(err)
                })

        }
    }, [isEditOpen, stopId]);
    const onCloseHandler = () => {
        dispatch(stopsListAction.closeAll());
    }
    const deleteBusHandler = () => {
        console.log(`${stopId} delete clicked`)
        fetch(`http://localhost:8080/admin/deleteStop/${stopId}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            }
        })
            .then(result => {
                return result.json();
            })
            .then(data => {
                console.log(data);
                dispatch(stopsListAction.clearAll());
                onCloseHandler();
            })
        //send delete request to serve with busId
    }
    return (
        <Fragment>
            <BackDrop visibility={`${isAddOpen ? 'show' : 'hide'}`}>
                <FormAddOrEditStop mode={'Add'} onCloseHandler={onCloseHandler}
                                   stopNameSetter={setStopName}/>
            </BackDrop>
            <BackDrop visibility={`${isEditOpen ? 'show' : 'hide'}`}>
                <FormAddOrEditStop mode={'Edit'} onCloseHandler={onCloseHandler}
                                   stopName={stopName} stopNameSetter={setStopName} _id={stopId}/>
            </BackDrop>
            <BackDrop visibility={`${isDeleteOpen ? 'show' : 'hide'}`} onClick={onCloseHandler}>
                <ConfirmationCard title={'Delete Stop'} message={'Do you want to delete the stop'}
                                  leftButtonText={'No'} rightButtonText={'Yes'}
                                  leftButtonClickHandler={onCloseHandler} rightButtonClickHandler={deleteBusHandler}
                                  onClose={onCloseHandler}/>
            </BackDrop>
            <section className={classes.stopsSection}>
                <div className={classes.cardContainer}>
                    <GrayCard cssClasses={[classes.topCard]}>
                        <FormSearchStops/>
                    </GrayCard>
                    <GrayCard cssClasses={[classes.bottomCard]}>
                        <StopsList/>
                    </GrayCard>
                </div>
            </section>
        </Fragment>
    )
}
export default Stops;