import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import classes from './CustomerLandingPage.module.css'
import {useDispatch} from "react-redux";
import {uiAction} from "../../../store/ui-slice";

const CustomerLandingPage:React.FC<{}> = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(uiAction.closeMobileMenu());
    },[dispatch]);
    return (
        <section className={classes.entire}>
            <div className={`${classes.common}`}>
                <div className={`${classes.heading} }`}>
                    <h1>New Age Ticketing System for</h1>
                    <h1>Public Buses</h1>
                </div>
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