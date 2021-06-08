import React from "react";
import TextInput from "../../UI/TextInput/TextInput";
import GradientButton from "../../UI/Buttons/GradientButton/GradientButton";
import {searchLink} from "../../LinkPaths";

const PhoneOTP:React.FC<{}>= () => {
    const color:string = 'green';
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter Received OTP</p>
            <form className={'formStyle'}>
                <TextInput label={'OTP'} type={'number'} color={color} placeHolder={'Enter OTP'}/>
                <GradientButton location={searchLink} text={'Verify OTP'} buttonColor={color}/>
            </form>
        </div>
    );
}
export default PhoneOTP;