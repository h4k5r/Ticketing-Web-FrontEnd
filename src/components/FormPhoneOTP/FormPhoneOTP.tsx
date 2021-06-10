import React, {useReducer} from "react";
import GradientInput from "../../UI/GradientInput/GradientInput";
import {initialPhoneFormState, phoneFormReducer} from "../../store/reducers/phone-form-reducer";
import {OTPValidator} from "../../utils/validators";
import NormalGradientButton from "../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
const color:string = 'green';

const FormPhoneOTP:React.FC<{}>= () => {
    const [state,dispatch] = useReducer(phoneFormReducer,initialPhoneFormState)
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
    }
    console.log(!state.isOTPValid,state.OTPErrorMessage.length > 0)
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter Received OTP</p>
            <form className={'formStyle'} onSubmit={onSubmitHandler}>
                <GradientInput label={'OTP'} type={'text'} color={color} placeHolder={'Enter OTP'}
                               onBlurHandler={onOTPBlurHandler} onChangeHandler={onOTPChangeHandler}/>
                {!state.isOTPValid &&
                state.OTPErrorMessage.length > 0 &&
                <p className={'error'}>{state.OTPErrorMessage}</p>}
                <NormalGradientButton text={'Verify OTP'} buttonColor={color} disabled={!state.isOTPValid}/>
            </form>
        </div>
    );
}
export default FormPhoneOTP;