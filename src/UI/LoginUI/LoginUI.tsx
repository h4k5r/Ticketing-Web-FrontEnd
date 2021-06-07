import React from "react";

import phone from '../../images/carbon_phone-filled.svg'
import google from  '../../images/flat-color-icons_google.svg'
import mail from  '../../images/line-md_email.svg'

import classes from './LoginUI.module.css'
import GradientImageButton from "../Buttons/GradientImageButton/GradientImageButton";
import { Link } from "react-router-dom";
const LoginUI:React.FC<{}> = () => {
    return(
        <div className={classes.loginContainer}>
            <p className={classes.subText}>Login or Sign in to Continue</p>
            <GradientImageButton location={'/login/phone'} text={'Get in With Your Phone'} buttonColor={'green'} imageLocation={phone}/>
            <GradientImageButton location={'/login/google'} text={'Get in With Google'} buttonColor={'red'} imageLocation={google}/>
            <GradientImageButton location={'/login/email'} text={'Login With Email'} buttonColor={'violet'} imageLocation={mail}/>
            <Link className={classes.register} to={'/login/register'}>Click Here To register your email</Link>
        </div>
    )
}
export default LoginUI;
