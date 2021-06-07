import React from "react";

import classes from './Login.module.css'
import GrayCard from "../../UI/GrayCard/GrayCard";
import FormImage from "../../UI/FormImage/FormImage";
import LoginUI from "../../UI/LoginUI/LoginUI";

const LoginPage:React.FC<{}> = () => {
    return (
        <section className={classes.loginSection}>
            <GrayCard>
                <div className={classes.loginFlexContainer}>
                    <FormImage/>
                    <div className={classes.loginFormContainer}>
                        <h1 className={classes.mainText}>Welcome To App Name</h1>
                        <LoginUI/>
                    </div>
                </div>
            </GrayCard>
        </section>
    );
}
export default LoginPage;