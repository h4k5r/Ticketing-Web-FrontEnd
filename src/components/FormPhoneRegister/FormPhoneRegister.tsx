import React from "react";
import GradientInput from "../../UI/GradientInput/GradientInput";
import LinkGradientButton from "../../UI/Buttons/LinkButtons/LinkGradientButton/LinkGradientButton";
import {Link} from "react-router-dom";
import {loginLink, phoneOtpLink} from "../../LinkPaths";

const FormPhoneRegister:React.FC<{}> = () => {
    const color:string = 'red';
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter Phone Number Without country Code</p>
            <form className={'formStyle'}>
                <GradientInput label={'Phone Number'} type={'number'} color={color} placeHolder={'Enter Phone Number'}/>
                <LinkGradientButton location={phoneOtpLink} text={'Get OTP'} buttonColor={color}/>
                <Link className={'link'} to={loginLink}>Get in With Other Methods</Link>
            </form>
        </div>
    );
}
export default FormPhoneRegister;