import React from "react";
import classes from '../ListStyles/ListStyle.module.css'
import UsersListItem from "./UsersListItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";

export type user = {
    userId:string,
    email?:string,
    phone?:string
}
const UsersList:React.FC<{}> = () => {
    const user = useSelector((state:RootState) => state.usersList.result);
    return (
        <div className={classes.container}>
            <h1 className={classes.mainText}>Stops</h1>
            <div className={classes.subContainer}>
                {user.userId.length > 0 &&
                <UsersListItem userId={user.userId} phone={user.phone? user.phone : undefined}
                               mailId={user.email? user.email : undefined}/>}
            </div>
        </div>
    )
}
export default UsersList;