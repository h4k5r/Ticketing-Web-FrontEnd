import React, {Fragment, useEffect} from "react";
import classes from './StaffPage.module.css'
import GrayCard from "../../../UI/GrayCard/GrayCard";
import FormSearchStaff from "../../../components/AdminComponents/Forms/FormSearchStaff/FormSearchStaff";
import StaffList from "../../../components/AdminComponents/Lists/StaffList/StaffList";
import BackDrop from "../../../UI/BackDrop/BackDrop";
import {useDispatch, useSelector} from "react-redux";
import {staffListAction} from "../../../store/staff-list-slice";
import FormResetPassword from "../../../components/AdminComponents/Forms/FormResetPassword/FormResetPassword";
import ConfirmationCard from "../../../UI/ConfirmationCard/ConfirmationCard";
import FormChangeBus from "../../../components/AdminComponents/Forms/FormChangeBus/FormChangeBus";
import {RootState} from "../../../store";
import FormAddPeople from "../../../components/AdminComponents/Forms/FormAddPeople/FormAddPeople";
import fetch from "node-fetch";
import {uiAction} from "../../../store/ui-slice";

const StaffPage: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const isAddOpen = useSelector((state: RootState) => state.staffList.isAddOpen);
    const isChangeBusOpen = useSelector((state: RootState) => state.staffList.isChangeBusOpen);
    const isResetPasswordOpen = useSelector((state: RootState) => state.staffList.isResetOpen);
    const isDeleteOpen = useSelector((state: RootState) => state.staffList.isDeleteOpen);
    const selectedStaffId = useSelector((state: RootState) => state.staffList.selectedStaffId);
    useEffect(() => {
        dispatch(uiAction.closeMobileMenu());
    },[dispatch]);
    const onCloseHandler = () => {
        console.log('close handler triggered')
        dispatch(staffListAction.closeAll());
    }
    const onDeleteHandler = () => {
        fetch(`http://localhost:8080/admin/deleteStaff/${selectedStaffId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            }
        })
            .then(result => {
                return result.json();
            })
            .then(data => {
                console.log(data);
                onCloseHandler();
                dispatch(staffListAction.clearAll());
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <Fragment>
            <BackDrop visibility={`${isAddOpen ? 'show' : 'hide'}`} onClick={onCloseHandler}>
                <FormAddPeople type={'Staff'} onCloseHandler={onCloseHandler}/>
            </BackDrop>
            <BackDrop visibility={`${isChangeBusOpen ? 'show' : 'hide'}`} onClick={onCloseHandler}>
                <FormChangeBus onCloseHandler={onCloseHandler}/>
            </BackDrop>
            <BackDrop visibility={`${isResetPasswordOpen ? 'show' : 'hide'}`} onClick={onCloseHandler}>
                <FormResetPassword type={'staff'} onCloseHandler={onCloseHandler}/>
            </BackDrop>
            <BackDrop visibility={`${isDeleteOpen ? 'show' : 'hide'}`} onClick={onCloseHandler}>
                <ConfirmationCard title={'Delete Staff'} message={'Are you sure do you want to delete staff?'}
                                  leftButtonText={'No'} rightButtonText={'Yes'}
                                  leftButtonClickHandler={onCloseHandler} rightButtonClickHandler={onDeleteHandler}
                                  onClose={onCloseHandler}/>
            </BackDrop>
            <section className={classes.staffSection}>
                <div className={classes.cardContainer}>
                    <GrayCard cssClasses={[classes.topCard]}>
                        <FormSearchStaff/>
                    </GrayCard>
                    <GrayCard cssClasses={[classes.bottomCard]}>
                        <StaffList/>
                    </GrayCard>
                </div>
            </section>
        </Fragment>
    )
}
export default StaffPage