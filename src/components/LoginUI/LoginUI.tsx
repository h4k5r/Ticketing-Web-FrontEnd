import React from "react";

import phone from '../../images/carbon_phone-filled.svg'
import google from '../../images/flat-color-icons_google.svg'
import mail from '../../images/line-md_email.svg'

import classes from './LoginUI.module.css'
import LinkGradientImageButton from "../../UI/Buttons/LinkButtons/LinkGradientImageButton/LinkGradientImageButton";
import { Link } from "react-router-dom";
import {emailLoginLink, phoneRegisterLink} from "../../LinkPaths";
import NormalGradientImageButton
    from "../../UI/Buttons/NormalButtons/NormalGradientImageButton/NormalGradientImageButton";
const LoginUI:React.FC<{}> = () => {
    const url: string = '/login';
    return (
        <div className={classes.loginContainer}>
            <p className={classes.subText}>Login or Sign in to Continue</p>
            <LinkGradientImageButton location={phoneRegisterLink} text={'Get in With Your Phone'} buttonColor={'green'}
                                     imageLocation={phone}/>
            <NormalGradientImageButton text={'Get in With Google'} buttonColor={'red'} imageLocation={google}/>
            <LinkGradientImageButton location={emailLoginLink} text={'Login With Email'} buttonColor={'violet'}
                                     imageLocation={mail}/>
            <Link className={classes.register} to={`${url}/emailRegister`}>Click Here To register your email</Link>
        </div>
    )
}
export default LoginUI;
