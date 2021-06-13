import React from "react";
import classes from '../ListStyles/ListStyle.module.css'
import UsersListItem from "./UsersListItem";

const UsersList:React.FC<{}> = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.mainText}>Stops</h1>
            <div className={classes.subContainer}>
                <UsersListItem userId={'31xcv9873542cxdf9+78sd12'} phone={'123456789'}
                               onEditHandler={() => {}} onDeleteHandler={() => {}}/>
                <UsersListItem userId={'31xcv9873542cxdf9+78sd12'} mailId={'test@test.com'}
                               onEditHandler={() => {}} onDeleteHandler={() => {}}/>
                <UsersListItem userId={'31xcv9873542cxdf9+78sd12'} phone={'123456789'}
                               onEditHandler={() => {}} onDeleteHandler={() => {}}/>
                <UsersListItem userId={'31xcv9873542cxdf9+78sd12'} mailId={'test@test.com'}
                               onEditHandler={() => {}} onDeleteHandler={() => {}}/>

            </div>
        </div>
    )
}
export default UsersList;