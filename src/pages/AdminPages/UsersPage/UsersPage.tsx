import React, {useEffect, useState} from "react";
import classes from './UsersPage.module.css'
import FormSearchUsers from "../../../components/AdminComponents/Forms/FormSearchUsers/FormSearchUsers";
import GrayCard from "../../../UI/GrayCard/GrayCard";
import UsersList from "../../../components/AdminComponents/Lists/UsersList/UsersList";
import {Fragment} from "react";
import BackDrop from "../../../UI/BackDrop/BackDrop";
import {useDispatch, useSelector} from "react-redux";
import {userListAction} from "../../../store/users-list-slice";
import ConfirmationCard from "../../../UI/ConfirmationCard/ConfirmationCard";
import FormResetPassword from "../../../components/AdminComponents/Forms/FormResetPassword/FormResetPassword";
import HistoryResults, {ticketHistory} from "../../../components/HistoryResults/HistoryResults";
import FormAddPeople from "../../../components/AdminComponents/Forms/FormAddPeople/FormAddPeople";
import {RootState} from "../../../store";
import fetch from "node-fetch";
import {uiAction} from "../../../store/ui-slice";

const UsersPage: React.FC<{}> = () => {
    const [history, setHistory] = useState<ticketHistory[]>([]);
    const dispatch = useDispatch();
    const isAddOpen = useSelector((state: RootState) => state.usersList.isAddOpen);
    const isHistoryOpen = useSelector((state: RootState) => state.usersList.isHistoryOpen);
    const isResetOpen = useSelector((state: RootState) => state.usersList.isResetOpen);
    const isDeleteOpen = useSelector((state: RootState) => state.usersList.isDeleteOpen);
    const selectedUserId = useSelector((state: RootState) => state.usersList.selectedUserId);
    useEffect(() => {
        dispatch(uiAction.closeMobileMenu());
    },[dispatch]);
    useEffect(() => {
        if (isHistoryOpen) {
            //fetch history
            fetch(`http://localhost:8080/admin/userHistory/${selectedUserId}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
                }
            })
                .then(result => {
                    return result.json()
                })
                .then(data => {
                    setHistory(data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [isHistoryOpen, selectedUserId])
    const onCloseHandler = () => {
        dispatch(userListAction.closeAll());
    }
    const onDeleteHandler = () => {
        fetch(`http://localhost:8080/admin/deleteUser/${selectedUserId}`, {
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
                dispatch(userListAction.clearAll());
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <Fragment>
            <BackDrop visibility={`${isAddOpen ? 'show' : 'hide'}`} onClick={onCloseHandler}>
                <FormAddPeople type={'User'} onCloseHandler={onCloseHandler}/>
            </BackDrop>
            <BackDrop visibility={`${isHistoryOpen ? 'show' : 'hide'}`} onClick={onCloseHandler}>
                <HistoryResults history={history} close={true} closeHandler={onCloseHandler}/>
            </BackDrop>
            <BackDrop visibility={`${isResetOpen ? 'show' : 'hide'}`} onClick={onCloseHandler}>
                <FormResetPassword type={'user'} onCloseHandler={onCloseHandler}/>
            </BackDrop>
            <BackDrop visibility={`${isDeleteOpen ? 'show' : 'hide'}`} onClick={onCloseHandler}>
                <ConfirmationCard title={'Delete User'} message={'Are you sure do you want to delete user'}
                                  leftButtonText={'No'} rightButtonText={'Yes'}
                                  leftButtonClickHandler={onCloseHandler} rightButtonClickHandler={onDeleteHandler}
                                  onClose={onCloseHandler}/>
            </BackDrop>
            <section className={classes.usersSection}>
                <div className={classes.cardContainer}>
                    <GrayCard cssClasses={[classes.topCard]}>
                        <FormSearchUsers/>
                    </GrayCard>
                    <GrayCard cssClasses={[classes.bottomCard]}>
                        <UsersList/>
                    </GrayCard>
                </div>
            </section>
        </Fragment>
    )
}
export default UsersPage