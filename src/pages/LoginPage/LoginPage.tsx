import React from "react";

import classes from './Login.module.css'
import '../../common/CommonLoginStyles.css'
import GrayCard from "../../UI/GrayCard/GrayCard";
import FormImage from "../../UI/FormImage/FormImage";
import LoginUI from "../../components/LoginUI/LoginUI";
import {Route} from "react-router-dom";
import EmailLogin from "../../components/FormEmailLoginForm/EmailLogin";
import FormEmailRegister from "../../components/FormEmailRegister/FormEmailRegister";
import FormEmailPasswordReset from "../../components/FormEmailPasswordReset/FormEmailPasswordReset";
import FormPhoneRegister from "../../components/FormPhoneRegister/FormPhoneRegister";
import FormPhoneOTP from "../../components/FormPhoneOTP/FormPhoneOTP";
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
                        <Route path={emailPasswordResetLink}><FormEmailPasswordReset/></Route>
                        <Route path={emailRegisterLink}><FormEmailRegister/></Route>
                        <Route path={phoneRegisterLink}><FormPhoneRegister/></Route>
                        <Route path={phoneOtpLink}><FormPhoneOTP/></Route>
                    </div>
                </div>
            </GrayCard>
        </section>
    );
}
export default LoginPage;