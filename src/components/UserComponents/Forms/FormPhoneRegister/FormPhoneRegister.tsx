import React, {useReducer, useRef} from "react";
import {Link,useHistory} from "react-router-dom";

import classes from './FormPhoneRegister.module.css'
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import {loginLink, phoneOtpLink} from "../../../../LinkPaths";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {phoneNumberValidator} from "../../../../utils/validators";
import {initialPhoneFormState, phoneFormReducer} from "../../../../reducers/phone-form-reducer";
import {useDispatch} from "react-redux";
import {authActions} from "../../../../store/auth-slice";

const color:string = 'red';
const FormPhoneRegister:React.FC<{}> = () => {
    const authDispatch = useDispatch();
    const history = useHistory();
    const codeRef = useRef<HTMLSelectElement>(document.createElement('select'));
    const [state,dispatch] = useReducer(phoneFormReducer,initialPhoneFormState);

    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const code = codeRef.current.value;
        const numberString = code + state.phoneNumber.toString();
        console.log(numberString);
        fetch('http://localhost:8080/phoneAuth',{
            method:'POST',
            body:JSON.stringify({
                phone:numberString
            }),
            headers:{
                'Content-type':'application/json'
            }
        })
            .then((result) => {
                return result.json();
            })
            .then(data => {
                console.log(data);
                if(data.error) {
                    return Promise.reject(data.errorMessage);
                }
                authDispatch(authActions.setToken({otpToken:data.verificationToken}));
            })
            .catch((error) => {
                console.log(error)
            })
        history.push(phoneOtpLink);
    }
    const onNumberChangeHandler = () => {
        dispatch({type:'setIsPhoneNumberValid',payload:true});
        dispatch({type:'setPhoneNumberErrorMessage',payload:''});
    }
    const onBlurHandler = (event:React.FocusEvent<HTMLInputElement>) => {
        const enteredValue = event.target.value;
        phoneNumberValidator(enteredValue,dispatch);
    }
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter Phone Number Without country Code</p>
            <form className={'formStyle'} onSubmit={onSubmitHandler}>
                <div className={classes.formSubContainer}>
                    <select ref={codeRef} className={classes.codeSelector}>
                        <option value={'91'}>+91 IND</option>
                    </select>
                    <GradientInput label={'Phone Number'} type={'string'} color={color}
                                   placeHolder={'Enter Phone Number'} cssClasses={[classes.numberInput]}
                                   onChangeHandler={onNumberChangeHandler} onBlurHandler={onBlurHandler}/>
                </div>
                {!state.isPhoneNumberValid && <p className={'error'}>{state.phoneNumberErrorMessage}</p>}
                <NormalGradientButton text={'Get OTP'} buttonColor={'red'} type={'submit'}
                                      disabled={!state.isPhoneNumberValid} cssClassesOnContainer={[classes.btn]}/>
                <Link className={'link'} to={loginLink}>Get in With Other Methods</Link>
            </form>
        </div>
    );
}
export default FormPhoneRegister;