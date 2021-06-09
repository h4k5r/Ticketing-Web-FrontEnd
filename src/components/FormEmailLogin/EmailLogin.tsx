import React, {useEffect, useReducer, useRef} from "react";
import GradientInput from "../../UI/GradientInput/GradientInput";
import { Link } from "react-router-dom";
import {emailPasswordResetLink, emailRegisterLink, loginLink} from "../../LinkPaths";
import NormalGradientButton from "../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

type formState = {
    isEmailValid:boolean,
    emailErrorMessage:string,
    isPasswordValid:boolean,
    passwordErrorMessage:string,
    isFormValid:boolean,
    email:string,
    password:string
}
type formAction = { type:'setEmailIsValid' | 'setPasswordIsValid' | 'setFormIsValid', payload:boolean } |
    { type: 'setEmailErrorMessage' | 'setPasswordErrorMessage', payload:string} |
    { type: 'setEmail' | 'setPassword', payload:string}

const formReducer:React.Reducer<formState, formAction> = (state:formState,action:formAction) => {
    const updatedState = {...state}
    switch (action.type) {
        case "setEmail":
            updatedState.email = action.payload
            return updatedState;
        case 'setEmailIsValid' :
            updatedState.isEmailValid = action.payload
            return updatedState;
        case 'setEmailErrorMessage':
            updatedState.emailErrorMessage = action.payload
            return updatedState;

        case "setPassword":
            updatedState.password = action.payload
            return updatedState;
        case 'setPasswordIsValid':
            updatedState.isPasswordValid = action.payload
            return updatedState;
        case 'setPasswordErrorMessage':
            updatedState.passwordErrorMessage = action.payload
            return updatedState;

        case "setFormIsValid":
            updatedState.isFormValid = action.payload
            return updatedState;
        default:
            return{...state}
    }

}
const initialFormState: formState = {
    isEmailValid:false,
    isPasswordValid:false,
    isFormValid:false,
    emailErrorMessage:'',
    passwordErrorMessage:'',
    email:'',
    password:''
}

const EmailLogin:React.FC<{}> = () => {
    const emailRef = useRef<HTMLInputElement>(document.createElement('input'))
    const passwordRef = useRef<HTMLInputElement>(document.createElement('input'));
    const [state,dispatch] = useReducer(formReducer,initialFormState);
    const {isEmailValid,isPasswordValid} = state;
    useEffect(() => {
        if(isEmailValid && isPasswordValid) {
            dispatch({type:'setFormIsValid',payload:true})
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
        if(!enteredEmail.includes('@')) {
            dispatch({type:'setEmailIsValid',payload:false});
            dispatch({type:'setEmailErrorMessage',payload:'Enter A valid Email'});
            return;
        }
        dispatch({type:'setEmailIsValid',payload:true});
        dispatch({type:'setEmailErrorMessage',payload:''});
        dispatch({type:'setEmail',payload:enteredEmail})
    };
    const passwordBlurHandler = (event:React.FocusEvent<HTMLInputElement>) => {
        const enteredPassword = event.target.value;
        if(enteredPassword.length < 6) {
            dispatch({type:'setPasswordIsValid',payload:false});
            dispatch({type:'setPasswordErrorMessage',payload:'Enter a password with more than 6 characters'});
            return;
        }
        dispatch({type:'setPasswordIsValid',payload:true});
        dispatch({type:'setPasswordErrorMessage',payload:''});
        dispatch({type:'setPassword',payload:enteredPassword})
    };
    const formSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
    };
    console.log(!state.isEmailValid);
    console.log(state.emailErrorMessage.length > 0)
    const color:string = 'green';
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
                <NormalGradientButton text={'Login'} buttonColor={'green'} type={'submit'} disabled={!state.isFormValid}/>

            </form>
            <Link className={'link'} to={emailRegisterLink}>New User? Click here to Register.</Link>
            <Link className={'link'} to={emailPasswordResetLink}>Forgot Password?</Link>
            <Link className={'link'} to={loginLink}>Get in With Other Methods</Link>
        </div>
    )
}
export default EmailLogin;