import React from "react";
import GradientInput from "../../UI/GradientInput/GradientInput";
import LinkGradientButton from "../../UI/Buttons/LinkButtons/LinkGradientButton/LinkGradientButton";
import {Link} from "react-router-dom";
import {emailLoginLink} from "../../LinkPaths";

const FormEmailPasswordReset:React.FC<{}> = () => {
    const color:string = 'violet'
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter your email to reset password</p>
            <form className={'formStyle'}>
                <GradientInput label={'Email'} type={'text'} color={color} placeHolder={'Enter Email'}/>
                <LinkGradientButton location={''} text={'Send Reset Link'} buttonColor={color}/>
                <Link className={'link'} to={emailLoginLink}>Click Here to Login.</Link>
            </form>
        </div>
    );
}
export default FormEmailPasswordReset;