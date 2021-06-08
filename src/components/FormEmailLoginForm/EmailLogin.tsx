import React from "react";
import TextInput from "../../UI/TextInput/TextInput";
import GradientButton from "../../UI/Buttons/GradientButton/GradientButton";
import { Link } from "react-router-dom";
import {emailPasswordResetLink, emailRegisterLink, loginLink} from "../../LinkPaths";

const EmailLogin:React.FC<{}> = () => {
    const color:string = 'green';
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter Your Credentials</p>
            <form className={'formStyle'}>
                <TextInput label={'Email'} type={'text'} color={color} placeHolder={'Enter Email'}/>
                <TextInput label={'Password'} type={'password'} color={color} placeHolder={'Enter Password'}/>
                <GradientButton location={'/search'} text={'Login'} buttonColor={color}/>
                <Link className={'link'} to={emailRegisterLink}>New User? Click here to Register.</Link>
                <Link className={'link'} to={emailPasswordResetLink}>Forgot Password?</Link>
                <Link className={'link'} to={loginLink}>Get in With Other Methods</Link>
            </form>
        </div>
    )
}
export default EmailLogin;