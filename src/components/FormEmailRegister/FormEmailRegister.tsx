import React from "react";
import TextInput from "../../UI/TextInput/TextInput";
import LinkGradientButton from "../../UI/Buttons/LinkButtons/LinkGradientButton/LinkGradientButton";
import {Link} from "react-router-dom";
import {emailLoginLink, emailPasswordResetLink, loginLink} from "../../LinkPaths";

const FormEmailRegister:React.FC<{}> = () => {
    const color:string = 'red'
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter Your Credentials to Register</p>
            <form className={'formStyle'}>
                <TextInput label={'Email'} type={'text'} color={color} placeHolder={'Enter Email'}/>
                <TextInput label={'Password'} type={'password'} color={color} placeHolder={'Enter Password'}/>
                <TextInput label={'Confirm Password'} type={'password'} color={color} placeHolder={'Enter Password again'}/>
                <LinkGradientButton location={''} text={'Register'} buttonColor={color}/>
                <Link className={'link'} to={emailLoginLink}>Already Have an Account? Click Here.</Link>
                <Link className={'link'} to={emailPasswordResetLink}>Forgot Password?</Link>
                <Link className={'link'} to={loginLink}>Get in With Other Methods</Link>
            </form>
        </div>
    );
}
export default FormEmailRegister;