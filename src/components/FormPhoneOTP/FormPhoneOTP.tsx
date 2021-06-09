import React from "react";
import GradientInput from "../../UI/GradientInput/GradientInput";
import LinkGradientButton from "../../UI/Buttons/LinkButtons/LinkGradientButton/LinkGradientButton";
import {searchLink} from "../../LinkPaths";

const FormPhoneOTP:React.FC<{}>= () => {
    const color:string = 'green';
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter Received OTP</p>
            <form className={'formStyle'}>
                <GradientInput label={'OTP'} type={'number'} color={color} placeHolder={'Enter OTP'}/>
                <LinkGradientButton location={searchLink} text={'Verify OTP'} buttonColor={color}/>
            </form>
        </div>
    );
}
export default FormPhoneOTP;