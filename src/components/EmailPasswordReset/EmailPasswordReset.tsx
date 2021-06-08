import React from "react";
import TextInput from "../../UI/TextInput/TextInput";
import GradientButton from "../../UI/Buttons/GradientButton/GradientButton";
import {Link} from "react-router-dom";
import {emailLoginLink} from "../../LinkPaths";

const EmailPasswordReset:React.FC<{}> = () => {
    const color:string = 'violet'
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter your email to reset password</p>
            <form className={'formStyle'}>
                <TextInput type={'text'} color={color} placeHolder={'Enter Email'}/>
                <GradientButton location={''} text={'Send Reset Link'} buttonColor={color}/>
                <Link className={'link'} to={emailLoginLink}>Click Here to Login.</Link>
            </form>
        </div>
    );
}
export default EmailPasswordReset;