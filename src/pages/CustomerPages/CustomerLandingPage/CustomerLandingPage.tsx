import React from "react";
import {Link} from "react-router-dom";
import classes from './CustomerLandingPage.module.css'
import BackDrop from "../../../UI/BackDrop/BackDrop";
import FormAddOrEditBus from "../../../components/AdminComponents/Forms/FormAddOrEditBus/FormAddOrEditBus";

const CustomerLandingPage:React.FC<{}> = () => {
    return (
        <section className={classes.entire}>
            <div className={`${classes.common}`}>
                <div className={`${classes.heading} }`}>
                    <h1>New Age Ticketing System for</h1>
                    <h1>Public Buses</h1>
                </div>
                <BackDrop visibility={'show'}>
                    <FormAddOrEditBus mode={'Add'} onSaveHandler={() => {}}/>
                </BackDrop>
                <div className={`${classes.subText}`}>
                    <p>Make your travel hassle free and elegant</p>
                    <p>with our App.</p>
                </div>
                <Link className={classes.ctaBtn} to={'/search'}>Let's Go</Link>
            </div>
        </section>

    );
}
export default CustomerLandingPage;