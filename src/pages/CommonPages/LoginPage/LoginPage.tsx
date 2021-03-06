import React, {useEffect} from "react";
import {Route} from "react-router-dom";

import classes from './Login.module.css'
import '../../../common/CommonLoginStyles.css'

import GrayCard from "../../../UI/GrayCard/GrayCard";
import FormImage from "../../../UI/FormImage/FormImage";
import LoginUI from "../../../components/LoginUI/LoginUI";
import EmailLogin from "../../../components/FormEmailLogin/EmailLogin";
import FormEmailPasswordReset
    from "../../../components/UserComponents/Forms/FormEmailPasswordReset/FormEmailPasswordReset";
import FormEmailRegister from "../../../components/UserComponents/Forms/FormEmailRegister/FormEmailRegister";
import FormPhoneRegister from "../../../components/UserComponents/Forms/FormPhoneRegister/FormPhoneRegister";
import FormPhoneOTP from "../../../components/UserComponents/Forms/FormPhoneOTP/FormPhoneOTP";
import FormUserResetPassword from "../../../components/UserComponents/Forms/FormResetPassword/FormUserResetPassword";

import {
    emailLoginLink,
    emailPasswordResetLink,
    emailRegisterLink,
    loginLink,
    phoneOtpLink,
    phoneRegisterLink,
    resetLink
} from "../../../LinkPaths";
import {useDispatch} from "react-redux";
import {uiAction} from "../../../store/ui-slice";


const LoginPage: React.FC<{}> = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(uiAction.closeMobileMenu());
    },[dispatch]);
    return (
        <section className={classes.loginSection}>
            <GrayCard cssClasses={[classes.card]}>
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
                        <Route path={resetLink}><FormUserResetPassword/></Route>
                    </div>
                </div>
            </GrayCard>
        </section>
    );
}
export default LoginPage;