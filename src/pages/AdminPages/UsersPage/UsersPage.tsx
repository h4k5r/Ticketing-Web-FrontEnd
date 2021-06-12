import React from "react";
import classes from'./UsersPage.module.css'
import FormSearchUsers from "../../../components/AdminComponents/Forms/FormSearchUsers/FormSearchUsers";
import GrayCard from "../../../UI/GrayCard/GrayCard";

const UsersPage:React.FC<{}> = () => {
    return(
        <section className={classes.usersSection}>
            <div className={classes.cardContainer}>
                <GrayCard>
                    <FormSearchUsers/>
                </GrayCard>
                <GrayCard>

                </GrayCard>
            </div>
        </section>
    )
}
export default UsersPage