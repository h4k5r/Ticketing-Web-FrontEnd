import React, {useEffect, useReducer, useRef} from "react";
import classes from './EmailLogin.module.css'
import GradientInput from "../../UI/GradientInput/GradientInput";
import { Link } from "react-router-dom";
import {emailPasswordResetLink, emailRegisterLink, loginLink} from "../../LinkPaths";
import NormalGradientButton from "../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {emailFormReducer, initialEmailFormState} from "../../store/reducers/email-form-reducer";
import {emailValidator, passwordValidator} from "../../utils/validators";
const color:string = 'green';
const EmailLogin:React.FC<{}> = () => {
    const emailRef = useRef<HTMLInputElement>(document.createElement('input'))
    const passwordRef = useRef<HTMLInputElement>(document.createElement('input'));
    const [state,dispatch] = useReducer(emailFormReducer,initialEmailFormState);
    const {isEmailValid,isPasswordValid} = state;
    useEffect(() => {
        if(isEmailValid && isPasswordValid) {
            dispatch({type:'setFormIsValid',payload:true});
        }
    },[isEmailValid,isPasswordValid])
    const emailOnchangeHandler = () => {
        dispatch({type:'setEmailIsValid',payload:true});
        dispatch({type:'setEmailErrorMessage',payload:''});
    }
    const passwordOnChangeHandler = () => {
        dispatch({type:'setPasswordIsValid',payload:true});
        dispatch({type:'setPasswordErrorMessage',payload:''});
    }
    const emailBlurHandler = (event:React.FocusEvent<HTMLInputElement>) => {
        const enteredEmail = event.target.value;
        emailValidator(enteredEmail,dispatch);
    };
    const passwordBlurHandler = (event:React.FocusEvent<HTMLInputElement>) => {
        const enteredPassword = event.target.value;
        passwordValidator(enteredPassword,dispatch)
    };
    const formSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter Your Credentials</p>
            <form className={'formStyle'} onSubmit={formSubmitHandler}>
                <GradientInput  label={'Email'} type={'text'} color={color}
                                placeHolder={'Enter Email'} ref={emailRef}
                                onBlurHandler={emailBlurHandler} onChangeHandler={emailOnchangeHandler}/>
                {!state.isEmailValid &&
                state.emailErrorMessage.length > 0 &&
                <p className={'error'}>{state.emailErrorMessage}</p>}
                <GradientInput label={'Password'} type={'password'} color={color}
                               placeHolder={'Enter Password'} ref={passwordRef}
                               onBlurHandler={passwordBlurHandler} onChangeHandler={passwordOnChangeHandler}/>
                {!state.isPasswordValid &&
                state.passwordErrorMessage.length > 0 &&
                <p className={'error'}>{state.passwordErrorMessage}</p>}
                <NormalGradientButton text={'Login'} buttonColor={color} type={'submit'}
                                      disabled={!state.isFormValid} cssClasses={[classes.btn]}/>
                <Link className={'link'} to={emailRegisterLink}>New User? Click here to Register.</Link>
                <Link className={'link'} to={emailPasswordResetLink}>Forgot Password?</Link>
                <Link className={'link'} to={loginLink}>Get in With Other Methods</Link>
            </form>

        </div>
    )
}
export default EmailLogin;