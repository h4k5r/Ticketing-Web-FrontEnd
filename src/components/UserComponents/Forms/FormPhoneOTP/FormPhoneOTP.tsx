import React, {useReducer} from "react";
import {useDispatch, useSelector} from "react-redux";
import classes from './FormPhoneOTP.module.css'
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {initialPhoneFormState, phoneFormReducer} from "../../../../reducers/phone-form-reducer";
import {otpVerify} from "../../../../store/auth-slice";
import {OTPValidator} from "../../../../utils/validators";
import {RootState} from "../../../../store";

const color:string = 'green';

const FormPhoneOTP:React.FC<{}>= () => {
    const otpToken = useSelector((state:RootState) => {return state.auth.otpToken})
    const reduxDispatch = useDispatch();
    const [state,dispatch] = useReducer(phoneFormReducer,initialPhoneFormState);

    const onOTPBlurHandler = (event:React.FocusEvent<HTMLInputElement>) => {
        const enteredOTP = event.target.value;
        OTPValidator(enteredOTP,dispatch);
    }
    const onOTPChangeHandler = () => {
        dispatch({type:'setIsOTPValid',payload:true});
        dispatch({type:'setOTPErrorMessage',payload:''});
    }
    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        reduxDispatch(otpVerify(state.OTP,otpToken,
            () => {
                console.log('Verification Successful');
            },
            () => {
                console.log('Verification Failed');
            })
        );
    }
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter Received OTP</p>
            <form className={'formStyle'} onSubmit={onSubmitHandler}>
                <GradientInput label={'OTP'} type={'text'} color={color} placeHolder={'Enter OTP'}
                               onBlurHandler={onOTPBlurHandler} onChangeHandler={onOTPChangeHandler}/>
                {!state.isOTPValid &&
                state.OTPErrorMessage.length > 0 &&
                <p className={'error'}>{state.OTPErrorMessage}</p>}
                <NormalGradientButton text={'Verify OTP'} buttonColor={color} disabled={!state.isOTPValid} cssClassesOnContainer={[classes.btn]}/>
            </form>
        </div>
    );
}
export default FormPhoneOTP;