import React, {useEffect, useState} from "react";
import classes from'./UsersPage.module.css'
import FormSearchUsers from "../../../components/AdminComponents/Forms/FormSearchUsers/FormSearchUsers";
import GrayCard from "../../../UI/GrayCard/GrayCard";
import UsersList from "../../../components/AdminComponents/Lists/UsersList/UsersList";
import { Fragment } from "react";
import BackDrop from "../../../UI/BackDrop/BackDrop";
import {useDispatch, useSelector} from "react-redux";
import {userListAction, userListType} from "../../../store/users-list-slice";
import ConfirmationCard from "../../../UI/ConfirmationCard/ConfirmationCard";
import FormResetPassword from "../../../components/AdminComponents/Forms/FormResetPassword/FormResetPassword";
import HistoryResults, {ticketHistory} from "../../../components/HistoryResults/HistoryResults";

const UsersPage:React.FC<{}> = () => {
    const [email,setEmail] = useState('');
    const [history,setHistory] = useState<ticketHistory[]>([]);
    const dispatch = useDispatch();
    const isHistoryOpen = useSelector<{usersList:userListType}>(state => state.usersList.isHistoryOpen);
    const isResetOpen = useSelector<{usersList:userListType}>(state => state.usersList.isResetOpen);
    const isDeleteOpen = useSelector<{usersList:userListType}>(state => state.usersList.isDeleteOpen);
    const userId = useSelector<{usersList:userListType}>(state => state.usersList.selectedUserId);
    useEffect(() => {
        if(isResetOpen) {
            //fetch email
            setEmail('test@test.com')
        }
    },[isResetOpen])
    useEffect(() => {
        if(isHistoryOpen){
            //fetch history
            setHistory((prevState) => {
                const history:ticketHistory[] = [
                    {
                        busId:'0000',
                        ticketId:'00001',
                        busNumber:'0000',
                        source:'srirangam',
                        destination:'tolgate',
                        numberOfTickets:'5',
                        bookedTime:'12:00',
                        hasUsed:true
                    },
                    {
                        busId:'0000',
                        ticketId:'00002',
                        busNumber:'0000',
                        source:'srirangam',
                        destination:'tolgate',
                        numberOfTickets:'5',
                        bookedTime:'12:00',
                        hasUsed:true
                    },
                    {
                        busId:'0000',
                        ticketId:'00003',
                        busNumber:'0000',
                        source:'srirangam',
                        destination:'tolgate',
                        numberOfTickets:'5',
                        bookedTime:'12:00',
                        hasUsed:true
                    },
                    {
                        busId:'0000',
                        ticketId:'00004',
                        busNumber:'0000',
                        source:'srirangam',
                        destination:'tolgate',
                        numberOfTickets:'5',
                        bookedTime:'12:00',
                        hasUsed:true
                    },
                    {
                        busId:'0000',
                        ticketId:'00005',
                        busNumber:'0000',
                        source:'srirangam',
                        destination:'tolgate',
                        numberOfTickets:'5',
                        bookedTime:'12:00',
                        hasUsed:true
                    }
                ];
                return [...prevState,...history]
            })
        }
    },[isHistoryOpen])
    const onCloseHandler = () => {
        dispatch(userListAction.closeAll());
    }
    const onDeleteHandler = () => {
        console.log(`${userId} deleted`)
    }
    return(
        <Fragment>
            <BackDrop visibility={`${isHistoryOpen ? 'show' : 'hide'}` } onClick={onCloseHandler}>
                <HistoryResults history={history} close={true} closeHandler={onCloseHandler}/>
            </BackDrop>
            <BackDrop visibility={`${isResetOpen ? 'show' : 'hide'}` } onClick={onCloseHandler}>
                <FormResetPassword email={email} onClose={onCloseHandler}/>
            </BackDrop>
            <BackDrop visibility={`${isDeleteOpen ? 'show' : 'hide'}` } onClick={onCloseHandler}>
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