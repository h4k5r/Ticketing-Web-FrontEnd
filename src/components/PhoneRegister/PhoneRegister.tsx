import React from "react";
import TextInput from "../../UI/TextInput/TextInput";
import GradientButton from "../../UI/Buttons/GradientButton/GradientButton";
import {Link} from "react-router-dom";
import {loginLink, phoneOtpLink} from "../../LinkPaths";

const PhoneRegister:React.FC<{}> = () => {
    const color:string = 'red';
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter Phone Number Without country Code</p>
            <form className={'formStyle'}>
                <TextInput type={'number'} color={color} placeHolder={'Enter Phone Number'}/>
                <GradientButton location={phoneOtpLink} text={'Get OTP'} buttonColor={color}/>
                <Link className={'link'} to={loginLink}>Get in With Other Methods</Link>
            </form>
        </div>
    );
}
export default PhoneRegister;