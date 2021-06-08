import React from "react";

import classes from './Login.module.css'
import '../../common/CommonLoginStyles.css'
import GrayCard from "../../UI/GrayCard/GrayCard";
import FormImage from "../../UI/FormImage/FormImage";
import LoginUI from "../../components/LoginUI/LoginUI";
import {Route} from "react-router-dom";
import EmailLogin from "../../components/EmailLogin/EmailLogin";
import EmailRegister from "../../components/EmailRegister/EmailRegister";
import EmailPasswordReset from "../../components/EmailPasswordReset/EmailPasswordReset";
import PhoneRegister from "../../components/PhoneRegister/PhoneRegister";
import PhoneOTP from "../../components/PhoneOTP/PhoneOTP";
import {
    emailLoginLink,
    emailPasswordResetLink,
    emailRegisterLink,
    loginLink,
    phoneOtpLink,
    phoneRegisterLink
} from "../../LinkPaths";

const LoginPage:React.FC<{}> = () => {
    return (
        <section className={classes.loginSection}>
            <GrayCard>
                <div className={classes.loginFlexContainer}>
                    <FormImage/>
                    <div className={classes.loginFormContainer}>
                        <h1 className={classes.mainText}>Welcome To App Name</h1>
                        <Route path={loginLink} exact><LoginUI/></Route>
                        <Route path={emailLoginLink}><EmailLogin/></Route>
                        <Route path={emailPasswordResetLink}><EmailPasswordReset/></Route>
                        <Route path={emailRegisterLink}><EmailRegister/></Route>
                        <Route path={phoneRegisterLink}><PhoneRegister/></Route>
                        <Route path={phoneOtpLink}><PhoneOTP/></Route>
                    </div>
                </div>
            </GrayCard>
        </section>
    );
}
export default LoginPage;