import React from "react";
import classes from'./UsersPage.module.css'
import FormSearchUsers from "../../../components/AdminComponents/Forms/FormSearchUsers/FormSearchUsers";
import GrayCard from "../../../UI/GrayCard/GrayCard";
import UsersList from "../../../components/AdminComponents/Lists/UsersList/UsersList";

const UsersPage:React.FC<{}> = () => {
    return(
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
    )
}
export default UsersPage